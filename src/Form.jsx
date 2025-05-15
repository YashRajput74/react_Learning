import { useState } from "react"

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Congrats! You are one step closer to becoming a developer.</h1>
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (answer.toLowerCase().includes('yes')) {
                    resolve();
                } else {
                    reject(new Error('Wrong answer'));
                }
            }, 1000);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }


    return (
        <div className="form">
            <h2>Example Form</h2>
            <p>So do you like react?</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="error message">
                        Well that's your problem.
                    </p>
                }
            </form>
        </div>
    )
}
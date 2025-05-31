import { useEffect, useRef, useState } from "react"

export default function FormUseEffect() {
    const [showForm, setShowForm] = useState(false);
    const [firstName, setFirstName] = useState("Sunidhi");
    const [lastName, setLastName] = useState("Chauhan");
    function handleForm() {
        setShowForm(!showForm);
    }
    function onFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function onLastNameChange(e) {
        setLastName(e.target.value);
    }
    return (
        <>
            <button onClick={handleForm}>{showForm ? 'Hide' : 'Show'} Form</button>
            {showForm && (
                <>
                    <label htmlFor="firstName">Enter your first Name</label>
                    <MyInput id="firstName" shouldFocus={true} value={firstName} onChange={onFirstNameChange} />
                    <label htmlFor="lastName">Enter your last Name</label>
                    <MyInput id="lastName" shouldFocus={false} value={lastName} onChange={onLastNameChange} />
                    <p>Hello, the legendary singer {firstName + ' ' + lastName}</p>
                </>
            )}
        </>
    )
}

function MyInput({ shouldFocus, value, onChange }) {
    const ref = useRef(null);
    useEffect(() => {
        if (shouldFocus) {
            ref.current.focus();
        }
    }, [shouldFocus]);
    return (
        <input type="text" ref={ref} value={value} onChange={onChange} />
    )
}
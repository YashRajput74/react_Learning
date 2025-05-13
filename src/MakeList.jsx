import { useState } from "react"

let nextId = 0;

export default function MakeList() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={
                () => {
                    setArtists([
                        ...artists,
                        {
                            id: nextId++,
                            name: name
                        }
                    ])
                }
            }>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    )
}
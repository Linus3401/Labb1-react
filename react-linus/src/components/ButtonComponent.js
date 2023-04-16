import { useState } from 'react'

function MyName() {
    const [name, setName] = useState('Linus')

    return (
        <div>
            <h1>Hej mitt namn är {name}</h1>
            <input
                type="button"
                value="Klicka här och jag byter namn"
                onClick={() => setName('Bertil')}
            />
        </div>
    )
}

export default MyName

import React, {useState, useEffect} from 'react'

function Stock () {
    const [stock, setStock] = useState([])

    useEffect(() => {
        fetch('stock.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(stock => setStock(stock))
    })
    return (
        <div>
            <ul>
                {stock.map(json => (
                    <li key={json.id}>
                        {json.name}
                        {json.antal}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Stock

import react from 'react'

const Dogs = ({dogs}) => {
    
    return(
        <div>
            {dogs.map(dog => (
            <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} />
            <p><strong>Age:</strong> {dog.age}</p>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
            </div>
            ))}
        </div>
    )
}

export default Dogs;
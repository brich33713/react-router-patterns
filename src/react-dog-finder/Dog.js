import react from 'react'
import Dogs from './Dogs'
import {useParams} from 'react-router-dom'

const Dog = ({dogs}) => {
    let {dogName} = useParams()
    dogName = dogName.charAt(0).toUpperCase() + dogName.slice(1)
    let age;
    let facts;
    let src;

    for(let dog of dogs){
        if(dog.name === dogName){
            age = dog.age;
            facts = dog.facts;
            src = dog.src;
        }
    }
    return(
        <div>
            <h1>{dogName}</h1>
            <img src={src} />
            <p><strong>Age:</strong> {age}</p>
            <ul>
                {facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default Dog;
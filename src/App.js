import './App.css';
import whiskey from './react-dog-finder/react-router-patterns/whiskey.jpg'
import perry from './react-dog-finder/react-router-patterns/perry.jpg'
import tubby from './react-dog-finder/react-router-patterns/tubby.jpg'
import duke from './react-dog-finder/react-router-patterns/duke.jpg'
import {useParams, Route, BrowserRouter, Switch, Redirect, Link} from 'react-router-dom'
import Dogs from './react-dog-finder/Dogs';
import Dog from './react-dog-finder/Dog'
import Nav from './react-dog-finder/Nav'
import Colors from '../../test/src/react-color-factory/Colors'
import Color from '../../test/src/react-color-factory/Color'
import AddColor from '../../test/src/react-color-factory/AddColor'

function App(props) {
  let names = [];
  props.dogs.map(dog => names.push({name: dog.name,link: `/dogs/${dog.name}`}))
  console.log(names)
  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={names}/>
        <Switch>
          <Route exact path="/dogs"><Dogs dogs={props.dogs}/></Route>
          <Route exact path="/dogs/:dogName"><Dog dogs={props.dogs}/></Route>
          <Redirect to="/dogs"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;

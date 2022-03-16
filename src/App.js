import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr Mahfuz', profession: 'singer'},
  {name: 'Eva Rahman', profession: 'singer'},
  {name: 'Nobel', profession: 'singer'},
  {name: 'Jems', profession: 'singer'}
];

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'Bappi', 'BappaRaz', 'Kuber', 'Jashim', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name= {nayok} nayika='Pori moni'></Person>)
      } */}
      {
        singers.map(singer => <Person name= {singer.name} nayika= {singer.profession}></Person>)
      }
      {/* <Person name= {nayoks[0]} nayika = 'Faria'></Person>
      <Person name= {nayoks[1]} nayika= 'Chekakur'></Person>
      <Person name= {nayoks[2]} nayika= 'Kopila'></Person> */}
      <h3>New component added</h3>
      <Friend phone = '0177777'></Friend>
      <Friend phone = '0199999'></Friend>
    </div>
  );
}
function Person(props){
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props){
  // console.log(props);
  return (
    <div className='container'>
        <h3>Name: Ajay Devgun</h3>
        <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;

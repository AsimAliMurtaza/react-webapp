import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = ()=>{

  const [searchFieldString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  
  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  };

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  useEffect(()=>{
    const NewfilterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFieldString);
   })
   setFilterMonsters(NewfilterMonsters);
  }, [monsters, searchFieldString]);

  return(
    <div className="App">
    <h1 className='app-title'> Monsters Mania</h1>
    <SearchBox onChange={onSearchChange} placeholder='search monsters' className='search-box'/>
    <CardList monsters= {filterMonsters} />
  </div>
  );
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchString: ''
//     };
//   }
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//       },
//       () => {
//         console.log(this.state);
//       }
//     )
//   );
// };

//   render(){
//     const {monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//       }
//     );
    
//   };
// }

export default App;

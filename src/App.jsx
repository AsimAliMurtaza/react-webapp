import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchFieldString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFieldString)
    );
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchFieldString]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Mania</h1>
      <SearchBox
        onChange={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default App;

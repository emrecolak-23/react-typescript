import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { getData } from './utils/fetch.utils';

import { FormEvent } from 'react';

export type Monster = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [monsters, setMonsters ] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonters] = useState(monsters)

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchTerm);
    });

    setFilteredMonters(newFilteredMonsters)
  }, [monsters, searchTerm])

  const onSearchChange = (event: FormEvent<HTMLInputElement>):void => {
    const {target} = event
    const searchTermString = (target as HTMLInputElement).value.toLocaleLowerCase();
    setSearchTerm(searchTermString)
  };

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
}

export default App;

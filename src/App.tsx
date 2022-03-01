import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    reason?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Willem Dafoe",
      url: "https://www.giantfreakinrobot.com/wp-content/uploads/2021/03/willem-dafoe.jpg",
      age: 66,
      reason: "Killed aunt May"
    }
  ])

  return (
    <div className="App">
      <h1>Archnemesis list</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;

// src/App.jsx

import { useState } from 'react'

const App = () => {

  // putting this at the front so I don't have to keep scrolling past it
  const totalList = [
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ];

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([...totalList]);



  // take a fighter out of zombieFighters, and add it to team
  // addFighter is just in the local scope of this function, and is the specific one being added
  // used a different variable name from the zombieFighters.filter()
  const handleAddFighter = (addFighter) => {
    if (money >= addFighter.price) {
      setMoney(money - addFighter.price);

      setTeam([...team, addFighter]);
      // setTeam(team => [...team, zombieFighter]);

      setZombieFighters(
        zombieFighters.filter((zombieFighter) => zombieFighter.id !== addFighter.id)
      );
    } else {
      console.log('poor, sad');
    };
  };

  return (
    <>
      <h1>Reactville Zombie Apocalypse</h1>

      <h2>Your inventory:</h2>
      Money: {money}

      <h2>Your team:</h2>
      <h4>
        {team.length === 0 ? 'Pick some team members!' : ''}
      </h4>
      <ul>
        {team.map((zombieFighter, index) => (
          <li>
            <h3>{zombieFighter.name}</h3>
            <img src={zombieFighter.img} alt="image of zombie fighter character" />
            <br />
            Price: {zombieFighter.price}
            <br />
            Strength: {zombieFighter.strength}
            <br />
            Agility: {zombieFighter.agility}
            <br />
            {/* <button onClick={() => handleAddFighter(zombieFighter)}>Add to team</button> */}
          </li>
        ))}
      </ul>

      <h2>Available characters:</h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li>
            <h3>{zombieFighter.name}</h3>
            <img src={zombieFighter.img} alt="image of zombie fighter character" />
            <br />
            Price: {zombieFighter.price}
            <br />
            Strength: {zombieFighter.strength}
            <br />
            Agility: {zombieFighter.agility}
            <br />
            <button onClick={() => handleAddFighter(zombieFighter)}>Add to team</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';
import { useState } from 'react';

const App = () => {
  const [money, setMoney] = useState(100);
  const [team, setTeam] = useState([]);
  const [zombieFighters, setZombieFighters] = useState([
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
  ]);

  let totalStrength = team.reduce((total, currentMember) => {
return total + currentMember.strength; 
  }, 0); 

  let totalAgility = team.reduce((total, currentMember) => {
    return total + currentMember.agility; 
      }, 0); 

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('not enough money');
    } else {
      const newTeam = [...team, fighter];
      setTeam(newTeam);

      const updatedZombieFighters = zombieFighters.filter(
        (zFighter) => fighter.id !== zFighter.id
      );
      setZombieFighters(updatedZombieFighters);

      const newTotal = money - fighter.price;
      setMoney(newTotal);

      


    }
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeamFighters = team.filter(
      (zFighter) => fighter.id !== zFighter.id
    );
    setTeam(updatedTeamFighters);

    const newTotal = money + fighter.price;
    setMoney(newTotal);

    const updatedZombieFighters = [...zombieFighters, fighter];
      setZombieFighters(updatedZombieFighters);

  } 
  return (
    <>
      <h1>Zombies</h1>
      <h3>Current Funds: ${money}</h3>
      <h3>Your Team:</h3>
<h3>Total Strength: { totalStrength}</h3>
<h3>Total Agility: { totalAgility}</h3>
      <ul>
        {team.length ? (
          team.map((zFighter) => (
            <li key={zFighter.id}>
              Name: {zFighter.name}
              Price: {zFighter.price}
              Strength: {zFighter.strength}
              Agility: {zFighter.agility}
              <img src={zFighter.img} alt="Zombie Fighter Image" />
              <button onClick={() => handleRemoveFighter(zFighter)}>Remove</button>
            </li>
          ))
        ) : (
          <h3>Pick some team members</h3>
        )}
      </ul>

      <h3> Available fighters</h3>
      <ul>
        {zombieFighters.map((zFighter) => (
          <li key={zFighter.id}>
            Name: {zFighter.name}
            Price: {zFighter.price}
            Strength: {zFighter.strength}
            Agility: {zFighter.agility}
            <img src={zFighter.img} alt="Zombie Fighter Image" />
            <button onClick={() => handleAddFighter(zFighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;









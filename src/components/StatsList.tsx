import { useState } from "react";

function StatsList() {
  const [stats, setStats] = useState({
    strength: 7,
    personality: 10,
    endurance: 9,
    charisma: 11,
    agility: 10,
    intelligence: 6,
    luck: 15,
  });
  return (
    <ul className="font-bold">
      <li className="flex justify-between">
        <span>Strength</span>
        <button
          onClick={() => setStats({ ...stats, strength: stats.strength - 1 })}
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="strength">{stats.strength}</span>
        <button
          onClick={() => setStats({ ...stats, strength: stats.strength + 1 })}
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Personality</span>
        <button onClick={() => setStats({ ...stats, personality: stats.personality - 1 })}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
        <span id="personality">{stats.personality}</span>
        <button onClick={ () => setStats({ ...stats, personality: stats.personality + 1 })}><span className="material-symbols-outlined">add_circle</span></button>
      </li>
      <li className="flex justify-around">
        <span>Endurance</span>
        <button onClick={() => setStats({ ...stats, endurance: stats.endurance - 1 })}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
        <span id="endurance">{stats.endurance}</span>
        <button onClick={ () => setStats({ ...stats, endurance: stats.endurance + 1 })}><span className="material-symbols-outlined">add_circle</span></button>
      </li>
      <li className="flex justify-around">
        <span>Charisma</span>
        <button onClick={() => setStats({ ...stats, charisma: stats.charisma - 1 })}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
        <span id="charisma">{stats.charisma}</span>
        <button onClick={ () => setStats({ ...stats, charisma: stats.charisma + 1 })}><span className="material-symbols-outlined">add_circle</span></button>
      </li>
      <li className="flex justify-around">
        <span>Agility</span>
        <button onClick={() => setStats({ ...stats, agility: stats.agility - 1 })}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
        <span id="agility">{stats.agility}</span>
        <button onClick={ () => setStats({ ...stats, agility: stats.agility + 1 })}><span className="material-symbols-outlined">add_circle</span></button>
      </li>
      <li className="flex justify-around">
        <span>Intelligence</span>
        <button onClick={() => setStats({ ...stats, intelligence: stats.intelligence - 1 })}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
        <span id="intelligence">{stats.intelligence}</span>
        <button onClick={ () => setStats({ ...stats, intelligence: stats.intelligence + 1 })}><span className="material-symbols-outlined">add_circle</span></button>
      </li>
      <li className="flex justify-around">
        <span>Luck</span>
        <button onClick={() => setStats({ ...stats, luck: stats.luck - 1 })}><span className="material-symbols-outlined">do_not_disturb_on</span></button>
        <span id="luck">{stats.luck}</span>
        <button onClick={ () => setStats({ ...stats, luck: stats.luck + 1 })}><span className="material-symbols-outlined">add_circle</span></button>
      </li>
    </ul>
  );
}
export default StatsList;

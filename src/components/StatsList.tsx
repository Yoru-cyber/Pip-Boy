import { createContext, useState } from "react";
// import Stat from "./Stat";

function StatsList() {
  const [points, setPoints] = useState(10);
  const PointsContext = createContext<number>(10);
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
    <PointsContext.Provider value={10}>
    <ul className="font-bold">
      <li className="flex justify-between">
        <span>Strength</span>
        <button
          onClick={() => {
            if (stats.strength > 0) {
              setStats({ ...stats, strength: stats.strength - 1 });
              setPoints(points + 1);
            } else {
              alert("Cannot go below 0");
            }
          }}
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="strength">{stats.strength}</span>
        <button
          onClick={() => {
            if(points > 0){
              setStats({ ...stats, strength: stats.strength + 1 });
              setPoints(points - 1);
            }
            else {
              alert("Cannot go below 0");
            }
            
          }}
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Personality</span>
        <button
          onClick={() =>
            setStats({ ...stats, personality: stats.personality - 1 })
          }
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="personality">{stats.personality}</span>
        <button
          onClick={() =>
            setStats({ ...stats, personality: stats.personality + 1 })
          }
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Endurance</span>
        <button
          onClick={() => setStats({ ...stats, endurance: stats.endurance - 1 })}
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="endurance">{stats.endurance}</span>
        <button
          onClick={() => setStats({ ...stats, endurance: stats.endurance + 1 })}
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Charisma</span>
        <button
          onClick={() => setStats({ ...stats, charisma: stats.charisma - 1 })}
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="charisma">{stats.charisma}</span>
        <button
          onClick={() => setStats({ ...stats, charisma: stats.charisma + 1 })}
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Agility</span>
        <button
          onClick={() => setStats({ ...stats, agility: stats.agility - 1 })}
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="agility">{stats.agility}</span>
        <button
          onClick={() => setStats({ ...stats, agility: stats.agility + 1 })}
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Intelligence</span>
        <button
          onClick={() =>
            setStats({ ...stats, intelligence: stats.intelligence - 1 })
          }
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="intelligence">{stats.intelligence}</span>
        <button
          onClick={() =>
            setStats({ ...stats, intelligence: stats.intelligence + 1 })
          }
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li className="flex justify-around">
        <span>Luck</span>
        <button onClick={() => setStats({ ...stats, luck: stats.luck - 1 })}>
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        <span id="luck">{stats.luck}</span>
        <button onClick={() => setStats({ ...stats, luck: stats.luck + 1 })}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </li>
      <li>
        <p>Total points {points}</p>
      </li>
      {/* <li className="flex justify-between">
        <Stat initialStats={{name: 'Personality', value: 1}} initialPoints={PointsContext}></Stat>
      </li> */}
    </ul>
    </PointsContext.Provider>
  );
}
export default StatsList;

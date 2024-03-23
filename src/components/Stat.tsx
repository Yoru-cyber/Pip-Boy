import { Context, useContext, useState } from "react";
interface IPropsStat {
  name: string;
  value: number;
}
// interface IPoints{
//     points: number
// }
interface IStatComponent {
  initialStats: IPropsStat;
  initialPoints: Context<any>;
}
function Stat(props: IStatComponent) {
  const [stats, setStats] = useState<IPropsStat>(props.initialStats);
  // not implemented
  const points = useContext(props.initialPoints);
  return (
    <>  
      <span>{stats.name}</span>
      <button
        onClick={() => {
          if (stats.value > 0) {
            setStats({ ...stats, value: stats.value - 1 });
            points.current = points.current + 1;
          } else {
            alert("Cannot go below 0");
          }
        }}
      >
        <span className="material-symbols-outlined">do_not_disturb_on</span>
      </button>
      <span id={stats.name}>{stats.value}</span>
      <button
        onClick={() => {
          console.log(props.initialPoints);
          if (points.current > 0) {
            setStats({ ...stats, value: stats.value + 1 });
            points.current = points - 1 ;
          } else {
            alert("Cannot go below 0");
          }
        }}
      >
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </>
  );
}
export default Stat;

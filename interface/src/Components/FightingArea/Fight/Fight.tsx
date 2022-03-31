import data from "../Data/fighters.json";
import "./Fight.css"

console.log(data)


const Fight = (fighter1: any, fighter2: any) => {

    return (
      <div className="fight-container">
          <div className="fighter1-area">
              {data.fighters.map(({name}) => {
                 if (name === fighter1) {
                     return (
                         <h3>{name}</h3>
                     )
                 }
              })}
          </div>
          <div className="fighter2-area">
          {data.fighters.map(({name}) => {
                 if (name === fighter2) {
                     return (
                         <h3>{name}</h3>
                     )
                 }
              })}
          </div>
      </div>
    )
}

export default Fight;

//let MainEv = new Fight('Conor McGregor', 'Dustin Poirier')
import './Fighters.css';
import data from '../Data/fighters.json';

const Fighters: React.FC = () => {
 
  return (
    <div className='fighters-area'>
      <div className='fighters-grid'>
        {data.fighters.map((fighter, key) => {
           const background = {
             backgroundImage: fighter.photo,
             backgroundPosition: "top",
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover"
           }
          return (
            <div key={key} className='fighter-container' style={background}>
              <h2>
                {fighter.firstName} {fighter.lastName}
              </h2>
              <h3>"{fighter.nickname}"</h3>
              <h3>age: {fighter.age}</h3>
              <h3>height: {fighter.height}</h3>
              <h3>weight: {fighter.weight}</h3>
              <h3>reach: {fighter.reach}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fighters;

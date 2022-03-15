import './Fighters.css';
import data from './Data/fighters.json';

const Fighters: React.FC = () => {
  return (
    <div className='fighters-area'>
      <div className='fighters-grid'>
        {data.fighters.map((item, key) => {
          return (
            <div key={key} className='fighter-container'>
              <h2>
                {item.firstName} {item.lastName}
              </h2>
              <h3>"{item.nickname}"</h3>
              <h3>age: {item.age}</h3>
              <h3>height: {item.height}</h3>
              <h3>weight: {item.weight}</h3>
              <h3>reach: {item.reach}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fighters;

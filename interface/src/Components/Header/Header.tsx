import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='logo'></div>
      <ul className='menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/leaderboard'>Leaderboard </Link>
        </li>
        <li>
          <Link to='/fighters'>Fighters</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

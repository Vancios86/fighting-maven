import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <ul className="menu">
        <li>Leaderboard</li>
        <li>Fighters</li>
      </ul>
    </div>
  );
};

export default Header;

import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <ul className="menu">
        <li>Leaderboards</li>
        <li>Events</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Header;

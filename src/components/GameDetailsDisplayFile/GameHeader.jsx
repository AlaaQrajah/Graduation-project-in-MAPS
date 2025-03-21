import { FaHome } from 'react-icons/fa';
import '../FilesCss/CsstoGameDetalis/GameHeader.css';

const GameHeader = ({ details }) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-navigation">
          <FaHome className="header-icon" />
          <span>HOME</span>
          <span>/</span>
          <span>GAMES</span>
          <span>/</span>
          <span>{details.name?.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
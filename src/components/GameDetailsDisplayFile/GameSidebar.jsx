import { FaDesktop, FaCalendar, FaGamepad, FaGlobe } from 'react-icons/fa';
import '../FilesCss/CsstoGameDetalis/GameSidebar.css';

const GameSidebar = ({ details }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <div>
          <h3 className="sidebar-heading">
            <div className="sidebar-heading-content">
              <FaDesktop className="sidebar-icon" />
              Platforms
            </div>
          </h3>
          <div className="sidebar-tags">
            {details.platforms?.map(platform => (
              <span
                key={platform.platform.id}
                className="sidebar-tag"
              >
                {platform.platform.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="sidebar-heading">
            <div className="sidebar-heading-content">
              <FaCalendar className="sidebar-icon" />
              Release date
            </div>
          </h3>
          <p className="sidebar-text">{new Date(details.released).toLocaleDateString()}</p>
        </div>

        <div>
          <h3 className="sidebar-heading">
            <div className="sidebar-heading-content">
              <FaGamepad className="sidebar-icon" />
              Genre
            </div>
          </h3>
          <div className="sidebar-tags">
            {details.genres?.map(genre => (
              <span
                key={genre.id}
                className="sidebar-tag"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="sidebar-heading">Age rating</h3>
          <p className="sidebar-text">{details.esrb_rating?.name || 'RP Rating Pending'}</p>
        </div>

        <div>
          <h3 className="sidebar-heading">Developer</h3>
          <p className="sidebar-text">{details.developers?.map(dev => dev.name).join(', ')}</p>
        </div>

        <div>
          <h3 className="sidebar-heading">Publisher</h3>
          <p className="sidebar-text">{details.publishers?.map(pub => pub.name).join(', ')}</p>
        </div>

        {details.website && (
          <div>
            <h3 className="sidebar-heading">Website</h3>
            <a
              href={details.website}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
            >
              <FaGlobe className="text-sm" />
              Visit official website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameSidebar;
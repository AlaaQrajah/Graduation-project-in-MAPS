import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import gameService from "../../services/game-service";
import { FaHome } from 'react-icons/fa';
import GameDetailsSkeleton from "./GameDetailsSkeleton";
import GameHeader from "./GameHeader";
import GameInfo from "./GameInfo";
import GameMedia from "./GameMedia";
import GameAbout from "./GameAbout";
import GameSidebar from "./GameSidebar";
import '../FilesCss/CsstoGameDetalis/GameDetails.css';

const GameDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [gameData, setGameData] = useState({
    details: null,
    screenshots: [],
    team: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const [detailsResponse, screenshotsResponse, teamResponse] = await Promise.all([
          gameService.getGameDetails(id),
          gameService.getGameScreenshots(id),
          gameService.getGameDevelopmentTeam(id)
        ]);
        
        setGameData({
          details: detailsResponse.data,
          screenshots: screenshotsResponse.data.results || [],
          team: teamResponse.data.results || []
        });
      } catch (err) {
        console.error('Error details:', err);
        setError("Failed to fetch game details.");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) return <GameDetailsSkeleton />;
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">{error}</div>
    </div>
  );
  if (!gameData.details) return (
    <div className="min-h-screen flex items-center justify-center">Game not found</div>
  );

  return (
    <div className="game-details-container lg:w-[900px]">

      <div className="w-full">
          <GameHeader details={gameData.details} />
          <GameInfo details={gameData.details} />
      </div>
      <div className="game-details-content w-full"   >
        <div className="game-details-grid">
          <div className="game-details-main">
            <GameMedia details={gameData.details} screenshots={gameData.screenshots} />
            <GameAbout 
              description={gameData.details.description_raw}
              showFullDescription={showFullDescription}
              setShowFullDescription={setShowFullDescription}
            />
          </div>
          <div className="game-details-sidebar">
            <GameSidebar details={gameData.details} />
          </div>
        </div>
      </div>

      <div className="back-button-container">
        <button
          onClick={() => navigate('/')}
          className="back-button"
        >
          <FaHome className="text-lg" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default GameDetails;
import apiClient from "./api-client";

class GameService {
  getGameDetails(gameId) {
    return apiClient.get(`/games/${gameId}`);
  }

  getGameScreenshots(gameId) {
    return apiClient.get(`/games/${gameId}/screenshots`);
  }

  getGameSeries(gameId) {
    return apiClient.get(`/games/${gameId}/game-series`);
  }

  getGameDevelopmentTeam(gameId) {
    return apiClient.get(`/games/${gameId}/development-team`);
  }

  getGameAdditions(gameId) {
    return apiClient.get(`/games/${gameId}/additions`);
  }

  getGameParentGames(gameId) {
    return apiClient.get(`/games/${gameId}/parent-games`);
  }
}

// نصدر الكلاس ككائن واحد افتراضي
export default new GameService();

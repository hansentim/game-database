const apiKey = process.env.REACT_APP_KEY;

//Base URL
const base_url = 'https://api.rawg.io/api/';

//Dates
const currentDate = new Date().toISOString().slice(0, 10);
const year = new Date().getFullYear();
const month = currentDate.slice(5, 7);
const day = currentDate.slice(8, 10);
const lastYear = `${year - 1}-${month}-${day}`;
const nextYear = `${year + 1}-${month}-${day}`;

//Popular Games
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
//Upcoming Games
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
//New Games
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

//GAME DETAILS
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${apiKey}`;

//ScreenShots
export const gameScreenshotUrl = (game_id) => `
${base_url}games/${game_id}/screenshots?&key=${apiKey}
`;
console.log(newGames);

//Searched game
export const searchGameUrl = (game_name) =>
  `${base_url}games?key=${apiKey}&search=${game_name}`;

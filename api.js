const dotenv = require("dotenv");
dotenv.config();
const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&`;
const axios = require("axios").default;

const searchMovies = async (query) => {
  const url = `${baseUrl}s=${query}`;
  try {
    const response = await axios.get(url);
    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchMovies };

const dotenv = require("dotenv");
dotenv.config();
const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`;
const axios = require("axios").default;

const searchMovies = async (query, page) => {
  const url = `${baseUrl}&s=${query}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchMovies };

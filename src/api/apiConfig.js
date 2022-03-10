const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "be50485fb72c1964995e2e02441e0373",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;

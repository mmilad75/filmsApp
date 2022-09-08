import axiosInstance from './axios';

export const getGenreMoviesApi = async (genreId: number, page: number) => {
  try {
    const {data} = await axiosInstance.get(
      `discover/movie?with_genres=${genreId}&page=${page}`,
    );
    return data.results;
  } catch (error) {
    return error;
  }
};

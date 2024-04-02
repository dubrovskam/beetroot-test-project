const apiKey = '5abd21ea';
const apiUrl = 'https://www.omdbapi.com/';

const asyncJS = () => {
  const DOMSearchForm = document.getElementById('js-search-form');
  const DOMSearchInput = document.getElementById('js-search-input');
  const DOMTypeSelect = document.getElementById('js-type-select');
  const DOMMoviesList = document.getElementById('js-movies-list');
  const DOMPagination = document.getElementById('js-pagination');
  const DOMMovieDetails = document.getElementById('js-movie-details');
  const DOMsearchButton = document.getElementById('js-search-button');

  DOMSearchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = DOMSearchInput.value.trim();
    const searchType = DOMTypeSelect.value;

    DOMsearchButton.disabled = true;

    try {
      await searchMovies(searchTerm, searchType);
    } catch (error) {
      console.error(error);
    } finally {
      DOMsearchButton.disabled = false;
    }
  });

  const searchMovies = async (searchTerm, searchType, page = 1) => {
    const url = `${apiUrl}?apikey=${apiKey}&s=${searchTerm}&type=${searchType}&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        displayMovies(data.Search);
        displayPagination(data.totalResults, page, searchTerm, searchType);
      } else {
        throw new Error('Movie not found!');
      }
    } catch (error) {
      DOMMoviesList.textContent = error.message;
      DOMPagination.innerHTML = '';
      throw new Error(error.message);
    }
  };

  const showMovieDetails = async (imdbID) => {
    const url = `${apiUrl}?apikey=${apiKey}&i=${imdbID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      const movieDetails = document.createElement('div');

      const title = document.createElement('h2');
      title.textContent = data.Title;
      movieDetails.appendChild(title);

      const type = document.createElement('p');
      type.textContent = `Type: ${data.Type}`;
      movieDetails.appendChild(type);

      const year = document.createElement('p');
      year.textContent = `Year: ${data.Year}`;
      movieDetails.appendChild(year);

      const plot = document.createElement('p');
      plot.textContent = `Plot: ${data.Plot}`;
      movieDetails.appendChild(plot);

      const director = document.createElement('p');
      director.textContent = `Director: ${data.Director}`;
      movieDetails.appendChild(director);

      const actors = document.createElement('p');
      actors.textContent = `Actors: ${data.Actors}`;
      movieDetails.appendChild(actors);

      const poster = document.createElement('img');
      poster.src = data.Poster;
      poster.alt = `${data.Title} Poster`;
      movieDetails.appendChild(poster);

      DOMMovieDetails.innerHTML = '';
      DOMMovieDetails.appendChild(movieDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const displayMovies = (movies) => {
    DOMMoviesList.textContent = '';
    movies.forEach((movie) => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');

      const title = document.createElement('h3');
      title.textContent = movie.Title;
      title.classList.add('movie-title');
      movieElement.appendChild(title);

      const type = document.createElement('p');
      type.textContent = `Type: ${movie.Type}`;
      type.classList.add('movie-type');
      movieElement.appendChild(type);

      const year = document.createElement('p');
      year.textContent = `Year: ${movie.Year}`;
      year.classList.add('movie-year');
      movieElement.appendChild(year);

      const detailsButton = document.createElement('button');
      detailsButton.textContent = 'Details';
      detailsButton.classList.add('details-button');
      detailsButton.addEventListener('click', () =>
        showMovieDetails(movie.imdbID)
      );
      movieElement.appendChild(detailsButton);

      DOMMoviesList.appendChild(movieElement);
    });
  };

  const displayPagination = (
    totalResults,
    currentPage,
    searchTerm,
    searchType
  ) => {
    const totalPages = Math.ceil(totalResults / 10);
    DOMPagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i;
      button.classList.add('pagination-button');
      button.addEventListener('click', () =>
        searchMovies(searchTerm, searchType, i)
      );
      DOMPagination.appendChild(button);
    }
  };
};

export default asyncJS;

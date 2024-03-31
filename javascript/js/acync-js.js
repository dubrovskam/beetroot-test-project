const apiKey = '5abd21ea';
const apiUrl = 'https://www.omdbapi.com/';

const asyncJS = () => {
  const searchForm = document.getElementById('js-search-form');
  const searchInput = document.getElementById('js-search-input');
  const typeSelect = document.getElementById('js-type-select');
  const moviesList = document.getElementById('js-movies-list');
  const pagination = document.getElementById('js-pagination');
  const movieDetails = document.getElementById('js-movie-details');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    const searchType = typeSelect.value;
    searchMovies(searchTerm, searchType);
  });

  const searchMovies = (searchTerm, searchType, page = 1) => {
    const url = `${apiUrl}?apikey=${apiKey}&s=${searchTerm}&type=${searchType}&page=${page}`;
    console.log('url:', url);
    fetch(url)
      .then((response) => {
        console.log('response:', response);
        return response.json();
      })
      .then((data) => {
        console.log('data:', data);
        if (data.Response) {
          displayMovies(data.Search);
          displayPagination(data.totalResults, page, searchTerm, searchType);
        } else {
          moviesList.innerHTML = 'Movie not found!';
          pagination.innerHTML = '';
        }
      })
      .catch((error) => console.log(error));
  };

  const showMovieDetails = async (imdbID) => {
    const url = `${apiUrl}?apikey=${apiKey}&i=${imdbID}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const details = `
          <h2>${data.Title}</h2>
          <p>Type: ${data.Type}</p>
          <p>Year: ${data.Year}</p>
          <p>Plot: ${data.Plot}</p>
          <p>Director: ${data.Director}</p>
          <p>Actors: ${data.Actors}</p>
          <img src="${data.Poster}" alt="${data.Title} Poster">
        `;
        movieDetails.innerHTML = details;
      })
      .catch((error) => console.log(error));
  };

  const displayMovies = (movies) => {
    moviesList.innerHTML = '';
    movies.forEach((movie) => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
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

      moviesList.appendChild(movieElement);
    });
  };

  const displayPagination = (
    totalResults,
    currentPage,
    searchTerm,
    searchType
  ) => {
    const totalPages = Math.ceil(totalResults / 10);
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i;
      button.classList.add('pagination-button');
      button.addEventListener('click', () =>
        searchMovies(searchTerm, searchType, i)
      );
      pagination.appendChild(button);
    }
  };
};

export default asyncJS;

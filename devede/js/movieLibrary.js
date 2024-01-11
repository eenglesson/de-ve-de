import { db } from './firebase.js';
import {
  collection,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

async function fetchLibraryMovies() {
  onSnapshot(collection(db, 'movies'), (querySnapshot) => {
    movieLibraryDisplay(querySnapshot);
    movieLibraryCounter(querySnapshot);
  });
}

function movieLibraryDisplay(querySnapshot) {
  const movieList = document.querySelector('.movie-library-section');

  movieList.innerHTML = '';

  querySnapshot.forEach((doc) => {
    const movie = doc.data();
    const movieElement = document.createElement('aside');
    movieElement.classList.add('movie-item');

    movieElement.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Genre: ${movie.genre}</p>
    <p>Release Date: ${movie.release}</p>
    <p>Watched: ${movie.watched ? 'Yes' : 'No'}</p>
    `;
    movieList.appendChild(movieElement);
  });
}

function movieLibraryCounter(querySnapshot) {
  const movieQuantityElement = document.querySelector('#number-of-movies');
  let movieCount = 0;
  querySnapshot.forEach(() => {
    movieCount++;
  });
  movieQuantityElement.innerHTML = movieCount;
}

export { fetchLibraryMovies };

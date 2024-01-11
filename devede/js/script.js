import { initiateMovieAddSection } from './movieAdd.js';
import { initiateMovieDisplay } from './movieSearch.js';
import { fetchLibraryMovies } from './movieLibrary.js';

document.addEventListener('DOMContentLoaded', () => {
  initiateMovieAddSection();
  initiateMovieDisplay();
  fetchLibraryMovies();
});

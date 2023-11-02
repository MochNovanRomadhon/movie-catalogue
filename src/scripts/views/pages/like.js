import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieView from './liked-movies/favorite-movie-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteMovieView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  // import FavoriteMovieIdb from '../../data/favorite-movie-idb';
  // import { createMovieItemTemplate } from '../templates/template-creator';

  // const Like = {
  //   async render() {
  //     return `
  //     <div class="content">
  //       <h2 class="content__heading">Your Liked Movie</h2>
  //       <div id="movies" class="movies">
  //       </div>
  //     </div>
  //   `;
  //   },

  async afterRender() {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;

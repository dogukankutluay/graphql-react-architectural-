import React from 'react';
import { useQuery } from 'react-apollo';
import { MOVIES_QUERY } from '../../graphql/Queries';
import style from './movieList.module.scss';
function MovieList() {
  const { loading, error, data } = useQuery(MOVIES_QUERY.GET_MOVIES);
  if (loading) return 'loading';
  if (error) return 'error';
  return (
    <div className={style.movieList}>
      <ul>
        {data.movies.map((movie, key) => {
          return <li key={key}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default MovieList;

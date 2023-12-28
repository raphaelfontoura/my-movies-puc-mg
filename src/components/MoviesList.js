import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      { movies.map(m => <MovieItem key={m.id} title={m.title} />)}
    </ul>
  </section>
);

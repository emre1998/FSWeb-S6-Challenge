import Dropdown from "./Dropdown";

function Filmler({char,films}) {

    return (
        <div>
          {films
            .filter((f, i) => f.title === char.films[i])
            .map((film, i) => (
              <Dropdown key={i} title={film.title}>
                <p>{film.opening_crawl}</p>
                <p>Title: {film.title}</p>
                <p>Director: {film.director}</p>
                <p>Producer: {film.producer}</p>
                <p>Release Date: {film.release_date}</p>
              </Dropdown>
            ))}
        </div>
      );
   
   
}

export default Filmler;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// IMPORT DES COMPONENTS
import Header from "./components/Header";
// IMPORT DES IMAGES
import Logo from "./images/logo.svg";

function App() {
  console.log("Commence App");

  const [isLoading, setIsLoading] = useState(true);
  const [tabMovies, setTabMovies] = useState("upcoming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api-allocine.herokuapp.com/api/movies/" + tabMovies
      );
      setResults(response.data.results);
      setIsLoading(false);
    };
    console.log("useEffect");
    fetchData();
  }, [tabMovies]);

  let img = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

  return (
    <>
      {console.log("lance le return")}

      <Header photo={Logo} />
      <section>
        <div className="tab">
          <p
            onClick={() => {
              setTabMovies("popular");
            }}
            className={tabMovies === "popular" ? "oui" : undefined}
          >
            Popular Movies
          </p>
          <p
            onClick={() => {
              setTabMovies("upcoming");
            }}
            className={tabMovies === "upcoming" ? "oui" : undefined}
          >
            Upcoming Movies
          </p>
          <p
            onClick={() => {
              setTabMovies("top_rated");
            }}
            className={tabMovies === "top_rated" ? "oui" : undefined}
          >
            Top Rated Movies
          </p>
        </div>
        <div className="card">
          {isLoading === true ? (
            <p>Chargement en cours</p>
          ) : (
            results.map((movie, index) => {
              return (
                <div key={index} className="inside_card">
                  <img
                    src={img + movie.poster_path}
                    alt={movie.original_title}
                  />{" "}
                  <div className="info_movies">
                    <span className="title">{movie.title}</span>
                    <span className="date">{movie.release_date}</span>
                    <br />
                    <span className="overview">{movie.overview}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default App;

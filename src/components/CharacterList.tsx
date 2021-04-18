import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Character from "./Character";
import Loader from "./Loader";
import Filters from "./Filters"
const CharacterList = () => {
  interface RootState {
    characters: any;
    loading: boolean;
    next: string;
  }

  const characters = useSelector((state: RootState) => state.characters);
  const next = useSelector((state: RootState) => state.next);
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  const [nameFilter, setNameFilter] = useState<string>("");
  const [movieFilter, setMovieFilter] = useState<string>("");
  async function getCharacters() {
    if (next != null) {
      dispatch({
        type: "CHARACTER_LOADING",
        loading: true,
      });
      try {
        const res = await axios.get(next);
        const characters = res["data"]["results"];
        const nextLink = res["data"]["next"];
        for (const character in characters) {
          const movieUrls = characters[character]["films"];
          let movieTitles = [];
          for (const movieUrl of movieUrls) {
            const movie = await axios.get(movieUrl);
            const movieTitle: string = movie["data"]["title"];
            movieTitles.push(movieTitle);
          }
          characters[character]["movieTitles"] = movieTitles;
        }
        dispatch({
          type: "CHARACTER_SET",
          characters: characters,
          next: nextLink,
          loading: false,
        });
      } catch (e) {
        window.alert("Request failed");
      }
    }
  }

  useEffect(() => {
    const onScroll = (e: any) => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        getCharacters();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });
  useEffect(() => {
    const onLoad = (e: any) => {
      getCharacters();
      window.removeEventListener("load", onLoad);
    };
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  });


  return (
    <div>
      <Filters
      movieFilter={movieFilter}
      nameFilter={nameFilter}
      setMovieFilter={setMovieFilter}
      setNameFilter={setNameFilter}
      />

      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth year</th>
          </tr>
        </thead>
        <tbody>
          {characters
            .filter((character: any) =>
              character.name.toLowerCase().includes(nameFilter.toLowerCase())
            )
            .filter((character: any) =>
              character.movieTitles.find((title: string) =>
                title.toLowerCase().includes(movieFilter.toLowerCase())
              )
            )
            .map((character: any) => {
              return (
                <Character
                  key={character.url}
                  name={character.name}
                  gender={character.gender}
                  birth_year={character.birth_year}
                  height={character.height}
                  movieTitles={character.movieTitles}
                />
              );
            })}
        </tbody>
      </table>
      {loading ? <Loader /> : <></>}
    </div>
  );
};
export default CharacterList;

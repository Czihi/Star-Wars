interface FilterProps {
  movieFilter: string;
  nameFilter: string;
  setMovieFilter: React.Dispatch<React.SetStateAction<string>>;
  setNameFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({
  movieFilter,
  nameFilter,
  setMovieFilter,
  setNameFilter,
}: FilterProps) => {
  const moveLabel = (labelId: string) => {
    const label = document.getElementById(labelId);
    if (label) {
      label.style.transform = "translate(.1rem, -70%) scale(.8)";
      label.style.zIndex = "0";
      label.style.color = "#fdf253";
    }
  };

  return (
    <div className="filter__container">
      <div className="filter">
        <div id="nameFilterLabel" className="filter__label">
          Filter by name
        </div>
        <input
          className="filter__input"
          id="nameFilterInput"
          value={nameFilter}
          onFocus={() => {
            moveLabel("nameFilterLabel");
          }}
          onChange={(e) => {
            setNameFilter(e.target.value);
          }}
        />
      </div>
      <div className="filter">
        <div id="movieFilterLabel" className="filter__label">
          Filter by movies
        </div>
        <input
          className="filter__input"
          id="movieFilterInput"
          value={movieFilter}
          onFocus={() => {
            moveLabel("movieFilterLabel");
          }}
          onChange={(e) => {
            setMovieFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Filters;

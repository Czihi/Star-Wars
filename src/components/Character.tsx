import { useState } from "react";
interface CharacterProps {
  name: string;
  gender: string;
  birth_year: string;
  height: number;
  movieTitles: string[];
}

const Character = ({
  name,
  gender,
  birth_year,
  height,
  movieTitles,
}: CharacterProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const showMoreData = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <tr
        onClick={() => {
          showMoreData();
        }}
      >
        <td>{name}</td>
        <td>{gender}</td>
        <td>{birth_year}</td>
      </tr>
      {showMore ? (
        <tr
          onClick={() => {
            showMoreData();
          }}
        >
          <td>Height: {height}</td>
          <td colSpan={2}>
            Appeared in:{" "}
            {movieTitles.map((title: string) => (
              <div>{title}</div>
            ))}
          </td>
        </tr>
      ) : (
        <></>
      )}
    </>
  );
};
export default Character;

import React, { useState } from "react";
interface CharacterProps {
  name: string;
  gender: string;
  birth_year: string;
  height: number;
  movieTitles: string[];
  movieFilter: string;
}

const Character = ({
  name,
  gender,
  birth_year,
  height,
  movieTitles,
  movieFilter,
}: CharacterProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const showMoreData = () => {
    console.log("more data");
  };

  return (
    <tr
      onClick={() => {
        showMoreData();
      }}
    >
      <td>{name}</td>
      <td>{gender}</td>
      <td>{birth_year}</td>
    </tr>
  );
};
export default Character;

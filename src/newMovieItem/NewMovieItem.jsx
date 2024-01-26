import React from "react";
import { useState } from "react";
import ButtonStyled from "../buttonStyled/ButtonStyled";
import InputStyled from "../inputStyled/InputStyled";

const NewMovieItem = ({ data, setData }) => {
  console.log(data);
  const [inputLink, setInputLink] = useState("");
  const [inputText, setInputText] = useState("");

  console.log(inputLink);
  console.log(inputText);

  const handleAddMovie = () => {
    const newMovieObj = {
      id: Math.random(),
      image: inputLink,
      name: inputText,
    };

    setData([...data, newMovieObj]);
  };

  return (
    <div className="inputBox">
      <InputStyled
        type="url"
        value={inputLink}
        onChange={(e) => setInputLink(e.target.value)}
        placeholder="movie url"
      />

      <InputStyled
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="text"
      />

      <ButtonStyled onClick={handleAddMovie}>add</ButtonStyled>
    </div>
  );
};

export default NewMovieItem;

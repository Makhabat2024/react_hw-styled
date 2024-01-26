import { useEffect, useState } from "react";

import ButtonStyled from "./buttonStyled/ButtonStyled";
import { styled } from "styled-components";
import InputStyled from "./inputStyled/InputStyled";
import ItemStyled from "./itemStyled/ItemStyled";
import NewMovieItem from "./newMovieItem/NewMovieItem";

const AppStyledHeader = styled.header`
  padding-block: 60px;
  padding-inline: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;

  input {
    width: 200px;
    height: 30px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    border: 1px solid blue;
    outline: none;
    background: transparent;
  }
`;
const AppStyledBody = styled.div`
  padding-block: 60px;
  padding-inline: 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;
const AppStyledItem = styled.div`
  width: 300px;
  height: 400px;
  background-color: #6f6fc6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 2px 3px gray;
`;

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("3");

  const getData = async () => {
    console.log("get data is workign");
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const responseData = await response.json();
      setData(responseData.results);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredFucntion = () => {
    const newData = [];
    for (let i = 0; i < input; i++) {
      console.log("filtered is work");

      newData.push(data[i]);
    }
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <AppStyledHeader>
        <InputStyled value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="number" />
        <NewMovieItem data={data} setData={setData} />
        <ButtonStyled onClick={filteredFucntion}>update</ButtonStyled>
      </AppStyledHeader>

      <AppStyledBody>
        {data.map((item) => {
          return (
            <AppStyledItem key={item.id}>
              <ItemStyled image={item.image} name={item.name} />
            </AppStyledItem>
          );
        })}
      </AppStyledBody>
    </div>
  );
};

export default App;

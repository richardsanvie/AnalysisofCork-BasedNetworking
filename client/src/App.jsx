import React from 'react';
import { useEffect, useState } from "react"
import Axios from "axios"
import Cards from "./components/Cards/"
import './App.css';

function App() {

  const [values, setValues] = useState()
  const [ListGames, setListGames] = useState()


  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))

  }

  const handleCickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response)
    })
    document.location.reload()
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => setListGames(response.data))
  }, [])

  return (
    <div className='wp'>
      <div className='container'>
        <div className="InternContainer">
          <h1 className="title">Register</h1>
          <label for="name">Name: </label>
          <input type="text" name="name" required onChange={handleChangeValues} /><br />

          <label for="cost">Cost: </label>
          <input type="number" name="cost" onChange={handleChangeValues} /><br />
          <div className='flexSpace'>
            <label for="Category">Category: </label>
            <select name="category" onChange={handleChangeValues} className='select'>
              <option value="">Selecione uma opção</option>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
            </select>
          </div>
          {/* <input type="text" name="category" required onChange={handleChangeValues} /><br /> */}
          <button type="submit" onClick={() => handleCickButton()}>Register</button>
          <br />
        </div>
      </div>
      <div className="ListGamesContainer" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {typeof ListGames !== "undefined" && ListGames.map((value) => {
          return (<Cards
            key={value.idgames}
            ListCard={ListGames}
            setListCard={setListGames}
            id={value.idgames}
            name={value.name}
            cost={value.cost}
            category={value.category}
          />)
        })}
      </div>
    </div>
  )
}

export default App
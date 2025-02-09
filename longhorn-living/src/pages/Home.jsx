// src/pages/Home.jsx
import React from "react";
import Grid from "../components/Grid/Grid";
import "./pages.css"
import axios from 'axios'
import { useEffect, useState } from "react";

function Home() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getCardData = async() => {
      try {
        const response = await axios.get("http://localhost:3000/users")
        setCards(response.data)
      } catch (e) {
        throw setError(e)
      } finally {
        setLoading(false)
      }
    }

    getCardData()
  }, [])

  if (loading) {
    return <p>Loading Data ...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }
  
  return (
  <div className="home_div">
    <Grid
    cards={cards.map((card) => ({
      firstName: card.firstName,
      lastName: card.lastName,
      housingLoc: card.housingLoc,
      major: card.major,
      year: card.year,
      gender: card.gender
    }))}
    >
    </Grid>
  </div>
  )
}
export default Home;

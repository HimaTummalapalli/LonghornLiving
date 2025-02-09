// src/pages/Home.jsx
import React from "react";
import Grid from "../components/Grid/Grid";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    housingLoc: "",
    major: "",
    year: "",
    gender: "",
  });

  useEffect(() => {
    const getCardData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setCards(response.data);
      } catch (e) {
        throw setError(e);
      } finally {
        setLoading(false);
      }
    };

    getCardData();
  }, []);

  if (loading) {
    return <p>Loading Data ...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const filteredCards = cards.filter((card) => {
    const matchesHousing =
      filters.housingLoc === "" || card.housingLoc === filters.housingLoc;
    const matchesMajor = filters.major === "" || card.major === filters.major;
    const matchesYear = filters.year === "" || card.year === filters.year;
    const matchesGender =
      filters.gender === "" || card.gender === filters.gender;

    return matchesHousing && matchesMajor && matchesYear && matchesGender;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="page-header">
        <br></br>
        <h1>Find Your Ideal Roommate</h1>
        <p>
          Filter by housing, major, year, and more to discover your perfect
          match!
        </p>
      </div>
      <div className="home_div">
        <div className="filter-column">
          <label style={{ fontSize: 20 }} className="text">
            Filter By
          </label>
          <div className="filter-group">
            <label className="text">
              Housing:
              <select
                name="housingLoc"
                value={filters.housingLoc}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="On Campus">On Campus</option>
                <option value="Off Campus">Off Campus</option>
              </select>
            </label>
          </div>

          <div className="filter-group">
            <label className="text">
              Major:
              <select
                name="major"
                value={filters.major}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="CS">CS</option>
                <option value="Bio">Bio</option>
                <option value="Finance">Finance</option>
              </select>
            </label>
          </div>

          <div className="filter-group">
            <label className="text">
              Year:
              <select
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
          </div>

          <div className="filter-group">
            <label className="text">
              Gender:
              <select
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </label>
          </div>
        </div>

        <div className="cards-column">
          <Grid
            cards={filteredCards.map((card) => ({
              firstName: card.firstName,
              lastName: card.lastName,
              housingLoc: card.housingLoc,
              major: card.major,
              year: card.year,
              gender: card.gender,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

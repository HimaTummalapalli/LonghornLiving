// src/pages/Home.jsx
import React from "react";
import Grid from "../components/Grid/Grid";
import "./pages.css"

function Home() {
  return (
  <div className="home_div">
    <Grid
    cards={[{
      firstName: "Hima",
      lastName: "T",
      housingLoc: "Off Campus",
      major: "CS",
      year: "Senior"
    }, {
      firstName: "Regina",
      lastName: "Z",
      housingLoc: "Off Campus",
      major: "CS",
      year: "Senior"
    }, {
      firstName: "Bob",
      lastName: "K",
      housingLoc: "On Campus",
      major: "Bio",
      year: "Sophomore"
    }, {
      firstName: "John",
      lastName: "Done",
      housingLoc: "On Campus",
      major: "Finance",
      year: "Freshman"
    }]}
    >
    </Grid>
  </div>
  )
}
export default Home;

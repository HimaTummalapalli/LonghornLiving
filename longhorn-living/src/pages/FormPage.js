// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./Preference.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    id: "",
    cleanliness: "",
    active: "",
    study: "",
    sleep: "",
    extracurricular: "",
    smoke: "",
    pet: "",
    clubs: "",
    about: "",
  });

  const location = useLocation()
  const username = location.state?.username ? location.state.username : null
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setFormData((formData) => ({...formData, username: (username ? username : "")}))
    try {
      const response = await axios.post("http://localhost:3000/forms", formData);
      console.log('Success: ');
      setFormData({})
      navigate("/")
  } catch (error) {
      console.error('Error: ', error)
  }  
  };
  // const handleSubjectChange = (sub) => {
  //   setSubjects((prev) => ({
  //     ...prev,
  //     [sub]: !prev[sub],
  //   }));
  // };
  const handleReset = () => {
    // Reset all state variables here
    setFormData({
      cleanliness: "",
      active: "",
      study: "",
      sleep: "",
      extracurricular: "",
      smoke: "",
      pet: "",
      clubs: "",
      about: "",
    });
  };

  return (
    <div className="FormPage">
      <h1>Let's Get to Know You!</h1>
      <fieldset>
        <form action="#" method="get">
          <label>What level of cleanliness best describes you?</label>
          <select
            name="cleanliness"
            id="cleanliness"
            required
            value={formData.cleanliness}
            onChange={(e) =>
              setFormData({ ...formData, cleanliness: e.target.value })
            }
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Very Messy</option>
            <option value="2">Somewhat Messy</option>
            <option value="3">Moderately Tidy</option>
            <option value="4">Somewhat Neat</option>
            <option value="5">Very Neat</option>
          </select>
          <label>How active are you?</label>
          <select
            name="active"
            id="active"
            required
            value={formData.active}
            onChange={(e) =>
              setFormData({ ...formData, active: e.target.value })
            }
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Couch Potato</option>
            <option value="2">Lightly Active</option>
            <option value="3">Moderately Active</option>
            <option value="4">Highly Active</option>
            <option value="5">Very Active</option>
          </select>
          <label>How often do you study?</label>
          <select
            name="study"
            id="study"
            required
            value={formData.study}
            onChange={(e) =>
              setFormData({ ...formData, study: e.target.value })
            }
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Rarely</option>
            <option value="2">Occasionally</option>
            <option value="3">Regularly</option>
            <option value="4">Frequently</option>
            <option value="5">All the time</option>
          </select>
          <label>How would you describe your sleeping habits?</label>
          <select
            name="sleep"
            id="sleep"
            required
            value={formData.sleep}
            onChange={(e) =>
              setFormData({ ...formData, sleep: e.target.value })
            }
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Early Riser</option>
            <option value="2">Somewhat Early</option>
            <option value="3">Balanced</option>
            <option value="4">Somewhat Late</option>
            <option value="5">Night Owl</option>
          </select>
          <label>How involved are you in extracurricular activities?</label>
          <select
            name="extracurricular"
            id="extracurricular"
            required
            value={formData.extracurricular}
            onChange={(e) =>
              setFormData({ ...formData, extracurricular: e.target.value })
            }
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Not Involved</option>
            <option value="2">Somewhat Involved</option>
            <option value="3">Moderately Involved</option>
            <option value="4">Highly Involved</option>
            <option value="5">Very Involved</option>
          </select>
          <label>Do you smoke?</label>
          <select
            name="smoke"
            id="smoke"
            required
            value={formData.smoke}
            onChange={(e) =>
              setFormData({ ...formData, smoke: e.target.value })
            }
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label>Do you plan to bring a pet?</label>
          <select
            name="pet"
            id="pet"
            required
            value={formData.pet}
            onChange={(e) => setFormData({ ...formData, pet: e.target.value })}
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>

          <label for="clubs">
            What clubs, organizations, or extracurricular activities are you
            involved in?
          </label>
          <textarea
            name="clubs"
            id="clubs"
            cols="30"
            rows="10"
            value={formData.clubs}
            onChange={(e) =>
              setFormData({ ...formData, clubs: e.target.value })
            }
            placeholder="Answer here so your ideal roommate can find you!"
            required
          ></textarea>

          <label for="about">
            Introduce your self for a little. What are your hobbies? What movies
            and mucic do you like? Do you like to cook? Any fun or boring facts
            about yourself?
          </label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="5"
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
            placeholder="Answer here so your ideal roommate can find you!"
            required
          ></textarea>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default FormPage;

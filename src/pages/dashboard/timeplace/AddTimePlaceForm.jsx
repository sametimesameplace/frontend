//  start = models.DateTimeField()
// end = models.DateTimeField()
// latitude = models.DecimalField(max_digits=9, decimal_places=6)
// longitude = models.DecimalField(max_digits=9, decimal_places=6)
// radius = models.PositiveSmallIntegerField()
// description = models.CharField(max_length=500)
// interests = models.ManyToManyField("timeplace.Interest")
// activities = models.ManyToManyField("timeplace.Activity")
// AddTimePlaceForm.jsx
import React, { useState } from "react";
import "./AddTimePlaceForm.css";
import backgroundImage2 from "./image44.png";
import { Navbar } from "./Dashboard";
import { useContext } from "react";
import { UserContext } from "./Auth/AuthContext";

export function AddTimePlaceForm() {
  const { token } = useContext(UserContext);
  console.log(token);
  const [formData, setFormData] = useState({
    start: "",
    end: "",
    latitude: "",
    longitude: "",
    radius: "",
    description: "",
    // Assuming interests and activities are arrays of selected ids
    interests: [],
    activities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the submission to the backend
        console.log(formData);
      };

  return (
    <div className="add-time-place-form-section">
      <Navbar />
      <div className="add-time-place-form">
        <h2>Add New TimePlace</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="datetime-local"
            name="start"
            value={formData.start}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="end"
            value={formData.end}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            placeholder="Latitude"
          />
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            placeholder="Longitude"
          />
          <input
            type="number"
            name="radius"
            value={formData.radius}
            onChange={handleChange}
            required
            placeholder="Radius (m)"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Description"
          />
          {/* Additional fields for interests and activities will depend on how you want to handle those, possibly with checkboxes or multi-select inputs */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="add-time-place-form-image">
        <img src={backgroundImage2} className="Background" alt="logo" />
      </div>
    </div>
  );
}


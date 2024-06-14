import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/submit-feedback", formData);
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h1 className="mb-4">Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

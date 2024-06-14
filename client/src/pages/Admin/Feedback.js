// Feedback.js
import React, { useState, useEffect } from "react";
import "./Feedback.css"; // Import the stylesheet

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedbacks when the component mounts
    fetch("/api/get-feedbacks")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, []);

  return (
    <div>
      <div className="d-flex feed">
        <div className="bg-feedback"></div>
        <div className="feedback-container">
          <ul className="feedback-list">
            <h2 className="feedback-heading">Feedbacks:</h2>
            {feedbacks.map((feedback) => (
              <li key={feedback._id} className="feedback-item">
                <p className="feedback-text">
                  <span className="feedback-label">Name:</span> {feedback.name}
                </p>
                <p className="feedback-text">
                  <span className="feedback-label">Email:</span>{" "}
                  {feedback.email}
                </p>
                <p className="feedback-text">
                  <span className="feedback-label">Feedback:</span>{" "}
                  {feedback.feedback}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

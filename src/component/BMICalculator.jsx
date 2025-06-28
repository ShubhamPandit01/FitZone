// Created by GPT

import { useEffect, useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bmiHistory")) || [];
    setHistory(saved);
  }, []);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiCategory = "";
    if (bmiValue < 18.5) bmiCategory = "Underweight";
    else if (bmiValue < 24.9) bmiCategory = "Normal weight";
    else if (bmiValue < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    setCategory(bmiCategory);

    const newEntry = { weight, height, bmi: bmiValue, category: bmiCategory };
    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    localStorage.removeItem("bmiHistory");
    setHistory([]);
  };

  return (
    <>
      <div className="main_bmi">
        <div className="bmi-container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calculateBMI}>
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />

            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />

            <button type="submit">Calculate BMI</button>
          </form>

          {bmi && (
            <div className="result">
              <p>Your BMI: <strong>{bmi}</strong></p>
              <p>Category: <strong>{category}</strong></p>
            </div>
          )}

          {history.length > 0 && (
            <div className="history">
              <h3>BMI History</h3>
              <ul>
                {history.map((entry, index) => (
                  <li key={index}>
                    Weight: {entry.weight}kg, Height: {entry.height}cm,
                    BMI: {entry.bmi} ({entry.category})
                  </li>
                ))}
              </ul>
              <button onClick={clearHistory} className="clear-history-btn">
                Clear History
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMICalculator;

import { useState } from 'react';
import './BmiCalculator.css';


function Body() {
  const [age, setAge] = useState(""); 
  const [height, setHeight] = useState(""); 
  const [weight, setWeight] = useState(""); 
  const [bmi, setBmi] = useState(null); 
  const [message, setMessage] = useState(""); 
  const calculate = (e) => {
    e.preventDefault();
  
    if (!age || !height || !weight) {
      setMessage("Please fill in all fields.");
      return;
    }
  
    if (age < 0 || height < 0 || weight < 0) {
      setMessage("Please enter valid positive values.");
      return;
    }
  
  
    const heightInMeters = height / 100;
  
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    setBmi(bmiValue);
  
  
    if (bmiValue < 18.5) {
      setMessage("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("Overweight");
    } else {
      setMessage("overweight");
    }
  };
  
  return (  
    <>
    <div id='bmi'>

    <h2>BMI Calculate APP</h2>
        <p>{message}</p>
        <form className="flex flex-col gap-4" onSubmit={calculate}>
          <label>
            Age:{" "}
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label>
            Height (cm):{" "}
            <input
              type="number"
              placeholder="Enter your height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label>
            Weight (kg):{" "}
            <input
              type="number"
              placeholder="Enter your weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <button id="calculate" type="submit" className="bg-green-600">
            Calculate
          </button>
        </form>
    </div>
    </>

    
  )
}

export default Body
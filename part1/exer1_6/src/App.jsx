import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / 3;
  const percentPositive = (good / all) * 100;

  return (
    <>
      <h1>statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine
            text="percent positive"
            value={`${percentPositive}%`}
          />
        </>
      )}
    </>
  );
};

const Button = ({ buttonName, setter }) => {
  return <button onClick={() => setter((cur) => cur + 1)}>{buttonName}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>

      <Button setter={setGood} buttonName="good" />
      <Button setter={setNeutral} buttonName="neutral" />
      <Button setter={setBad} buttonName="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

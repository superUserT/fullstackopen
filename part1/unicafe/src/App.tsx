import { useState } from "react";

const Header = ({ text }: { text: string }) => {
  return <h1>{text}</h1>;
};

const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Data = ({ text, value }: { text: string; value: number }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
}: {
  good: number;
  neutral: number;
  bad: number;
}) => {
  return (
    <div>
      <Data text={"good"} value={good} />
      <Data text={"neutral"} value={neutral} />
      <Data text={"bad"} value={bad} />
    </div>
  );
};

const All = ({
  good,
  neutral,
  bad,
}: {
  good: number;
  neutral: number;
  bad: number;
}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>all: No feedback given</p>;
  } else {
    return <p>all {good + bad + neutral}</p>;
  }
};

const Average = ({ good, bad }: { good: number; bad: number }) => {
  if (good === 0 && bad === 0) {
    return <p>Average: No feedback given</p>;
  } else {
    return <p>average: {(good - bad) / (good + bad)}</p>;
  }
};

const Positive = ({
  good,
  bad,
  neutral,
}: {
  good: number;
  neutral: number;
  bad: number;
}) => {
  if (good === 0) {
    return <p>positive: No feedback given</p>;
  } else {
    return <p>positive: {(good / (good + bad + neutral)) * 100} %</p>;
  }
};

const App = () => {
  const heading: string = "Give feedback";
  const statistics: string = "Statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text={heading} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text={statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

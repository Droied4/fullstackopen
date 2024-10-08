import React from 'react';
import { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Average = (good, bad, all) => {
	if (!all)
		return (0);
	return ( ((good - bad) / all));
}

const PositiveComments = (good, all) => {
	if (!all)
		return ("0%");
	return ( ((good / all) * 100) + "%");
}

const Ft_button = ({name, type, setter}) => {
	return (
		<> 
		<button onClick={() => setter(type + 1)} >{name}</button>
		</>
	)
}

const StatisticLine = ({text, value}) => {
	return (
			<p>{text} : {value} </p>
	)
}

const DisplayStats = ({good, neutral, bad, all}) => {
	return (
		<>
	  	<h1>Statistics</h1>
		 {all ? (
		<>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="all" value={all} />
			<StatisticLine text="average" value={Average(good, bad, all)} />
			<StatisticLine text="positive" value={PositiveComments(good, all)} />
		</>
      			) : (
        	<p>No Feedback Given </p>
      			)
		}
		</>
	)
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad

  return (
    <div>
	  <h1>Give Feedback</h1>
	  <Ft_button name="good" type={good} setter={setGood}/>
	  <Ft_button name="neutral" type={neutral} setter={setNeutral}/>
	  <Ft_button name="bad" type={bad} setter={setBad}/>
	  <DisplayStats good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />); 

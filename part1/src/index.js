import React from 'react';
import { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Average = (good, bad, all) => {
	if (all == 0)
		return (0);
	return ( ((good - bad) / all));
}

const PositiveComments = (good, all) => {
	if (all == 0)
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

const DisplayStats = ({good, neutral, bad, all}) => {
	return (
		<>
	  		<h1>Statistics</h1>
			<p>good : {good} </p>
	  		<p>neutral : {neutral} </p>
	  		<p>bad : {bad} </p>
			<p>all : {all} </p>
	  		<p>average : {Average(good, bad, all)}</p> 
	  		<p>positive : {PositiveComments(good, all)}</p> 
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

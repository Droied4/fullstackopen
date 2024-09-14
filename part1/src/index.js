import React from 'react';
import { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Ft_button = ({name, type, setter}) => {
	return (
		<> 
		<button onClick={() => setter(type + 1)} >{name}</button>
		</>
	)
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
	  <h1>Give Feedback</h1>
	  <Ft_button name="good" type={good} setter={setGood}/>
	  <Ft_button name="neutral" type={neutral} setter={setNeutral}/>
	  <Ft_button name="bad" type={bad} setter={setBad}/>
	  <h1>Statistics</h1>
	  <p>good : {good} </p>
	  <p>neutral : {neutral} </p>
	  <p>bad : {bad} </p>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />); 

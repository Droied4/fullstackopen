import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const Header = (props) => {	
	console.log(props)
	return (
	<h1>{props.course.name}</h1>
	)
}	

const Part = (props) => {
	console.log(props)
	return (
	<p>
		{props.name}: {props.exercises}
	</p>
	)
}
const Content = (props) => {
	console.log(props)
	return (
	<div>
		{props.parts.map((part, index)=> (
			<Part key={index} name={part.name} exercises={part.exercises}/>
		))}
	</div>
	)
} 

const Total = (props) => {
	const numberof = 'Number of exercises'
	const total_exercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
	console.log(props)
	return(
      	<p> {numberof} {total_exercises} </p>
	)
}
const App = () => {
  
const course = {
	name : 'Half Stack application development',
	parts : [
	{
		name : 'Fundamentals of React',
		exercises : 10
	},
	{
		name : 'Using props to pass data',
		exercises : 7
	},
	{
		name : 'State of a component',
		exercises : 14
	}
  ]	 
 }

	return (
    <div>
	  <Header  course={course} />
	  <Content parts={course.parts} />
	  <Total   parts={course.parts} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);

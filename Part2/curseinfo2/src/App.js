import { React, useState } from "react";

const Part = ({ text, exercises }) => {
  return (
    <>
      <p>
        {text}: <strong>{exercises}</strong>
      </p>
    </>
  );
};
const Total = ({exercises}) => <p>{exercises.reduce((a,b)=>a+b)}</p>;

const Header = ({ text }) => <h1>{text}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} text={part.name} exercises={part.exercises}></Part>
      ))}
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name}></Header>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  const exercisesArray = course.parts.map(part=> part.exercises)

  return (
    <div className="App">
      <Course course={course}></Course>
      <Content parts={course.parts}></Content>
      <Total exercises={exercisesArray}></Total>
      
      
     
    </div>
  );
};

export default App;

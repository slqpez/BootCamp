import { React } from "react";

const Part = ({ text, exercises }) => (
  <li>
    {text}: <strong>{exercises}</strong>
  </li>
);

const Content = ({ parts }) =>
  parts.map((part) => (
    <Part key={part.id} text={part.name} exercises={part.exercises}></Part>
  ));

const Total = ({ parts }) => {
  const totalExercisesByParts = parts.map((part) => part.exercises);
  return <p>Total: {totalExercisesByParts.reduce((a, b) => a + b)}</p>;
};

const Header = ({ text }) => <h1>{text}</h1>;

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header text={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
          </div>
        );
      })}
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Course courses={courses}></Course>
    </div>
  );
};

export default App;

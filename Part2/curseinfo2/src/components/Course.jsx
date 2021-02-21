import {React} from 'react';

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


  export default Course
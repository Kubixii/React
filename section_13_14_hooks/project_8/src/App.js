import React, { useEffect, useReducer } from 'react';

import CoursesForm from './CoursesForm';
import CoursesInfo from './CoursesInfo';


const courses = [
  {
    id: 'aa2561a3-861a-4d3b-bf32-deeca65c1dab',
    title: 'Web developer od podstaw w 15 dni',
  },
  {
    id: 'd257b2cf-5200-46d4-8889-d7d9cd0cfa86',
    title: 'Zaawansowany front-end w 15 dni',
  },
  {
    id: '7bd99654-d51d-4d62-ad66-353866d4bd01',
    title: 'Programowanie w JavaScript',
  },
  {
    id: '3cae4405-bc0d-459e-abd7-3fcef7fcc3a5',
    title: 'React od podstaw - teoria i praktyka',
  },
  {
    id: 'f8c28740-0184-423c-ad03-018496946179',
    title: 'Backend - Node.js, Express i MongoDB',
  },
  {
    id: '20557edc-c01e-48a4-814f-61c9c7f0850a',
    title: '(Zaawansowane) Projekty w CSS i JavaScript',
  },
];

const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return state.concat(action.object);
    }
    case 'REMOVE': {
      return state.filter(course => course.id !== action.id);
    }
    case 'FETCH': {
      return action.data;
    }
    default: {
      throw new Error('coś się zepsuło');
    }
  }
};

const App = () => {

  const [state, dispatch] = useReducer(coursesReducer, []);

  const courseElements = state.length !== 0 ?
    state.map(course => (
      <CoursesInfo
        key={course.id}
        onClickHandler={dispatch}
        {...course}
      />
    ))
    : null;


  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'FETCH', data: courses });
    }, 1000)
  }, []);

  return (
    <div>
      <CoursesForm
        onClickHandler={dispatch}
      />
      {courseElements}
    </div>
  );
}

export default App;
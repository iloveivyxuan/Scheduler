import React from 'react';

const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "W111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
)

const Course = ({ course }) => (
  <button>{ getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }</button>
);

const CourseList = ({ courses }) => (
  <div>
    {courses.map(course => <Course key={course.id} course={ course } />)}
  </div>
);

const App = () =>  (
  <div>
    <Banner title={ schedule.title } />
    <CourseList courses={ schedule.courses } />
  </div>
);

export default App;

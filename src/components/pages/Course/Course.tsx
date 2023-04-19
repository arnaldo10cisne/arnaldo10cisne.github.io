import React from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();

  return <>{`course with id = ${id}`}</>;
};

export default Course;

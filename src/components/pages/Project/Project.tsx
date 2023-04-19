import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { id } = useParams();

  return <>{`project with id = ${id}`}</>;
};

export default Project;

import React from 'react';
import { useParams } from 'react-router-dom';

const Blogpost = () => {
  const { id } = useParams();

  return <>{`article with id = ${id}`}</>;
};

export default Blogpost;

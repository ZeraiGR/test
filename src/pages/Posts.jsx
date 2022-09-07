import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const _Posts = () => {
  useEffect(() => {
    const getPosts = () => {};

    getPosts();
  }, []);

  return <>Посты</>;
};

export const Posts = styled(_Posts)``;

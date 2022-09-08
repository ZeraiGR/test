import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getUsers } from '../../store/reducers/posts';
import { List } from './components';
import { Post } from '../../components';

const _Posts = ({ className }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.posts.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (!users.length) return <div>Loading...</div>;

  return (
    <div className={className}>
      <List>
        {users.map((item) => (
          <li key={item.id}>
            <Post id={item.id} name={item.name} companyName={item.company.name} />
          </li>
        ))}
      </List>
    </div>
  );
};

export const Posts = styled(_Posts)`
  margin: 0 auto;
  max-width: 977px;
  width: 100%;
  padding: 140px 15px 90px;

  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 630px) {
    padding: 130px 0 30px;
  }
`;

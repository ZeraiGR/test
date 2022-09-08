import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { API } from '../../api/posts';
import { images } from '../../constants';
import { Top, Author, Title, Body, Img } from './components';

const _Post = ({ className, id, name, companyName }) => {
  const [article, setArticle] = useState(null);

  const handleError = () => {
    window.alert('Не удалось получить данные из сервера, попробуйте позже!');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { title, body } = (await API.getUserPosts(id))[0];
        const { thumbnailUrl } = (await API.getUserPhotos(id))[0];

        setArticle({ title, body, thumbnailUrl });
      } catch (error) {
        console.log(error);
        handleError();
      }
    };

    fetchData();
  }, [id]);

  if (!article) return null;

  return (
    <article className={className}>
      <Top>
        <Img width={150} height={150} src={article.thumbnailUrl || images.fallback} alt="Author" />

        <div>
          <Author>Autor: {name}</Author>
          <span>Company: {companyName}</span>
        </div>
      </Top>

      <Title>{article.title}</Title>

      <Body>{article.body}</Body>
    </article>
  );
};

export const Post = styled(_Post)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 32px;
  border: 5px solid #27569c;
  box-shadow: 0 4px 4px 0 #00000040;
  border-radius: 4px;

  @media (max-width: 630px) {
    min-height: 200px;
    padding: 10px 10px 30px;
  }
`;

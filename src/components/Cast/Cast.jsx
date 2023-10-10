import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../Service/Service';
import { CastContainer, CastList, CastCard, ActorImage, ActorName } from './Cast.styled';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const credits = await getMovieCredits(movieId);
        setCast(credits.cast);
      } catch (error) {
        console.error('Error occurred while fetching cast:', error);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <CastContainer>
      <h2>Cast</h2>
      <CastList>
        {cast.map((actor) => (
          <CastCard key={actor.id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
            />
            <ActorName>{actor.name}</ActorName>
          </CastCard>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
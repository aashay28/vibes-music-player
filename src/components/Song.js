import React from "react";
import styled from "styled-components";
import "./Song.css";
const Song = ({ currentSong, isPlaying }) => {
  return (
    <SongContainer>
      <Img
        className={isPlaying && "rotating"}
        src={currentSong.cover}
        alt={currentSong.name}
      ></Img>
      <H1>{currentSong.name}</H1>
      <H2>{currentSong.artist}</H2>
    </SongContainer>
  );
};

const SongContainer = styled.div`
  margin-top: 10vh;
  min-height: 50vh;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 20%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const H1 = styled.h2`
  text-align: center;
  padding: 3rem 1rem 1rem 1rem;
`;

const H2 = styled.h3`
  font-size: 1rem;
`;

export default Song;

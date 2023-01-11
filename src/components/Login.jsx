import React from 'react';
import styled from 'styled-components';

export default function Login() {
    const handleClick=()=>{
        // Unique to every specific person
        const client_id="024309376b764fd7b5af01710a4e6726";
    
        // After authentication we want to be redirected to this specific URL
        const redirect_uri="http://localhost:3000/";
    
        const api_uri="https://accounts.spotify.com/authorize"
    
        const scope = [
        "user-read-email",
        "user-read-private",
        "user-modify-playback-state", 
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-position",        
        "user-top-read"];
        
        window.location.href=`${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialogue=true`;
    };
    return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" 
        alt="spotify" />
        <button onClick={handleClick}>Connect to Spotify</button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 2rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover{
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
    color: white;
  }
`;
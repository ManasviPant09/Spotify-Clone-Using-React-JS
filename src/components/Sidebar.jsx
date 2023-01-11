import React from 'react'
import styled from 'styled-components';
import {MdHomeFilled , MdSearch} from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from './Playlists';
export default function Sidebar() {
  return (
    <Container>
        <div className="top_links">
            <div className="logo">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify" />
            </div>
            <ul>
                <li><MdHomeFilled size='23px' /><span>Home</span></li>
                <li><MdSearch size='23px'/><span>Search</span></li>
                <li><IoLibrary size='23px'/><span>Your Library</span></li>
            </ul>
            <Playlists />
        </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top_links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: left;
      margin-top: 1.5rem;
      margin-left:1.5rem;
      img {
        max-inline-size: 85%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left:0.5rem;
      padding: 1rem;
      font-weight:700;
      font-size:95%;
      letter-spacing:0.25px;
      li {
        display: flex;
        flex-direction:row;
        font-size:100;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;

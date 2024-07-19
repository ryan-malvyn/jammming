"use client";

import SearchBar from "./components/searchBar";
import Playlist from "./components/playlist";
import TrackList from "./components/trackList";

import { useEffect, useState } from "react";
import CreatePlaylist from "./components/createPlaylist";

const WelcomePage = () => {
  const [token, setToken] = useState(null);
  const [songs, setSongs] = useState(null);
  const [chosenSongs, setChosenSongs] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(true);
  const [targetPlaylistId, setTargetPlaylistId] = useState();

  async function fetchProfile(token) {
    try {
      const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!result.ok) {
        throw new Error(`Response Status:${result.message}`);
      }

      const json = await result.json();
      setUserData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("spotifyAccessToken");
    if (accessToken) {
      setToken(accessToken);
    }
    fetchProfile(accessToken);
  }, []);

  useEffect(() => {
    console.log(targetPlaylistId);
  }, [targetPlaylistId]);

  return (
    <div className="flex justify-center">
      <div className="w-4/6 mt-20">
        <div className="flex mb-12 justify-center">
          <SearchBar setSongs={setSongs} />
        </div>
        <div className="flex justify-between">
          <TrackList
            songs={songs}
            setChosenSongs={setChosenSongs}
            chosenSongs={chosenSongs}
          />
          {isCreatingPlaylist ? (
            <CreatePlaylist
              userData={userData}
              setIsCreatingPlaylist={setIsCreatingPlaylist}
              token={token}
              setTargetPlaylistId={setTargetPlaylistId}
            />
          ) : (
            <Playlist
              token={token}
              chosenSongs={chosenSongs}
              setChosenSongs={setChosenSongs}
              targetPlaylistId={targetPlaylistId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

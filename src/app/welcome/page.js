"use client";

import SearchBar from "./components/searchBar";
import Playlist from "./components/playlist";
import TrackList from "./components/trackList";

import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [token, setToken] = useState(null);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("spotifyAccessToken");
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <div className="flex max-w-screen-sm justify-center">
      <div className="w-4/6 mt-20">
        <div className="flex mb-12 justify-center">
          <SearchBar setSongs={setSongs} />
        </div>
        <div className="flex justify-between p-2 border-2 border-red-600">
          <TrackList songs={songs} />
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

"use client";

import { useState, useEffect } from "react";
import { SearchOutlined } from "@mui/icons-material";

export default function SearchBar({ setSongs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("spotifyAccessToken");
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function getSongs() {
    console.log(searchQuery);
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`;
    const header = `Authorization:Bearer ${token}`;
    const result = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.tracks.items);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-lg text-black"
          type="text"
        ></input>
        <button type="submit" onClick={() => getSongs()}>
          <SearchOutlined />
        </button>
      </form>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function CreatePlaylist({
  userData,
  setIsCreatingPlaylist,
  token,
  setTargetPlaylistId,
}) {
  const [playlistName, setPlaylistName] = useState("");

  async function handleCreatePlaylist(e) {
    e.preventDefault();
    console.log(playlistName, token, userData);
    try {
      const url = `https://api.spotify.com/v1/users/${userData.id}/playlists`;
      const result = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${playlistName}`,
          description: "Playlist made with Jammming by Ryan Malvyn",
          public: true,
        }),
      });

      if (!result.ok) {
        throw new Error(`Result status:${result.status}`);
      }
      const data = await result.json();
      console.log("Playlist added", data);
      console.log(data.id);
      setTargetPlaylistId(data.id);
      setIsCreatingPlaylist(false);
    } catch (error) {
      console.error(`Error:${error.message}`);
    }
  }

  return (
    <form onSubmit={handleCreatePlaylist} className="border-red-600 border-2">
      <input
        type="text"
        className="text-black"
        placeholder="Add Playlist Name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button type="submit">Create Playlist</button>
    </form>
  );
}

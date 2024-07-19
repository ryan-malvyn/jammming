"use client";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import PlaylistTrack from "./playlistTrack";
import { useState, useEffect } from "react";

export default function Playlist({
  token,
  chosenSongs,
  setChosenSongs,
  targetPlaylistId,
}) {
  const [counter, setCounter] = useState(0);

  const nextSong = () => {
    setCounter((prevCount) => {
      if (prevCount < chosenSongs.length - 1) {
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  const prevSong = () => {
    setCounter((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return 0;
    });
  };

  console.log(chosenSongs);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  if (!Array.isArray(chosenSongs)) {
    console.log("no arrays passed on.");
    return <div>No valid array passed.</div>;
  }

  async function submitToSpotify(e) {
    e.preventDefault();
    const url = `https://api.spotify.com/v1/playlists/${targetPlaylistId}/tracks`;
    const uriCollection = [];
    chosenSongs.map((song) => uriCollection.push(song.uri));
    console.log(uriCollection);
    //adding songs to the spotify playlist
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
        body: JSON.stringify({
          uris: uriCollection,
          position: 0,
        }),
      });

      if (!result.ok) {
        throw new Error(`Error message:${result.status}`);
      }

      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }

    console.log("Songs submitted");
  }

  const resetPlaylist = () => {
    setChosenSongs([]);
  };

  if (chosenSongs.length === 0) {
    return <div>No songs chosen yet</div>;
  } else {
    const currentSong = chosenSongs[counter];
    return (
      <form onSubmit={submitToSpotify}>
        <div className="relative w-80 h-44">
          <button
            className="text-4xl absolute top-56"
            onClick={() => prevSong()}
            type="button"
          >
            <ArrowCircleLeft />
          </button>
          <PlaylistTrack
            artists={currentSong.artists}
            imageLink={currentSong.imageLink}
            title={currentSong.title}
            album={currentSong.album}
          />
          <button
            className="text-4xl absolute top-56 right-0"
            onClick={() => nextSong()}
            type="button"
          >
            <ArrowCircleRight />
          </button>
          <div className="flex justify-between">
            <button type="submit">Submit</button>
            <button type="button" onClick={resetPlaylist}>
              Reset
            </button>
          </div>
        </div>
      </form>
    );
  }
}

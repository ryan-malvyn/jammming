"use client";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import PlaylistTrack from "./playlistTrack";
import { useState } from "react";

export default function Playlist({ chosenSongs, setChosenSongs }) {
  const [counter, setCounter] = useState(0);

  const nextSong = () => {
    setCounter((prevCount) => {
      if (prevCount <= chosenSongs.length) {
        prevCount + 1;
      }
    });
    console.log(counter);
  };

  const prevSong = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  if (!Array.isArray(chosenSongs) && !Array.isArray(tracksData)) {
    console.log("no arrays passed on.");
  }

  if (chosenSongs.length == 0) {
    return <div>No songs chosen yet</div>;
  } else {
    const currentSong = chosenSongs[counter];
    console.log(currentSong);
    return (
      <div>
        <button onClick={() => prevSong()}>
          <ArrowLeft />
        </button>
        <PlaylistTrack
          artists={currentSong.artists}
          imageLink={currentSong.imageLink}
          title={currentSong.title}
          album={currentSong.album}
        />
        <ArrowRight onClick={() => nextSong()} />
      </div>
    );
  }
}

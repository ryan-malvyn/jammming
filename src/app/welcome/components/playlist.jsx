"use client";
import PlaylistTrack from "./playlistTrack";

export default function Playlist({ chosenSongs, setChosenSongs }) {
  if (!Array.isArray(chosenSongs) && !Array.isArray(tracksData)) {
    console.log("no arrays passed on.");
  }

  return (
    <div>
      {chosenSongs.map((song) => {
        return (
          <PlaylistTrack
            key={song.uri}
            artist={song.artists}
            imageLink={song.imageLink}
            title={song.title}
            album={song.album}
          />
        );
      })}
    </div>
  );
}

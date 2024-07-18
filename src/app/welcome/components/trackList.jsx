import Track from "./track";

export default function TrackList({ songs, setChosenSongs, chosenSongs }) {
  if (!Array.isArray(songs)) return <div>No song found</div>;
  return (
    <ul>
      {songs ? (
        songs.map((song) => {
          const songId = songs.indexOf(song) + 1;
          return (
            <Track
              name={song.name}
              album={song.album.name}
              artists={song.artists[0].name}
              uri={song.uri}
              imageLink={song.album.images[0].url}
              key={songId}
              setChosenSongs={setChosenSongs}
              chosenSongs={chosenSongs}
            />
          );
        })
      ) : (
        <div> No song found</div>
      )}
    </ul>
  );
}

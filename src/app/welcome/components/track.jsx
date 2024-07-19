import Image from "next/image";
import { PlaylistAddCircleOutlined } from "@mui/icons-material";

export default function Track({
  album,
  artists,
  uri,
  name,
  imageLink,
  chosenSongs,
  setChosenSongs,
}) {
  function handleAddSongs(songUri) {
    const re = new RegExp("spotify:track:");
    const modifiedUri = songUri.replace(re, "");
    console.log(modifiedUri);
    if (
      chosenSongs.length == 0 ||
      chosenSongs.find((object) => object.uri === modifiedUri) === undefined
    ) {
      const chosenSong = {
        album: album,
        artists: artists,
        uri: songUri,
        imageLink: imageLink,
        title: name,
      };
      setChosenSongs((prevSets) => [...prevSets, chosenSong]);
    } else {
      console.log("Song already exist");
    }
  }

  return (
    <div className="px-8 py-4 border-b-2 border-b-zinc-50 flex gap-1 max-w-md overflow-x-hidden hover:bg-slate-600 transition-colors">
      <div className="flex items-center justify-center">
        <Image
          src={imageLink}
          alt={album}
          width="70"
          height="70"
          className="rounded-xl mr-4"
        />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-white font-bold text-lg text-nowrap overflow-clip max-w-60">
          {name}
        </p>
        <p>{artists}</p>
      </div>
      <button>
        <PlaylistAddCircleOutlined
          className="text-3xl"
          onClick={() => handleAddSongs(uri)}
        />
      </button>
    </div>
  );
}

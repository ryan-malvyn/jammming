import Image from "next/image";

export default function PlaylistTrack({
  album,
  artists,
  imageLink,
  title,
  uri,
}) {
  return (
    <div className="flex px-4 py-10 border-2 border-red-600 justify-center items-center">
      <div className="flex flex-col">
        <div className="mb-3">
          <Image src={imageLink} height="350" width="350" alt={title} />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold italic">{title}</div>
          <div>
            <div className="text-nowrap">{artists}</div>
            <div>{album}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

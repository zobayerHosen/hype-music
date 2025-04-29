import { albums } from "../../data/db";
import SectionTitle from "../common/SectionTitle";
import AlbumCard from "./shared/AlbumCard";

const Albums = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5">
      <SectionTitle text="Albums" />
      <div className="w-full grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-5 gap-3">
        {albums.map((album) => {
          return <AlbumCard albumInfo={album} key={album.id} />;
        })}
      </div>
    </div>
  );
};

export default Albums;

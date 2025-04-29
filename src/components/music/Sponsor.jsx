import SectionTitle from "../common/SectionTitle";
import music_sponsor from "@/assets/images/music_sponsor.png";

const Sponsor = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5">
      <SectionTitle text="Sponsor" />
      <div className="w-full sm:h-72 xs:h-48 h-36">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={music_sponsor}
          alt="Music Sponsor"
        />
      </div>
    </div>
  );
};

export default Sponsor;

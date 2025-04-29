import { FacebookShareButton, TwitterShareButton } from "react-share";
import CommonSubmitBtn from "../../common/CommonSubmitBtn";
import twitter from "@/assets/images/twitter.png";
import spotify from "@/assets/images/spotify.png";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";

const MusicInfo = () => {
  const shareUrl = window.location.href;
  const title = "Check out this amazing song!";
  const handleAddToCart = () => {
    console.log("button clicked");
  };
  return (
    <div className="w-full flex flex-col xl:gap-5 xs:gap-3 gap-2 justify-start items-start xl:text-3xl xs:text-xl 2xs:text-lg text-base font-normal text-white">
      {/* title */}
      <p>
        <b>Music: </b>
        <span>Die With A Smile</span>
      </p>
      {/* artists */}
      <p>
        <b>Artist: </b>
        <span>Jennifer Luis</span>
      </p>
      {/* release date */}
      <p>
        <b>Release Date: </b>
        <span>12/03/2025</span>
      </p>
      {/* description */}
      <p>
        <b>Description: </b>
        <span>
          Die With A Smile by Always Never is an alternative R&B track with
          moody beats and emotional lyrics about hiding pain behind a smile. The
          song blends heartbreak and longing with a dark, atmospheric vibe.
        </span>
      </p>
      {/* genre */}
      <div className="w-full flex gap-2 justify-start items-center">
        <span>Genre:</span>
        <span className="px-4 py-2 text-base capitalize rounded-[4px] bg-[rgba(83,154,236,0.30)]">
          Hip Hop
        </span>
      </div>
      {/* price */}
      <div className="w-full flex gap-2 justify-start items-center">
        <span>Price:</span>
        <span className="primary-color font-semibold xl:text-5xl text-3xl">
          $00.00
        </span>
      </div>
      {/* buttons */}
      <div className="w-full flex gap-5 justify-start text-white font-semibold items-center max-w-[600px]">
        <CommonSubmitBtn
          className={`bg-transparent border border-[#ed7340]`}
          onclick={handleAddToCart}
        >
          Add to Cart
        </CommonSubmitBtn>
        <CommonSubmitBtn onclick={handleAddToCart}>Buy Now</CommonSubmitBtn>
      </div>

      {/* social media icons */}
      <div className="w-full flex gap-3 justify-start items-center">
        <span className="text-xl">Share:</span>
        <div className="w-full flex gap-3 justify-start items-center">
          <FacebookShareButton url={shareUrl} title={title}>
            <img
              src={facebook}
              className="w-full h-full object-contain"
              alt=""
            />
          </FacebookShareButton>
          <a
            href={`https://open.spotify.com/share?url=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-share"
          >
            <img src={spotify} alt="Spotify" />
          </a>
          <TwitterShareButton url={shareUrl} title={title}>
            <img
              src={twitter}
              className="w-full h-full object-contain"
              alt=""
            />
          </TwitterShareButton>
          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-share"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicInfo;

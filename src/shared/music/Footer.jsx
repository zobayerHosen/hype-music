import MusicLogo from "../../components/common/MusicLogo";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import facebook from "@/assets/images/facebook.png";
import instagram from "@/assets/images/instagram.png";
import twitter from "@/assets/images/twitter.png";
import spotify from "@/assets/images/spotify.png";

const Footer = () => {
  const footerLinks = [
    { label: "Home", href: "/hype-music" },
    { label: "The Hype Store", href: "/hype-store" },
    { label: "Music", href: "/hype-music/musics" },
    { label: "Contact Us", href: "/hype-music" },
  ];
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/", icon: facebook },
    { label: "Instagram", href: "https://www.instagram.com/", icon: instagram },
    { label: "Twitter", href: "https://twitter.com/", icon: twitter },
    { label: "Spotify", href: "https://www.spotify.com/", icon: spotify },
  ];
  return (
    <footer className="w-full flex flex-col font-normal text-white sm:text-base text-sm">
      {/* Footer Content */}
      <div className="w-full sm:py-10 py-5 bg-[#121D35]">
        <div className="container mx-auto grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start 2xl:gap-x-28 xl:gap-x-24 lg:gap-x-14 md:gap-x-20 sm:gap-x-14 gap-x-5 gap-y-4">
          {/* Footer Logo */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <MusicLogo
              className={"xl:w-40 lg:w-32 w-24 xl:h-[90px] lg:h-[70px] h-14"}
            />
            <p>
              Welcome! Our diverse marketplace offers curated goods from
              passionate vendors. Discover quality, authenticity, and endless
              possibilities. Join our community for a seamless shopping
              experience.
            </p>
          </div>
          {/* Get In Touch */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="sm:text-lg text-base font-semibold uppercase">
              GET IN TOUCH
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-8">
              {/* Location  */}
              <div className="w-full flex flex-col gap-2 justify-start items-start">
                <div className="flex items-center gap-2">
                  <IoLocation className="text-xl primary-color" />
                  <h4 className=" uppercase">Location</h4>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?q=Wilmington,NC28402`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wilmington, NC 28402
                </a>
              </div>
              {/* Email  */}
              <div className="w-full flex flex-col gap-2 justify-start items-start">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-xl primary-color" />
                  <h4 className=" uppercase">Email</h4>
                </div>
                <a
                  href={`mailto:musichypeworldwide@gmail.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  musichypeworldwide@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Footer Links */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="sm:text-lg text-base font-semibold uppercase">
              QUICK LINK
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-6">
              {footerLinks.map((link, index) => {
                return (
                  <NavLink
                    to={link.href}
                    key={index}
                    end={true}
                    className={({ isActive }) =>
                      `font-medium hover:primary-color transition-all duration-500 ease-in-out sm:text-lg text-base ${
                        isActive ? "primary-color" : "text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
          {/* Footer Socials */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="sm:text-lg text-base font-semibold uppercase">
              FOLLOW US
            </h3>
            <div className="flex xl:gap-5 gap-4 justify-start items-center">
              {socialLinks.map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-10 w-8 sm:h-10 h-8 sm:p-2 p-1.5 flex justify-center items-center rounded-full bg-white/10 hover:bg-primary/10 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Copy right */}
      <div className="w-full py-5 bg-[#12171C]">
        <div className="container mx-auto flex sm:flex-row flex-col justify-between text-nowrap  font-medium  items-center gap-4">
          <p>Copyright © 2025 Figma. All Rights Reserved.</p>
          <div className="flex gap-5 justify-end items-center">
            <Link to={""} className="">
              Privacy Policy
            </Link>
            <span>||</span>
            <Link to={""} className="">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

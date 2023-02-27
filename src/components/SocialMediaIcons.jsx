import React from "react";
import { Instagram , LinkedInd , Twitter , Facebook } from "../assets";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-700"
        href="https://www.linkedin.com/in/dendy-anugerah-ramadhan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedInd} alt="linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-700"
        href="https://www.instagram.com/dendyanugerahh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="instagram" />
      </a>
      <a
        className="hover:opacity-50 transition duration-700"
        href="https://twitter.com/dendypake_Y"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Twitter} alt="twitter" />
      </a>
      <a
        className="hover:opacity-50 transition duration-700"
        href="https://www.facebook.com/profile.php?id=100004550448818"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Facebook} alt="facebook" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

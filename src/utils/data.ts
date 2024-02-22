import aboutImg from "../../public/img/about-img.png";
import favoriteOneImg from "../../public/img/favorite-1.png";
import favoriteTwoImg from "../../public/img/favorite-2.png";
import favoriteThreeImg from "../../public/img/favorite-3.png";
import favoriteFourImg from "../../public/img/favorite-4.png";
import homeImg from "../../public/img/home-img.png";
import toolTipImg from "../../public/img/tooltip-right.svg";

export const assetsProject = {
  home: {
    img: {
      source: homeImg,
      alt: "image",
    },
    tooltip: {
      tooltipImage: {
        source: toolTipImg,
        alt: "image",
      },
    },
  },
  about: {
    img: {
      source: aboutImg,
      alt: "image",
    },
  },
  favorite: {
    favoriteOneImage: {
      source: favoriteOneImg,
      alt: "favorite",
    },
    favoriteTwoImage: {
      source: favoriteTwoImg,
      alt: "favorite",
    },
    favoriteThreeImage: {
      source: favoriteThreeImg,
      alt: "favorite",
    },
    favoriteFourImage: {
      source: favoriteFourImg,
      alt: "favorite",
    },
  },
};

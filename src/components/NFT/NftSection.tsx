import React from "react";
import styled from "styled-components";
import NFTComponent from "./NFTComponent";
import Slider, { Settings } from "react-slick";

const NftSection = () => {
  const [nfts, setNfts] = React.useState([]);

  React.useEffect(() => {
    fetch("src/data/faker.json")
      .then((res) => res.json())
      .then((res) => setNfts(res.nfts))
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  const sliderSettings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledNftSection>
      <p className="text-[36px] font-[700] text-white/75">Features Artworks</p>

      <Slider {...sliderSettings}>
        {nfts.map((item: any, index: number) => (
          <NFTComponent key={index} {...item} />
        ))}
      </Slider>
    </StyledNftSection>
  );
};

const StyledNftSection = styled.div``;

export default NftSection;

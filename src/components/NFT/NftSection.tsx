import React from "react";
import styled from "styled-components";
import NFTComponent from "./NFTComponent";
import Slider, { Settings } from "react-slick";

const NftSection = () => {
  const [nfts, setNfts] = React.useState([]);

  React.useEffect(() => {
    fetch("/faker.json")
      .then((res) => res.json())
      .then((res) => setNfts(res.nfts))
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
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
          infinite: false,
          dots: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <StyledNftSection data-aos="fade-right">
      <p className="text-[36px] font-[700] text-white/75 mb-8 nft-section__title">
        Features Artworks
      </p>

      <Slider {...sliderSettings}>
        {nfts.map((item: any, index: number) => (
          <NFTComponent key={index} {...item} />
        ))}
      </Slider>
    </StyledNftSection>
  );
};

const StyledNftSection = styled.div`
  padding: 100px 0;

  @media (max-width: 600px) {
    padding: 50px 0;
  }

  @media (max-width: 410px) {
    .nft-section__title {
      font-size: 30px;
    }
  }
`;

export default NftSection;

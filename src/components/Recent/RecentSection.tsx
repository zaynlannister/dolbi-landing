import styled from "styled-components";
import NftComponent from "./NftComponent";

const recentNft = [
  {
    title: "Keeping yourself safe when buying NFTs on dolbi",
    price: "25.00",
    img: "recent_1.png",
  },
  {
    title: "Keeping yourself safe when buying NFTs on dolbi",
    price: "25.00",
    img: "recent_2.png",
  },
  {
    title: "Keeping yourself safe when buying NFTs on dolbi",
    price: "25.00",
    img: "recent_3.png",
  },
];

const RecentSection = () => {
  return (
    <StyledRecentSection>
      <p
        data-aos="fade-down"
        className="text-[36px] font-[700] text-white/75 recent-title"
      >
        Recent Activity
      </p>
      <div
        data-aos="fade-right"
        className="flex justify-between gap-12 mt-12 recent-content"
      >
        {recentNft.map((item, index) => (
          <NftComponent key={index} {...item} />
        ))}
      </div>
    </StyledRecentSection>
  );
};

const StyledRecentSection = styled.div`
  padding: 100px 0;

  @media (max-width: 700px) {
    .recent-title {
      text-align: center;
    }
    .recent-content {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default RecentSection;

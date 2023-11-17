import styled from "styled-components";

const HeaderContent = () => {
  return (
    <StyledContent data-aos="fade-left">
      <div>
        <p className="text-[24px] font-[600] mb-2">Featured Film</p>
        <p className="text-[80px] w-[571px] leading-[80px] opacity-75 header-text">
          ZERO CONTACT
        </p>
        <p className="text-[#FFFFFFBF] w-[409px] header-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit gravida
          enim, orci morbi elementum gravida.{" "}
        </p>
      </div>
      <div className="text-[#FFFFFF80] flex gap-8 mt-8">
        <p>
          <span className="font-[600]">2k |</span> Active user
        </p>
        <p>
          <span className="font-[600]">5k |</span> Music Video
        </p>
        <p>
          <span className="font-[600]">7k |</span> Visual Art
        </p>
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 200px;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    background-origin: content-box;
    background-image: url("/assets/img/header-bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    right: 0;
    top: -40px;
    width: 570px;
    height: 602px;
    padding: 60px;
    border-radius: 330px;
  }

  @media (max-width: 1025px) {
    &::after {
      z-index: -1;
      opacity: 0.3;
    }
  }
  @media (max-width: 610px) {
    padding-bottom: 100px;
    &::after {
      width: 100%;
      height: 100%;
      background-color: unset;
    }
    .header-text {
      font-size: 60px;
    }
    .header-text,
    .header-paragraph {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .header-text {
      font-size: 40px;
      line-height: unset;
    }
  }
`;

export default HeaderContent;

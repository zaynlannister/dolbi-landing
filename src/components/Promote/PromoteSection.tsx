import styled from "styled-components";

const PromoteSection = () => {
  return (
    <StyledPromoteSection>
      <div className="promote-container relative">
        <div className="promote-content">
          <p className="promote-text text-[48px] font-[700] text-white/[.75]">
            The Premier Marketplace for Nifties
          </p>
          <p className="text-[#FFFFFF80]">
            dolby is the premier marketplace for Nifties, which are digital
            items you can truly own. Digital Items have existed for a long time,
            but never like this.
          </p>
        </div>
        <div className="promote-images">
          <img
            width="300px"
            height="300px"
            className="promote-images__1 absolute right-[20px] top-[-100px] bg-[#94EEE5] rounded-[250px] p-4"
            src="/assets/img/blockchain.png"
          />
          <img
            width="240px"
            height="240px"
            className="promote-images__2 absolute right-[320px] top-[100px] bg-[#E87993] rounded-[250px] p-4"
            src="/assets/img/centralbank.png"
          />
          <img
            width="150px"
            height="150px"
            className="promote-images__3 absolute right-[150px] top-[215px]"
            src="/assets/img/promote.png"
          />
        </div>
      </div>
    </StyledPromoteSection>
  );
};

const StyledPromoteSection = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.07);
  padding: 200px 0;
  z-index: 1;

  .promote-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    padding: 0 20px;
  }
  .promote-content {
    position: relative;
    width: 600px;
    z-index: 1;
  }
  .promote-images {
    z-index: -1;
  }

  @media (max-width: 1050px) {
    .promote-images {
      opacity: 0.1;
    }
  }

  @media (max-width: 620px) {
    padding: 150px 0;
    .promote-content {
      width: 100%;
    }
    .promote-text {
      font-size: 35px;
    }
    .promote-images__1 {
      width: 200px;
      height: 200px;
    }
    .promote-images__2 {
      width: 180px;
      height: 180px;
      left: -70px;
      top: 0;
    }
    .promote-images__3 {
      top: 130px;
      right: 100px;
    }
  }
`;

export default PromoteSection;

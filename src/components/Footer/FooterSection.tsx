import styled from "styled-components";

const FooterSection = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div>
          <p className="text-[28px] font-[700]">Join the community</p>
          <div className="flex gap-4 mt-2 footer-links">
            <img src="/assets/img/icons/twitter.svg" alt="twitter" />
            <img src="/assets/img/icons/inst.svg" alt="inst" />
            <img src="/assets/img/icons/discord.svg" alt="discord" />
            <img src="/assets/img/icons/email.svg" alt="email" />
          </div>
        </div>
        <div className="flex gap-20 text-[18px] footer-nav">
          <div className="flex flex-col">
            <p className="font-[600] mb-2">Menu</p>
            <a href="#explore">Explore</a>
            <a href="#items">My Items</a>
            <a href="#create">Create</a>
          </div>
          <div className="flex flex-col">
            <p className="font-[600] mb-2">Info</p>
            <a href="#privacy">Privacy Policy</a>
            <a href="#service">Terms Of Service</a>
            <a href="#help">Help</a>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  .footer-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    gap: 120px;
  }
  border-top: 1px solid #958f8f;
  & a:hover {
    text-decoration: underline;
  }

  & img {
    cursor: pointer;
    padding: 10px;
    background-color: #ffffff59;
    border: 1px solid #ffffff59;
    transition: 140ms all;
  }

  & img:hover {
    background-color: transparent;
    border-color: #fff;
  }

  @media (max-width: 700px) {
    .footer-container {
      flex-direction: column;
      gap: 40px;
      align-items: center;
    }

    .footer-links {
      justify-content: center;
    }
  }
`;

export default FooterSection;

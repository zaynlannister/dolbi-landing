import styled from "styled-components";
import dolby from "/assets/img/dolby.svg";

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <img src={dolby} alt="" />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: 30px 20px 10px;
`;

export default HeaderComponent;

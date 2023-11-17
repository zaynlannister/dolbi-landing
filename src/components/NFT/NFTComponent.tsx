import styled from "styled-components";

const NFTComponent = (props: any) => {
  return (
    <StyledNFT>
      <img width="100%" src={`/assets/img/${props.img}`} alt="img" />
      <div className="px-3 py-2">
        <p className="text-[18px] text-white/75 mt-2">{props.name}</p>
        <p className="text-[12px] text-white/60">{props.description}</p>
        <div className="flex justify-between mt-2">
          <p>Price</p>
          <div className="flex items-center gap-2">
            <img src="/assets/img/moneyIcon.svg" alt="icon" />
            <p>€{props.price}</p>
          </div>
        </div>
      </div>
    </StyledNFT>
  );
};

const StyledNFT = styled.div`
  margin: 0 20px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(255, 255, 255, 0.2);
`;

export default NFTComponent;

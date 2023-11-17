import styled from "styled-components";

const NftComponent = (props: any) => {
  return (
    <StyledNft>
      <img
        className="recent-image"
        src={`/assets/img/${props.img}`}
        alt="img"
      />
      <p className="text-[18px] text-white/75 font-[600] mt-4 leading-[28px] recent-body">
        {props.title}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <img src="/assets/img/moneyIcon.svg" alt="img" />
        <p className="font-[600]">{props.price}</p>
      </div>
    </StyledNft>
  );
};

const StyledNft = styled.div`
  width: 350px;

  @media (max-width: 410px) {
    width: 100%;
  }

  .recent-image {
    transition: 300ms all;
  }

  &:hover {
    .recent-image {
      transform: scale(0.8);
    }

    .recent-body {
      color: #fff;
    }
  }
`;

export default NftComponent;

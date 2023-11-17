import styled from "styled-components";

const FormComponent = () => {
  return (
    <StyledForm data-aos="fade-right">
      <p className="text-[#FFFFFFBF] text-[48px] font-[700] form-title">
        Never Miss a drop!
      </p>
      <p className="text-[#FFFFFF80]">
        Subscribe to our ultra-exclusive drop list and be the first to know
        about upcoming dolby drops.
      </p>
      <div className="flex form-container">
        <input placeholder="Email Address" type="text" />
        <button>Subscribe</button>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  padding: 50px 0;
  text-align: center;
  .form-container {
    margin: 40px auto 0;
    width: 400px;
    border: 1px solid #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }
  input {
    padding: 10px 20px;
    width: 100%;
    border: none;
    outline: none;
    color: #ffffff80;
    font-size: 18px;
    background-color: transparent;
  }
  button {
    width: 200px;
    color: #000;
    outline: none;
    border: none;
    background-color: #ffffff;
    border-radius: 50px;
    border: 1px solid #fff;
    transition: 200ms all;
  }
  button:hover {
    color: #ffff;
    background-color: transparent;
  }

  @media (max-width: 610px) {
    .form-container {
      width: 100%;
    }
    .form-title {
      font-size: 35px;
    }
  }
`;

export default FormComponent;

// TitleWrapper, InputWrapper, RespositoryWrapper
import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 25px;

  img {
    display: block;
    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    line-height: 140%;
  }
`;

export const InputWrapper = styled.form`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;

  input {
    height: 100%;
    margin-right: 15px;
    margin-bottom: 0px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 12px;
    padding-right: 12px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    border: ${props =>
      props.invalidRepo ? '2px solid red' : '2px solid transparent'};
  }

  input::-webkit-input-placeholder {
    color: #c5c5c5;
  }

  input:-ms-input-placeholder {
    color: #c5c5c5;
  }

  input::-ms-input-placeholder {
    color: #c5c5c5;
  }

  button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 58px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color: #c9510c;
    box-shadow: 0 0 10px 0 transparent;
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
    font-size: 45px;
    font-weight: 700;
    border: none;
  }

  button:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.83);
  }
`;

export const RespositoryWrapper = styled.div`
  margin-top: 30px;
`;

export const Repository = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 15px;
  padding: 13px 32px 13px 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
  background-color: #333;

  h2 {
    display: inline-block;
    color: #fff;
    font-size: 20px;
    line-height: 140%;
    font-weight: 500;
  }

  a {
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
    color: #c9510c;
    font-size: 18px;
    font-weight: 500;
  }

  a:hover {
    color: #c5c5c5;
  }
`;

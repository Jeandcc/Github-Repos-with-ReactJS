import styled from 'styled-components';

export const InfoHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  img {
    margin-bottom: 10px;
    max-width: 164px;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 140%;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }
`;

export const NavigationForIssues = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  margin-bottom: 22px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const Filters = styled.div`
  display: inline-block;

  .filter {
    display: inline-block;
    margin-right: 8px;
    padding: 7px 15px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => (props.active ? '#bd2c00' : ' #e5e5e5')};
    color: ${props => (props.active ? '#fff' : '#333')};
    border: 0px;
    text-transform: capitalize;
  }

  .active-filter {
    background-color: #bd2c00;
    color: #fff;
  }

  div {
    font-size: 18px;
  }
`;

export const Pagination = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  button {
    background-color: transparent;
    border: 0px;
  }

  div {
    margin-right: 7px;
    margin-left: 7px;
    color: #bd2c00;
    font-size: 20px;
    font-weight: 600;
  }

  .next-page {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;

export const IssuesList = styled.div``;

export const Issue = styled.a.attrs(props => ({
  href: props.link,
  target: '_blank',
}))`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 15px;
  padding: 13px 31px 16px 13px;
  -webkit-box-pack: center;
  -webkit-justify-content: space-between;
  -ms-flex-pack: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #333;
  color: #f5f5f5;

  img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom: auto;
  }

  .issue-info-wrapper {
    margin-left: 20px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .issue-name {
    display: inline;
    margin-right: 10px;
    font-size: 16px;
    line-height: 140%;
  }

  .issue-tags {
    display: inline-block;
    margin-right: 8px;
    padding: 2px 10px;
    border-radius: 5px;
    background-color: #c9510c;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .issue-creator-name {
    margin-top: 15px;
    margin-bottom: 0px;
    color: #f5f5f5;
    font-size: 12px;
    line-height: 140%;
    font-weight: 300;
    letter-spacing: 1px;
  }
`;

export const ReturnButton = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 10px 20px 10px 18px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 15px;
  background-color: #bd2c00;
  color: #fff;

  img {
    margin-right: 12px;
  }
`;

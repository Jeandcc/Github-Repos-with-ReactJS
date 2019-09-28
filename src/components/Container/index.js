import styled from 'styled-components';

const ContentHolder = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  max-width: 750px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 24px 24px 48px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 20px;
  background-color: #f5f5f5;
  min-height: 300px;

  .carregando {
    margin: auto;
  }
`;

export default ContentHolder;

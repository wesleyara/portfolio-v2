import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  overflow: hidden;
  max-width: 1100px;
  margin: 50px auto;
  padding: 20px 1rem;

  .skillsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    div {
      width: 200px;
      height: 150px;
      margin-top: 20px;
      background-color: ${(props) => props.theme.colors.cardBack};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      border-bottom: 10px solid ${(props) => props.theme.colors.card};
      color: ${(props) => props.theme.colors.card};
      transition: 0.3s ease-in-out;
      cursor: pointer;

      transition: 0.2s ease-in-out;

      svg {
        font-size: 80px;
      }
    }

    div:hover {
      border-color: ${(props) => props.theme.colors.cardBack};
      background-color: ${(props) => props.theme.colors.card};
      transform: scale(1.1);

      svg {
        color: ${(props) => props.theme.colors.cardBack};
      }
    }
  }
`;

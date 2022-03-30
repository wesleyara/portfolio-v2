import styled from "styled-components";

export const Container = styled.main`
  max-width: 1100px;
  margin: 70px auto;
  width: 95%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  color: greenyellow;
  padding: 0 1rem;
  z-index: -1;

  @keyframes neon {
    from {
      filter: drop-shadow(0 0 0 greenyellow);
    }
    to {
      filter: drop-shadow(0 0 10px greenyellow);
    }
  }

  .profileImage {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
  }

  .who {
    position: relative;
    flex: 1.5;
    min-width: 300px;

    h1 {
      font-size: calc(max(25px, 3.29vw));
      display: inline;
      filter: drop-shadow(0 0 10px greenyellow);
    }
  }

  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }

  .typed-cursor {
    font-size: calc(max(30px, 4vw));
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
  }

  svg {
    margin-left: 10px;
    font-size: 40px;
    padding: 2px;
    color: greenyellow;
  }

  svg:hover {
    animation: neon 2s alternate infinite ease-in-out;
  }

  .networksBx {
    text-align: center;
    margin-top: 60px;
  }

  .scroll {
    color: white;
  }

  .scrollContainer {
    margin: 50px auto;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 40px;
        color: greenyellow;
      }

      span {
        margin-top: 10px;
        color: greenyellow;
      }
    }
  }

  .scrollContainer:hover {
    animation: neon 2s alternate infinite ease-in-out;
  }

  @keyframes rot {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .bxAnimation {
    position: absolute;
    top: 75%;
    left: 85%;
    transform: translate(-85%, -75%);
    width: calc(max(5.49vw, 50px));
    height: calc(max(5.49vw, 50px));
    margin-top: 15px;
    background-color: greenyellow;
    animation: rot 3s ease-in-out infinite;
  }
`;
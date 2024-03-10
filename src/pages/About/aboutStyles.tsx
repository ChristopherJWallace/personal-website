import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: 5vw auto 4vw auto;
  align-content: center;
  justify-content: center; // Centers content horizontally in a flex container
  width: 72vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  color: var(--TextColorA);
  position: relative;
  padding-left: 4vw;
  padding-right: 4vw;

  hr {
    border: none;
    height: 1px;
    background-color: var(--DividerColorA);
  }

  .education{
    display: block; /* or you can use 'display: block;' if you want it to behave like a regular block element */
    justify-content: center; /* This centers the flex items (children of .education) horizontally */
    grid-column: 1 / -1; /* This makes .education span all the columns of the grid */
  }

  #about{
    margin:auto;
  }

  .reactSpin{
    animation: spinning 5s infinite linear;
  }
  

  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  .rounded-svg {
    border-radius: 8px; /* Adjust the radius value to get the desired roundness */
    // overflow: hidden; /* Ensures the rounding applies to the SVG image */
  }

  h1{
    // margin-top: 5vw;
    text-decoration: underline;
    color: var(--TextColorA);
  }

  h2{
    margin-top: 2rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
    text-align: center;
  }

  p{
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: left;
    color: var(--TextColorA);
  }


  .about-image{
    text-align: center;
    align-items: center;
    justify-content: center;
    div{
      display:flex;
      height: 100%;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    img{
      box-shadow: 2px 2px 5px rgba(38, 38, 38, 0.8);
      margin-top: 2rem;
      max-width: 500px;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover{
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 960px) {
    margin: 6vw 10vw 5vw 10vw;
    display: block;
    text-align: center;
    .about-text { 
      margin: 0vw auto;
      padding: 2vw 4vw 3vw 4vw;
      border-radius: 20px;
      background-color: var(--FooterColorA);
      box-shadow: 2px 2px 5px rgba(38, 38, 38, 0.8);
    }
    p{
      font-size: 1rem;
      letter-spacing: 0.1rem;
      font-weight: 500;
      text-align: center;
    }
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        max-width: 500px;
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }
  @media (max-width: 650px){
    margin-top: 30vw;
    }

`
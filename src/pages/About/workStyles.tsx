import styled from "styled-components";

// Define a new styled component for the work section
export const WorkContainer = styled.section`
  display: flex; // Or 'display: block;' depending on your content
  justify-content: center; // Centers content horizontally in a flex container
  align-content: center;
  width: 70vw; // Adjust the width as needed
  margin: 08vw auto 5vw auto; // Adjust the margin to align with the Container margins
  flex-direction: column;
  position: relative;
  padding: 4vw 4vw;
  border-radius: 20px;
  background-color: var(--FooterColorA);
  box-shadow: 2px 2px 5px rgba(38, 38, 38, 0.8);

  hr {
    border: none;
    height: 1px;
    background-color: var(--DividerColorA);
  }
  @media (min-width: 961px) {
    hr {
      display: none;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    text-decoration: underline;
    font-size: 3rem;
    color: var(--TextColorA);
    
  }

  .work{
    margin: auto;
    max-width: 1450px;
    display:grid;
    grid-template-columns: 2fr 3fr;
    padding-top: 4vw;
    gap: 5vw;
    text-align: left;
    
  }

  .work-logo {
    width: 100%;
    height: auto;
    display:flex;
    justify-self: end;
    padding: 0;
  }

  .work-logo img{
    width: 100%;
    justify-self: end;
  }

  .work-description {
    font-size: 1.5rem;
    color: var(--TextColorA);
  }

  .work-description p{
    padding-left: 20px;
    margin-top:0;
  }

  .work-description h3{
    margin-bottom:0;
  }
  

  @media only screen and (max-width: 960px) {


    .work {
      padding-top: 0;
      display: block; /* Change display to block on small screens */
    }

    .work-description p{
      padding-left: 0px;
      margin-top:0;
    }

    .work-description {
      text-align: center;
      font-size: 1rem;
    }

    .work-logo {
      padding-top: 5vw;
    }

    img{

      width: 100%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover{
        filter: grayscale(0);
      }
  }
`;
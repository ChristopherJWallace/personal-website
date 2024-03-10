import styled from "styled-components";


export const Container = styled.footer`
  background-color: var(--FooterColorA);
  margin-top: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    height: auto;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  .logo {
    color: var(--TextColorA);
  }

  .madeBy {
    color: var(--TextColorA);
  }

  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1em;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }

  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 1000px){
    padding: 4rem 0rem;
    flex-direction: column;
    gap: 0rem;
    text-align: center;
  }
  @media(max-width: 600px){
    margin-top: 20vw;
    padding: 2rem 0rem;
    a {
      padding: 0;
      font-size: 1.2rem;
    }
    p{
      font-size: 1rem;
    }
  }


`
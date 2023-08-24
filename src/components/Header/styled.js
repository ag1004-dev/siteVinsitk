import styled from 'styled-components';

export const AreaHeader = styled.div`
  height: 60px;
  background-image: linear-gradient(to right, #FE5D26, #370d44);

  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    img {
      width: 100px;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    position: relative;

    .hamburger {
      display: none;
      cursor: pointer;
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-left: 20px;
        text-align: center;

        a {
          text-decoration: none;
          color: white;

          &:hover {
            color: #f5bb00;
          }
        }
      }
    }

    @media (max-width: 1024px)  {
      .hamburger {
        display: block;
        
        width: 100%;
      }

      ul {
        display: ${props => (props.menuOpen ? 'flex' : 'none')};
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #333;
        transition: transform 0.3s ease-in-out;
        flex-direction: column;

        li {
          margin: 0;
          padding: 10px 0;
          text-align: center;
        }
      }
    }
  }
`;
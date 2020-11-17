import styled from 'styled-components';

const Container = styled.div`
  ul {
    list-style: none;
    font-size: 25px;
    display: flex;
  }

  li {
    margin: 30px 60px;
  }

  a {
    color: white;
    transition: color 1s;
  }

  a:hover {
    color: black;
  }
`;

export default Container;

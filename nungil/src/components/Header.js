import styled from 'styled-components';

const Head = styled.p`
  font-size:1.5rem;
  font-weight:700;
  margin-top:0;
`

function Header(props) {
    return <Head>{props.head}</Head>
}

export default Header;
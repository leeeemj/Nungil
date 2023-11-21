import styled from 'styled-components';

const Head = styled.p`
  font-size:24px;
  font-weight:700;
  margin-left:1.75rem;
`

function Header(props) {
    return <Head>{props.head}</Head>
}

export default Header;
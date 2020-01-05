import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: -1rem;
`;

const Logo = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
    color: #e74c3c;
    letter-spacing: 1px;
`;

function Header(props) {
    return (
        <StyledHeader>
            <Logo>Kimchychy</Logo>
        </StyledHeader>
    );
}

export default Header;
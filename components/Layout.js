import Header from "./Header";
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 1rem;
`;

function Layout(props) {
    return (
        <StyledMain>
            <Header/>
            {props.children}
        </StyledMain>
    );
}

export default Layout;
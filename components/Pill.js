import styled from 'styled-components';

const StyledPill = styled.div`
  width: 3.5rem;
    padding: .35rem 1rem;
    margin: 1rem;
  display: flex;
    flex-direction: column;
    align-items: center;
  border-radius: 90px;
  background-color: #e17055;
    color: #2D2D2D;
`;
const IconWrapper = styled.div`
  border-radius: 90px;
  display: flex;
    justify-content: center;
    align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  color: #2D2D2D;
`;

function Pill(props) {
    const { value, icon} = props;

    return (
        <StyledPill>
            <IconWrapper>{icon}</IconWrapper>
            <span>|</span>
            <span>{value}</span>
        </StyledPill>
    );
}


export default Pill;
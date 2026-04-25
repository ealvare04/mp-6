import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 2%;
    border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.h1`
    font-size: calc(2px + 2vw);
    font-weight: 600;
    color: #111827;
    margin: 0;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Title>MP-6: OAuth Demo</Title>
        </StyledHeader>
    );
}
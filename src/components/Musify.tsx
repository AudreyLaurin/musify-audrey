import styled from "styled-components";

export const Musify = () => {
    // TODO: ADD pixel katakana logo of Musify
    return (
        <MusifyDiv onClick={() => {window.location.href = '/'}}>MUSIFY</MusifyDiv>
    )
}

const MusifyDiv = styled.div`
font-size: 3.5rem;
`;
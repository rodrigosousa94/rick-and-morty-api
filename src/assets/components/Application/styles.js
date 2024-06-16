import styled from "styled-components";

export const ContainerApp = styled.div`

    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;
`

export const HeaderApp = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    h1{
        font-size: 3.2rem;
    }
    span{
        font-size: 1.6rem;
        opacity: 0.6;
    }
`

export const ContentCharacters = styled.div`
& > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;
}

button{
    display: block;
    line-height: 6.5rem;
    background-color: #5b1fa6;
    border-radius: 6px;
    width: 30rem;
    margin: 0 auto;
    cursor: pointer;
    border: none;
    font-size: 1.8rem;
    margin-top: 4.8rem;
    transition: filter .3s;
    &:hover{
        filter: brightness(0.8)
    }
}

`
export const Loader = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100vh;
    z-index: 2022;
    background-color: #040011;
    display: flex;
    justify-content: center;
    align-items: center;
`


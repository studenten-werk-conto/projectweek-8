import styled from "styled-components";

const Form = styled.form`
    background-color: orange;
`
const ProviderCard = styled.div`
    background-color: gray;
    border: 1px solid black;
    margin: 20px;
    height: 50px;
    width: 100px;
`
const Box = styled.div`
    background-color: purple;
    width: 50%;
    margin: auto;
    margin-top: 20%;
`
const ProviderBox = styled.div`
    display: flex;
`

module.exports = {
    Form,
    ProviderCard,
    Box,
    ProviderBox
}
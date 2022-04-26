import styled from "styled-components";

const Form = styled.form`
    background-color: orange;
`
const ProviderCard = styled.div`
    background-color: ${props => (props.active ? "white" : "orange")};
    color: ${props => (props.active ? "gray" : "white")};
    border: 1px solid white;
    border-radius: 10px;
    text-align:center;
    padding-top: 5px;
    margin: 20px;
    height: 50px;
    width: 100px;
`
const Box = styled.div`
    background-color: orange;
    width: 550px;
    height: 150px;
    margin: auto;
    margin-top: 20%;
    @media only screen and (max-width: 525px) {
     width: 100%;
    }
`
const ProviderBox = styled.div`
    display: flex;
`

const Select = styled.select`
    margin-right: 18px;
    width: 30%;
`

const InputField = styled.input`
    margin-right: 18px;
    width: ${props => (props.width || "30%")};
`

module.exports = {
    Form,
    ProviderCard,
    Box,
    InputField,
    ProviderBox,
    Select,
}
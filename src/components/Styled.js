import styled from 'styled-components';

export const BtnDefaultIcons = styled.button `

        align-items: center;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border: 0px;
        outline: none;
        font-size: 16px ;
        font-weight: bold;
        margin-bottom: 15px;
        transition: 0.4%;


    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%;
    }


`;


export const BtnDefault = styled(BtnDefaultIcons)`
    background-color: black;
    color: white;
    display: inline;

&:hover{
    background-color: gray;
}


`
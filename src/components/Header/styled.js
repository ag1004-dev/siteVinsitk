import styled from 'styled-components';


export const AreaHeader = styled.div`
    height: 60px;
    background-color: royalblue;



    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }

        .logo {

            flex: 1;

            img{
                width: 130px;
            }

    }


    nav{
            ul{
                display: flex;

            }

            li{
                    list-style: none;
                    margin-left: 20px;

            }

    }
`;
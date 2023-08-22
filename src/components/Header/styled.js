import styled from 'styled-components';


export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #FE5D26, #370d44);



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

                    a{
                        text-decoration: none;
                        color: white;
                
                        &:hover{

                        color: #f5bb00;
                }
                    }

            }

    }
`;
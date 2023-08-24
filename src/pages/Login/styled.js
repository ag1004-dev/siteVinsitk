import styled from 'styled-components';


export const AreaLogin = styled.div`
    background-color: white;
    padding: 40px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 5px 10px 10px 10px #ccc;

h1 {
    font-size: 24px;
    
}

.organize{
    display: flex;
    
    a{
        color: #000;
    }

}

    p{
        font-size: 13px;
        color: #9c9c9c;
    }


    .form--input{
        text-align: left;
        

        label {
            display: block;
      
      
 
        }
 
        input{
                margin-bottom: 20px;
                padding: 10px;
                font-size: 16px;
                outline: none;
                border: 1px solid #ccc;
                border-radius: 5px;
                width: 280px;
                transition: 0.3s;

                &:hover{
                    border: 2px solid #7d2ae8;
                }

        }

        @media (max-width: 768px) {
    font-size: 18px;
  }

    }

`


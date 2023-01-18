import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
`;
export const LoginWrap = styled.div`
    width: 50%;
    height: 90vh;
    margin: 0 auto;
    padding: 100px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contes: center;
    background-color: #fff;
    box-shadow: 3px 3px 25px 5px rgba(0, 0, 0, 0.15);
`;

export const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: auto;
    & button {
        margin-bottom: 20px;
    }
`;

//  #e0f2ff;

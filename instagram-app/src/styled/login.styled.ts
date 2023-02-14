import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    overflow: hidden;
`;

export const LoginBannerImgWrap = styled.div`
    width: 50%;
    height: 100%;
    margin-left: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    @media (max-width: 875px) {
        display: none;
    }
`;
export const Phone = styled.div`
    padding: 10px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #000;
`;
export const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 20px;
    & > div {
        min-width: 350px;
    }
    @media (max-width: 875px) {
        width: auto;
        margin: 0;
    }
`;
export const LoginBox = styled.div`
    width: 40%;
    height: 50%;
    max-height: 450px;
    margin-right: auto;
    padding: 60px 50px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contes: center;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    & > * {
        margin-bottom: 20px;
    }
`;
export const Logobox = styled.div`
    width: 200px;
    height: 70px;
    margin-bottom: 40px;
`;
export const LoinInputBox = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 55%;
    & > input:first-of-type {
        margin-bottom: 20px;
    }
`;
export const SignBox = styled.div`
    width: 40%;
    padding: 30px 50px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    margin-right: auto;
    font-size: 14px;
`;

//  #e0f2ff;

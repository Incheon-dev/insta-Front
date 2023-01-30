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
`;
export const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 20px;
`;
export const LoginBox = styled.div`
    width: 50%;
    height: 60vh;
    max-height: 500px;
    margin-right: auto;
    padding: 60px 50px;
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
export const SignBox = styled.div`
    width: 50%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    margin-right: auto;
    font-size: 14px;
`;

//  #e0f2ff;

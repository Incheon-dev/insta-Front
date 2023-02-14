import { Wrap } from "./default.styled";
import styled from "styled-components";

export const SignUpContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    overflow: hidden;
    flex-direction: column;
`;

export const SignUpBox = styled.div`
    width: 25%;
    padding: 60px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    background-color: #fff;
    min-width: 400px;
    border: 1px solid #ccc;
    & > * {
        margin-bottom: 20px;
    }
`;
export const SignupWraper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 20px;
    }
`;
export const InfoText = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
    white-space: nowrap;
`;

export const SingupLinkBox = styled.div`
    width: 25%;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    font-size: 14px;
    padding: 30px 50px;
    box-sizing: border-box;
    min-width: 400px;
    margin-top: 10px;
`;
//  #e0f2ff;

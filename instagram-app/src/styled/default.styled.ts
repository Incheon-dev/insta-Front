import styled, { createGlobalStyle } from "styled-components";
import TextLogoImg from "../images/Instagram_logo_text.png";
import LogoImg from "../images/Instagram_logo.png";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    padding: 10px 10px;
`;

export const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const FlexRow = styled.div`
    display: flex;
    &.align-start {
        align-items: start;
    }
    &.start {
        justify-content: flex-start;
    }
    &.center {
        justify-content: center;
        align-items: center;
    }
    &.between {
        justify-content: space-between;
    }
    &.mb {
        margin-bottom: 20px;
    }
    &.mb-100 {
        margin-bottom: 100px;
    }
    &.w-100 {
        width: 100%;
    }
    &.w-75 {
        width: 75%;
    }
    &.w-50 {
        width: 50%;
    }
    &.w-25 {
        width: 25%;
    }
`;

export const FlexColumns = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    &.start {
        justify-content: flex-start;
        align-items: flex-start;
    }
    &.center {
        justify-content: center;
        align-items: center;
    }
    &.between {
        justify-content: space-between;
        align-items: center;
    }
`;

export const WarningText = styled.p`
    font-size: 12px;
    color: #e45649;
`;
export const TextLogo = styled.img.attrs({ src: TextLogoImg })`
    width: 100%;
`;
export const Logo = styled.img.attrs({ src: LogoImg })`
    width: 100%;
`;

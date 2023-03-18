import styled from "styled-components";

export const userInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 930px;
    margin: 0 auto;
`;
export const userinfoHeader = styled.div`
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    width: 80%;
`;
export const userInfo = styled.section`
    width: 75%;
    & > * {
        margin-bottom: 20px;
    }
`;
export const userProfileWrap = styled.div`
    width: 25%;
    margin-right: 50px;
    min-width: 150px;
`;
export const userNickname = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #262626;
`;
export const userName = styled.p`
    font-size: 14px;
    font-weight: 600;
`;
export const userDetail = styled.div`
    display: flex;
    gap: 50px;
    width: 100%;
`;
export const countText = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: #262626;
`;
export const introduceText = styled.p``;
export const storyWrap = styled.div``;
export const contentWrap = styled.div``;

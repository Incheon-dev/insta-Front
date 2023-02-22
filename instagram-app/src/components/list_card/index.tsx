import React from "react";
import styled from "styled-components";
import Img from "../images/default";
export type ListCardProps = {};
export const ListCard = (props: ListCardProps) => {
    return (
        <CardContainer>
            <CardHeader>
                <Img
                    style={{ width: "32px", height: "32px" }}
                    src="http://via.placeholder.com/100x100"
                    shape="CIRCLE"
                />
                <CardHeaderTitle>userNickname</CardHeaderTitle>
            </CardHeader>
            <CardImageWrap>
                <Img src="http://via.placeholder.com/450x450" />
            </CardImageWrap>
            <CardIconToolbar>toolbar</CardIconToolbar>
            <CardContent>좋아요 ~</CardContent>
            <CardComentBox>coment box</CardComentBox>
        </CardContainer>
    );
};
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1.5px solid #ddd;
    width: 450px;
`;
const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
`;
const CardHeaderTitle = styled.p`
    font-weight: bold;
    font-size: 16px;
`;
const ThumbnailWrap = styled.div`
    width: 20px;
    height: 20px;
`;
const CardImageWrap = styled.div``;
const CardIconToolbar = styled.div``;
const CardContent = styled.div``;
const CardComentBox = styled.div``;

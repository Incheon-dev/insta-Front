import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../images/default";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
export type ImagePostProps = {
    likeCounnt: number;
    commentCount: number;
    onClickPost?: () => void;
};
export const PostImage = (props: ImagePostProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <ImageContainer
            onMouseOver={() => {
                setIsHover(true);
            }}
            onMouseOut={() => {
                setIsHover(false);
            }}
            onClick={() => {
                if (props.onClickPost) {
                    props.onClickPost();
                }
            }}
        >
            <Img src="http://via.placeholder.com/450x450?text=postimagesample" />
            <HoverBackGround visible={isHover}>
                <CountInfo>
                    <FavoriteIcon style={{ color: "#fff", fontSize: "20px" }} />
                    <Count>{props.likeCounnt}</Count>
                </CountInfo>
                <CountInfo>
                    <ChatBubbleIcon
                        style={{ color: "#fff", fontSize: "20px" }}
                    />
                    <Count>{props.commentCount}</Count>
                </CountInfo>
            </HoverBackGround>
        </ImageContainer>
    );
};

type styledProps = {
    visible: boolean;
};
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1.5px solid #ddd;
    position: relative;
    box-sizing: border-box;
`;
const HoverBackGround = styled.div`
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    visibility: ${(props: styledProps) => {
        return props.visible ? "visible" : "hidden";
    }};
`;
const CountInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Count = styled.div`
    color: #fff;
    font-size: 12px;
    font-weight: 700;
`;

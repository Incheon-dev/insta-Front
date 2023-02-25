import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../images/default";
import { Button } from "../button";
import { IconBtn } from "../button/iconBtn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
export type ListCardProps = {
    userNickname: string;
    userInfo?: any;
    likeCounnt: number;
    comment: string;
};
export const ListCard = (props: ListCardProps) => {
    const [isMore, setIsMore] = useState<boolean>(false);

    return (
        <CardContainer>
            <CardHeader>
                <Img
                    style={{ width: "32px", height: "32px" }}
                    src="http://via.placeholder.com/100x100"
                    shape="CIRCLE"
                />
                <CardHeaderTitle>{props.userNickname}</CardHeaderTitle>
            </CardHeader>
            <CardImageWrap>
                <Img src="http://via.placeholder.com/450x450" />
            </CardImageWrap>
            <CardIconToolbar>
                <LeftIconArea>
                    <IconBtn icons={<FavoriteBorderIcon />} />
                    <IconBtn icons={<ChatBubbleOutlineRoundedIcon />} />
                    <IconBtn
                        icons={
                            <SendIcon
                                style={{ transform: "rotateZ(-45deg)" }}
                            />
                        }
                    />
                </LeftIconArea>
                <RightIconArea>
                    <IconBtn icons={<BookmarkBorderIcon />} />
                </RightIconArea>
            </CardIconToolbar>
            <CardContent>좋아요 {props.likeCounnt}개</CardContent>
            <CardComentBox>
                {props.userNickname}
                {!isMore && (
                    <>
                        <CommentBoxLimitText>
                            {props.comment}
                        </CommentBoxLimitText>
                        <Button
                            text="더보기"
                            textColor="#aaa"
                            backgroundColor="#fff"
                            border="none"
                            onClick={() => {
                                return setIsMore(true);
                            }}
                            width="fit-content"
                            style={{ padding: 0, margin: 0 }}
                        />
                    </>
                )}
                {isMore && <CommentBoxText>{props.comment}</CommentBoxText>}
            </CardComentBox>
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
const CardIconToolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardContent = styled.div`
    padding: 0 10px;
    box-sizing: border-box;
`;
const CardComentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    box-sizing: border-box;
`;
const CommentBoxLimitText = styled.p`
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
`;
const CommentBoxText = styled.p`
    font-size: 12px;
    margin: 0;
    padding: 0;
`;
const LeftIconArea = styled.div`
    display: flex;
`;
const RightIconArea = styled.div`
    display: flex;
    justify-content: end;
`;

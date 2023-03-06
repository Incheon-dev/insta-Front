import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../images/default";
import { Input, Button } from "../";
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
    regidate?: string;
    onClickComment?:()=>void;
};
export const ListCard = (props: ListCardProps) => {
    const [isMore, setIsMore] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");
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
                                style={{
                                    transform:
                                        "rotateZ(-45deg) translateY(-5px)",
                                }}
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
                {!isMore && (
                    <>
                        <ContentBoxLimitText>
                            {props.comment}
                        </ContentBoxLimitText>
                        <Button
                            text="더보기"
                            textColor="#999"
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
                {isMore && <ContentBoxText>{props.comment}</ContentBoxText>}
            </CardComentBox>
            <Button
                text="댓글 141개 모두 보기"
                textColor="#999"
                backgroundColor="#fff"
                border="none"
                onClick={() => {
                    if(props.onClickComment){
                        props.onClickComment();
                    }
                }}
                width="fit-content"
                style={{ padding:"10px",margin: 0 ,textAlign:"left"}}
            />
            <Posttime>12시간 전</Posttime>
            <CommentBox>
                <Input
                    type="text"
                    style={{ border: "none" }}
                    value={comment}
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                    placeholder="댓글 달기..."
                />
                <Button
                    text="게시"
                    textColor="#0095F6"
                    backgroundColor="#fff"
                    border="none"
                    onClick={() => {
                        console.log("dddd");
                    }}
                    width="fit-content"
                />
            </CommentBox>
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
    font-size: 14px;
    font-weight: bold;
`;
const CardComentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
`;
const ContentBoxLimitText = styled.p`
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
`;
const ContentBoxText = styled.p`
    font-size: 14px;
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
const CommentBox = styled.div`
    display: flex;
    border-top: 1px solid #ddd;
`;
const Posttime = styled.div`
    font-size: 11px;
    color: #999;
    padding: 10px;
`;

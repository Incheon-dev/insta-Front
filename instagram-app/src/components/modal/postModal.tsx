import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "../../styled";
import Img from "../images/default";
import { Input, Button } from "../";
import { IconBtn } from "../button/iconBtn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface PostModalProps {
    title?: string;
    message?: string;
    width?: number;
    style?: any;
    visible?: boolean;
}

export const PostModal = ({ ...props }: PostModalProps) => {
    const [isActive, setisActive] = useState<boolean>(false);
    useEffect(() => {
        if (props.visible != undefined) {
            setisActive(props.visible);
        }
    }, [props.visible]);

    return (
        <S.ModalBackground visible={isActive}>
            <S.PostModalContainer>
                <S.PostImageWrap>
                    <S.PostRatioBox>
                        <Img src="http://via.placeholder.com/450x450" />
                    </S.PostRatioBox>
                </S.PostImageWrap>
                <S.PostContentWrap>
                    <CardHeader>
                        <Img
                            style={{ width: "32px", height: "32px" }}
                            src="http://via.placeholder.com/100x100"
                            shape="CIRCLE"
                        />
                        <CardHeaderTitle>donguen1014</CardHeaderTitle>
                    </CardHeader>
                    <S.PostListWrap>
                        dddd
                    </S.PostListWrap>
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
                    <CardContent>좋아요 200개</CardContent>
                    <CommentBox>
                    <Input
                        type="text"
                        style={{ border: "none" }}
                        value=''
                        onChange={(e) => {
                            console.log("댓글/./")
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
                </S.PostContentWrap>
			</S.PostModalContainer>
        </S.ModalBackground>
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
    color: #aaa;
    padding: 10px;
`;
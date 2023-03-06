import React, { useState, useEffect } from "react";
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
                    <S.PostCardHeader>
                        <Img
                            style={{ width: "32px", height: "32px" }}
                            src="http://via.placeholder.com/100x100"
                            shape="CIRCLE"
                        />
                        <S.PostCardHeaderTitle>donguen1014</S.PostCardHeaderTitle>
                    </S.PostCardHeader>
                    <S.PostListWrap>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        <S.PostComment>
                            <S.CommentUserImgWrap>
                                <Img
                                    style={{ width: "32px", height: "32px" }}
                                    src="http://via.placeholder.com/100x100"
                                    shape="CIRCLE"
                                />
                            </S.CommentUserImgWrap>
                            <S.CommentTextBox>
                                <S.CommentTextUserInfo>
                                    <S.CommentUserName>donguen1014</S.CommentUserName>
                                    <S.CommentText>흑백사진 피드가 좋네요 ^^</S.CommentText>
                                </S.CommentTextUserInfo>
                                <S.CommentRegDate>1시간전</S.CommentRegDate>
                            </S.CommentTextBox>
                        </S.PostComment>
                        
                    </S.PostListWrap>
                    <S.PostCardIconToolbar>
                        <S.LeftIconArea>
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
                        </S.LeftIconArea>
                        <S.RightIconArea>
                            <IconBtn icons={<BookmarkBorderIcon />} />
                        </S.RightIconArea>
                    </S.PostCardIconToolbar>
                    <S.PostCardContent>좋아요 200개</S.PostCardContent>
                <S.PostCommentBox>
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
            </S.PostCommentBox>
                </S.PostContentWrap>
			</S.PostModalContainer>
        </S.ModalBackground>
    );
};


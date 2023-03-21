import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import Img from "../components/images/default";
import { PostImage, PostViewModal } from "../components";

const UserPage = () => {
    const { email } = useParams();
    const [visiblePostModal, setVisiblePostModal] = useState<boolean>(false);
    useEffect(() => {
        setVisiblePostModal(false);
    }, []);
    const onCloseModal = () => {
        setVisiblePostModal(false);
    };
    return (
        <S.userInfoContainer>
            <PostViewModal visible={visiblePostModal} onClose={onCloseModal} />
            <S.userinfoHeader>
                <S.userProfileWrap>
                    <Img
                        src="http://via.placeholder.com/450x450"
                        shape="CIRCLE"
                        style={{ width: "150px", height: "150px" }}
                    />
                </S.userProfileWrap>
                <S.userInfo>
                    <S.userNickname>dongeun_i</S.userNickname>
                    <S.userDetail>
                        <S.countText>게시물 11</S.countText>
                        <S.countText>팔로우 11</S.countText>
                        <S.countText>팔로워 11</S.countText>
                    </S.userDetail>
                    <S.userName>이동은</S.userName>
                </S.userInfo>
            </S.userinfoHeader>
            <S.contentWrap>
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
                <PostImage
                    onClickPost={() => {
                        setVisiblePostModal(true);
                    }}
                    likeCounnt={20}
                    commentCount={5}
                />
            </S.contentWrap>
        </S.userInfoContainer>
    );
};
export default UserPage;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import { ListCard ,PostModal } from "../components";

const HomePage = () => {
    const [visiblePostModal, setVisiblePostModal] = useState<boolean>(false);
    useEffect(()=>{
        setVisiblePostModal(false);
    },[])
    return (
        <S.HomeContainer>
            <S.ContentWrap>
                <PostModal visible={visiblePostModal}/>
                <ListCard
                    userNickname="홍길동"
                    likeCounnt={30}
                    comment="을지로 #자매분식
                    토스트는 필수로 시켜야 하는 노포감성 안주맛집🥪
                    여기 안주 1티어인 거 모르는 사람이 없다면서요...
                    24시간 운영해서 2차로 가기 딱 좋아요!!
                    단골만 아는 김치찌개, 비빔국수도 맛도리입니다ㅠ"
                    onClickComment = {()=>{
                        console.log("댓글창 열어주세요.");
                        setVisiblePostModal(true);
                    }}
                />
            </S.ContentWrap>
        </S.HomeContainer>
    );
};
export default HomePage;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import { ListCard } from "../components";

const HomePage = () => {
    return (
        <S.HomeContainer>
            <S.ContentWrap>
                <ListCard />
            </S.ContentWrap>
        </S.HomeContainer>
    );
};
export default HomePage;

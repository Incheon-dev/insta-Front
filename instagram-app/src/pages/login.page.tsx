import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import { InputComponent, ButtonComponent } from "../components";

const LoginPage = () => {
    return (
        <S.LoginContainer>
            <S.ImgWrap>
                <div>
                    <img
                        src="https://via.placeholder.com/500x600?text=sampleImg"
                        alt=""
                    />
                </div>
            </S.ImgWrap>
            <S.LoginWrap>
                <S.LoginBox>
                    <S.Logobox>
                        <S.TextLogo />
                    </S.Logobox>
                    <InputComponent
                        type="text"
                        placeholder="사용자 이름 또는 이메일"
                        onChange={(v: string) => {
                            console.log(v);
                        }}
                    />
                    <InputComponent
                        type="password"
                        placeholder="비밀번호"
                        onChange={(v: string) => {
                            console.log(v);
                        }}
                    />
                    <ButtonComponent
                        text="로그인"
                        onClick={(v: string) => {
                            console.log(v);
                        }}
                    />
                </S.LoginBox>
                <S.SignBox>계정이 없으신가요?</S.SignBox>
            </S.LoginWrap>
        </S.LoginContainer>
    );
};
export default LoginPage;

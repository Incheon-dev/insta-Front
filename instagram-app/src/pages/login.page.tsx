import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import { Input, Button, Link } from "../components";

const LoginPage = () => {
    const dispatch = useDispatch();
    return (
        <S.LoginContainer>
            <S.LoginBannerImgWrap>
                <div>
                    <img
                        src="https://via.placeholder.com/500x600?text=sampleImg"
                        alt=""
                    />
                </div>
            </S.LoginBannerImgWrap>
            <S.LoginWrap>
                <S.LoginBox>
                    <S.Logobox>
                        <S.TextLogo />
                    </S.Logobox>
                    <Input
                        type="text"
                        placeholder="이메일"
                        onChange={(v: string) => {
                            console.log(v);
                        }}
                    />
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        onChange={(v: string) => {
                            console.log(v);
                        }}
                    />
                    <Button
                        text="로그인"
                        onClick={(v: string) => {
                            console.log(v);
                        }}
                    />
                </S.LoginBox>
                <S.SignBox>
                    계정이 없으신가요?
                    <Link
                        text="가입하기"
                        href="/signup"
                        style={{ marginLeft: "5px" }}
                    />
                </S.SignBox>
            </S.LoginWrap>
        </S.LoginContainer>
    );
};
export default LoginPage;

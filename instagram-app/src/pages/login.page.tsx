import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as S from "../styled";
import { Input, Button, Link } from "../components";
import Img from "../components/images/default";
import loginBanner from "./../images/loginbanner.png";
import { useAppDispatch } from "../store";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <S.LoginContainer>
            <S.LoginBannerImgWrap>
                <S.Phone>
                    <Img src={loginBanner} />
                </S.Phone>
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
                            navigate("/main");
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

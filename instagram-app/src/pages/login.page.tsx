import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as S from "../styled";
import { Input, Button, Link, LoadingProgress } from "../components";
import Img from "../components/images/default";
import loginBanner from "./../images/loginbanner.png";
import { useAppDispatch } from "../store";
import { modalActions, login, UserState } from "../store/slice";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const checkEmail = (email: string) => {
        return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
            email
        );
    };
    const sendLogin = () => {
        if (email == "") {
            setIsLoading(false);
            return dispatch(modalActions.modalInfo("이메일을 입력해주세요."));
        }
        if (password == "") {
            setIsLoading(false);
            return dispatch(modalActions.modalInfo("비밀번호를 입력해주세요."));
        }
        let loginInfo: UserState = {
            email: email,
            password: password,
        };
        dispatch(login(loginInfo));
    };
    return (
        <S.LoginContainer>
            <LoadingProgress visible={isLoading ? 1 : 0} />
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
                    <S.LoinInputBox>
                        <Input
                            type="text"
                            placeholder="이메일"
                            onChange={(e: any) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                        />
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            onChange={(e: any) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                        />
                    </S.LoinInputBox>

                    <Button
                        text="로그인"
                        onClick={() => {
                            sendLogin();
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

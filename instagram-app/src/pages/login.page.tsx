import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as S from "../styled";
import { Input, Button, Link, LoadingProgress } from "../components";
import Img from "../components/images/default";
import loginBanner from "./../images/loginbanner.png";
import { useAppDispatch, useAppSelector, reducerState } from "../store";
import { login } from "../store/asynckThunks/account";
import { modalActions, UserState, AccountActions } from "../store/slice";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const accountSelector = useAppSelector(
        (state: reducerState) => state.account
    );
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        let _isLogin = window.sessionStorage.getItem("isLogin");
        //로그인을 했는데 로그인 페이지로 온다면 mainPage로 이동시키기
        if (_isLogin) navigate("/home", { replace: true });
    }, []);
    useEffect(() => {
        if (accountSelector.error != null) {
            let msg: string = accountSelector.error;
            setTimeout(() => {
                setIsLoading(false);
                dispatch(
                    modalActions.openModal({
                        message: msg,
                        ok: {
                            text: "확인",
                            onClick: () => {
                                onClickModal();
                            },
                        },
                    })
                );
            }, 1000);
        }
    }, [accountSelector.error]);
    useEffect(() => {
        if (accountSelector.isLogin) {
            setTimeout(() => {
                setIsLoading(false);
                navigate("/home", { replace: true });
            }, 1000);
        }
    }, [accountSelector.isLogin]);
    const onClickModal = () => {
        dispatch(AccountActions.clearError());
    };
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
        setIsLoading(true);
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
                            setIsLoading(true);
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

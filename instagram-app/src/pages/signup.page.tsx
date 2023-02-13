import React, { useState, useEffect } from "react";
import * as S from "../styled";
import { Input, Button, LoadingProgress, Select } from "../components";
import { useAppDispatch, useAppSelector, reducerState } from "../store";
import {
    signUp,
    validateEmail,
    sendVerificationNumber,
    modalActions,
    verifyNumber,
    AccountActions,
} from "../store/slice";
import { useNavigate } from "react-router";

const SingupPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const accountSelector = useAppSelector(
        (state: reducerState) => state.account
    );
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [sex, setSex] = useState<string>("남성");
    const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
    const [verificationNumber, setVerificationNumber] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isActiveSignup, setIsSignupBtn] = useState<boolean>(false);

    useEffect(() => {
        if (accountSelector.addUser) {
            dispatch(
                modalActions.openModal({
                    title: "확인",
                    message: "가입이 완료되었습니다.",
                    ok: {
                        text: "확인",
                        onClick: () => {
                            navigate("/login");
                        },
                    },
                })
            );
        }
    }, [accountSelector.addUser]);
    useEffect(() => {
        if (accountSelector.isSendVerificationNumber) {
            setIsSendEmail(true);
            setIsLoading(false);
        }
    }, [accountSelector.isSendVerificationNumber]);
    useEffect(() => {
        if (accountSelector.isVerifyEmail) {
            dispatch(
                modalActions.openModal({
                    title: "확인",
                    message: "인증이 완료 되었습니다.",
                    ok: { text: "확인" },
                })
            );
            setIsSignupBtn(true);
        } else if (isSendEmail && accountSelector.isVerifyEmail == false) {
            dispatch(
                modalActions.openModal({
                    title: "확인",
                    message: "인증번호를 확인해주세요.",
                    ok: { text: "확인" },
                })
            );
        }
    }, [accountSelector.isVerifyEmail]);

    useEffect(() => {
        if (accountSelector.error != null) {
            dispatch(
                modalActions.openModal({
                    message: accountSelector.error,
                    ok: {
                        text: "확인",
                        onClick: () => {
                            dispatch(AccountActions.clearError());
                        },
                    },
                })
            );
        }
    }, [accountSelector.error]);

    const checkEmail = (email: string) => {
        return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
            email
        );
    };
    const checkPhoneNumber = (phoneNumber: string) => {
        return /^\d{3}-\d{4}-\d{4}$/.test(phoneNumber);
    };

    const sendverifyNumber = () => {
        if (email == "") {
            setIsLoading(false);
            return dispatch(modalActions.modalInfo("이메일을 입력해주세요."));
        }
        if (!checkEmail(email)) {
            setIsLoading(false);
            return dispatch(
                modalActions.modalInfo("올바르지 않는 이메일 형식 입니다.")
            );
        }
        if (name == "") {
            setIsLoading(false);
            return dispatch(modalActions.modalInfo("성함을 입력해주세요."));
        }
        if (phoneNumber == "") {
            setIsLoading(false);
            return dispatch(
                modalActions.modalInfo("핸드폰 번호를 입력해주세요.")
            );
        }
        if (!checkPhoneNumber(phoneNumber)) {
            setIsLoading(false);
            return dispatch(
                modalActions.modalInfo("올바르지 않은 핸드폰 번호 형식입니다.")
            );
        }
        if (nickname == "") {
            setIsLoading(false);
            return dispatch(
                modalActions.modalInfo("사용하실 닉네임을 입력해주세요.")
            );
        }
        if (password == "") {
            setIsLoading(false);
            return dispatch(modalActions.modalInfo("비밀번호를 입력해주세요."));
        }
        if (password != password2) {
            setIsLoading(false);
            return dispatch(
                modalActions.modalInfo("비밀번호가 일치하지 않습니다.")
            );
        }
        if (!accountSelector.loading) {
            dispatch(sendVerificationNumber(email));
        }
    };
    return (
        <S.SignUpContainer>
            <LoadingProgress visible={isLoading} />
            <S.SignUpBox>
                <S.Logobox>
                    <S.TextLogo />
                </S.Logobox>
                {!isSendEmail && (
                    <S.SignupWraper>
                        <Input
                            type="text"
                            placeholder="이메일 주소"
                            onChange={(v: any) => {
                                setEmail(v.target.value);
                            }}
                            value={email}
                        />
                        <Input
                            type="text"
                            placeholder="성명"
                            onChange={(v: any) => {
                                setName(v.target.value);
                            }}
                            value={name}
                        />
                        <Input
                            type="text"
                            placeholder="핸드폰번호"
                            onChange={(v: any) => {
                                let phoneNumber: string =
                                    v.target.value.replace(
                                        /^(\d{3})(\d{4})(\d{4})$/,
                                        `$1-$2-$3`
                                    );
                                setPhoneNumber(phoneNumber);
                            }}
                            value={phoneNumber}
                        />
                        <Input
                            type="text"
                            placeholder="닉네임"
                            onChange={(v: any) => {
                                setNickname(v.target.value);
                            }}
                            value={nickname}
                        />
                        <Select
                            value={sex}
                            options={[
                                {
                                    text: "남성",
                                },
                                {
                                    text: "여성",
                                },
                            ]}
                            onChange={(v: any) => {
                                setSex(v.target.value);
                            }}
                        />
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            onChange={(v: any) => {
                                setPassword(v.target.value);
                            }}
                            value={password}
                        />
                        <Input
                            type="password"
                            placeholder="비밀번호 확인"
                            onChange={(v: any) => {
                                setPassword2(v.target.value);
                            }}
                            value={password2}
                        />
                        <Button
                            text="다음"
                            onClick={(v: any) => {
                                setIsLoading(true);
                                sendverifyNumber();
                            }}
                        />
                    </S.SignupWraper>
                )}
                {isSendEmail && (
                    <S.SignupWraper>
                        <S.InfoText>
                            가입한 이메일 주소로 발송된 인증번호를 확인해주세요.
                        </S.InfoText>
                        <Input
                            type="text"
                            placeholder="이메일 주소"
                            onChange={(v: any) => {
                                setVerificationNumber(v.target.value);
                            }}
                            value={verificationNumber}
                        />
                        <Button
                            text="인증번호 확인"
                            disable={isActiveSignup}
                            onClick={(v: any) => {
                                dispatch(
                                    verifyNumber({
                                        email: email,
                                        authKey: verificationNumber,
                                    })
                                );
                            }}
                        />
                        <hr />
                        <Button
                            text="가입완료"
                            onClick={(v: any) => {
                                let userInfo = {
                                    email: email,
                                    introduction: null,
                                    name: name,
                                    nickname: nickname,
                                    password: password,
                                    phoneNumber: phoneNumber,
                                    profileImage: null,
                                    sex: sex,
                                };
                                dispatch(signUp(userInfo));
                            }}
                            disable={!isActiveSignup}
                        />
                    </S.SignupWraper>
                )}
            </S.SignUpBox>
        </S.SignUpContainer>
    );
};
export default SingupPage;

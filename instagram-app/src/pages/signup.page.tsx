import React, { useState, useEffect } from "react";
import * as S from "../styled";
import { Input, Button, LoadingProgress } from "../components";
import { useAppDispatch, useAppSelector, reducerState } from "../store";
import {
    signUp,
    validateEmail,
    sendVerificationNumber,
    modalActions,
    verifyNumber,
} from "../store/slice";

const SingupPage = () => {
    const dispatch = useAppDispatch();
    const accountSelector = useAppSelector(
        (state: reducerState) => state.account
    );
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [sex, setSex] = useState<string>("");
    const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
    const [verificationNumber, setVerificationNumber] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        dispatch(
            modalActions.openModal({
                title: "확인",
                message: "인증이 완료 되었습니다...?",
                ok: { text: "확인" },
            })
        );
    }, []);

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
        }
    }, [accountSelector.isVerifyEmail]);
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
                            placeholder="전화번호"
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
                            placeholder="사용자이름"
                            onChange={(v: any) => {
                                setNickname(v.target.value);
                            }}
                            value={nickname}
                        />
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            onChange={(v: any) => {
                                setPassword(v.target.value);
                            }}
                            value={password}
                        />
                        <Button
                            text="다음"
                            onClick={(v: any) => {
                                setIsLoading(true);
                                if (!accountSelector.loading) {
                                    dispatch(sendVerificationNumber(email));
                                }
                            }}
                        />
                    </S.SignupWraper>
                )}
                {isSendEmail && (
                    <S.SignupWraper>
                        전송된 인증번호를 입력해주세요.
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
                            onClick={(v: any) => {
                                dispatch(
                                    verifyNumber({
                                        email: email,
                                        authKey: verificationNumber,
                                    })
                                );
                            }}
                        />
                    </S.SignupWraper>
                )}
            </S.SignUpBox>
        </S.SignUpContainer>
    );
};
export default SingupPage;

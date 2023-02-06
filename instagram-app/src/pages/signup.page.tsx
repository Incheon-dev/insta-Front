import React, { useState, useEffect } from "react";
import * as S from "../styled";
import { Input, Button } from "../components";
import { useAppDispatch } from "../store";
import { signUp } from "../store/slice";

const SingupPage = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [sex, setSex] = useState<string>("");
    return (
        <S.SignUpContainer>
            <S.SignUpBox>
                <S.Logobox>
                    <S.TextLogo />
                </S.Logobox>
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
                        let phoneNumber: string = v.target.value.replace(
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
                    placeholder="비밀전호"
                    onChange={(v: any) => {
                        setPassword(v.target.value);
                    }}
                    value={password}
                />

                <Button
                    text="가입"
                    onClick={(v: any) => {
                        let userInfo = {
                            email: email,
                            name: name,
                            nickname: nickname,
                            password: password,
                            phoneNumber: phoneNumber,
                            sex: "남성",
                        };
                        dispatch(signUp(userInfo));
                    }}
                />
            </S.SignUpBox>
        </S.SignUpContainer>
    );
};
export default SingupPage;

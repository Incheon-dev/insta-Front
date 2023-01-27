import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import { Input, Button } from "../components";

const SingupPage = () => {
    return (
        <S.SignUpContainer>
            <S.SignUpBox>
                <S.Logobox>
                    <S.TextLogo />
                </S.Logobox>
                <Input
                    type="text"
                    placeholder="휴대폰 번호 또는 이메일 주소"
                    onChange={(v: string) => {
                        console.log(v);
                    }}
                />
                <Input
                    type="text"
                    placeholder="성명"
                    onChange={(v: string) => {
                        console.log(v);
                    }}
                />
                <Input
                    type="text"
                    placeholder="사용자이름"
                    onChange={(v: string) => {
                        console.log(v);
                    }}
                />
                <Input
                    type="password"
                    placeholder="비밀전호"
                    onChange={(v: string) => {
                        console.log(v);
                    }}
                />
                <Button
                    text="가입"
                    onClick={(v: string) => {
                        console.log(v);
                    }}
                />
            </S.SignUpBox>
        </S.SignUpContainer>
    );
};
export default SingupPage;

import { useEffect, useState } from "react";
import styled from "styled-components";

export type ButtonPropsType = {
    onClick: (v?: any) => void;
    text: string;
    value?: string;
    radius?: number | string;
    backgroundColor?: string;
    textColor?: string;
    disable?: boolean;
};

export const Button: React.FunctionComponent<ButtonPropsType> = (props) => {
    return (
        <DefaultBtn
            value={props.value}
            onClick={(e: any) => {
                props.onClick(e);
            }}
            radius={props.radius}
            disabled={props.disable}
        >
            {props.text}
        </DefaultBtn>
    );
};

type StyledProps = {
    radius?: number | string;
    textColor?: string;
    backgroundColor?: string;
};

const DefaultBtn = styled.button`
    padding: 10px 15px;
    border: 1px solid #ddd;
    width: 100%;
    font-weight: bold;
    color: ${(props: StyledProps) =>
        props.textColor ? props.textColor : "#fff"};
    background-color: ${(props: StyledProps) =>
        props.backgroundColor ? props.backgroundColor : "#0090F8"};
    border-radius: ${(props: StyledProps) =>
        typeof props.radius == "string" ? props.radius : `${props.radius}px`};
    &:disabled {
        background-color: #ccc;
        color: #777;
    }
`;

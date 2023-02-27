import { CssBaselineProps } from "@mui/material";
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
    width?: number | string;
    border?: string;
    style?: React.CSSProperties;
};

export const Button: React.FunctionComponent<ButtonPropsType> = (props) => {
    return (
        <DefaultBtn
            style={props.style}
            value={props.value}
            onClick={(e: any) => {
                props.onClick(e);
            }}
            textColor={props.textColor}
            backgroundColor={props.backgroundColor}
            radius={props.radius}
            disabled={props.disable}
            width={props.width}
            border={props.border}
        >
            {props.text}
        </DefaultBtn>
    );
};

type StyledProps = {
    radius?: number | string;
    textColor?: string;
    backgroundColor?: string;
    width?: number | string;
    border?: string;
};

const DefaultBtn = styled.button`
    padding: 10px 15px;
    flex-shrink:0;
    flex-grow:0;
    border:${(props: StyledProps) =>
        props.border ? props.border : "1px solid #ddd"};
    width: ${(props: StyledProps) =>
        props.width
            ? typeof props.width == "string"
                ? props.width
                : `${props.width}px;`
            : "100%;"}
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

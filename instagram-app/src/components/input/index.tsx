import { useEffect, useState } from "react";
import styled from "styled-components";

export type InputPropsType = {
    type: string;
    value?: string;
    onChange: (v: any) => void;
    placeholder?: string;
    radius?: number | string;
};

export const Input: React.FunctionComponent<InputPropsType> = (props) => {
    return (
        <DefaultInput
            type={props.type}
            value={props.value}
            onChange={(e: any) => {
                props.onChange(e);
            }}
            placeholder={props.placeholder}
            radius={props.radius}
        />
    );
};

type StyledProps = {
    radius?: number | string;
    width?: number;
};

const DefaultInput = styled.input`
    padding: 10px 15px;
    border: 1px solid #ccc;
    width: ${(props: StyledProps) =>
        typeof props.width ? `${props.width}px` : "100%"};
    background-color: #fff;
    box-sizing: border-box;
    border-radius: ${(props: StyledProps) =>
        typeof props.radius == "string" ? props.radius : `${props.radius}px`};
    &:focus-visible {
        border: 3px solid #0090f8;
        outline: none;
    }
`;

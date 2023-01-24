import { useEffect, useState } from "react";
import styled from "styled-components";

export type InputPropsType = {
    type: string;
    value?: string;
    onChange: (v: any) => void;
    placeholder?: string;
    radius?: number | string;
};

export const InputComponent: React.FunctionComponent<InputPropsType> = (
    props
) => {
    return (
        <Input
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
};

const Input = styled.input`
    padding: 10px 15px;
    border: 1px solid #ccc;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: ${(props: StyledProps) =>
        typeof props.radius == "string" ? props.radius : `${props.radius}px`};
    &:focus-visible {
        border: 3px solid #0090f8;
        outline: none;
    }
`;

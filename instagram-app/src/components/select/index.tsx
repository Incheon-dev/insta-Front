import { useEffect, useState } from "react";
import styled from "styled-components";

export type SelectPropsType = {
    value?: string;
    onChange: (v: any) => void;
    radius?: number | string;
    options: OptionPropsType[];
};

export type OptionPropsType = {
    text: string;
    value?: string | number;
};

export const Select: React.FunctionComponent<SelectPropsType> = (props) => {
    return (
        <DefaultSelect
            value={props.value}
            onChange={(e: any) => {
                props.onChange(e);
            }}
            radius={props.radius}
        >
            {props.options.map((_option: OptionPropsType, i: number) => {
                return (
                    <Option
                        key={i}
                        value={_option.value ? _option.value : _option.text}
                    >
                        {_option.text}
                    </Option>
                );
            })}
        </DefaultSelect>
    );
};

type StyledProps = {
    radius?: number | string;
    width?: number;
};

const DefaultSelect = styled.select`
    padding: 10px 15px;
    border: 1px solid #ccc;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: ${(props: StyledProps) =>
        typeof props.radius == "string" ? props.radius : `${props.radius}px`};
`;

const Option = styled.option``;

import React from "react";
import styled from "styled-components";
export type TextPropsType = {
    text: string;
    style?: React.CSSProperties;
};

export const Text: React.FunctionComponent<TextPropsType> = (props) => {
    return <p style={{ ...props.style }}>{props.text}</p>;
};

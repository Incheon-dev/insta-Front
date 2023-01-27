import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
export type LinkPropsType = {
    href: string;
    text: string;
    style?: React.CSSProperties;
};

export const Link: React.FunctionComponent<LinkPropsType> = (props) => {
    const navigate = useNavigate();
    const lintTo = () => {
        navigate(props.href, { replace: false });
    };
    return (
        <LinkTo onClick={lintTo} style={{ ...props.style }}>
            {props.text}
        </LinkTo>
    );
};
const LinkTo = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #0085f6;
`;

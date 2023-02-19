import { useEffect, useState } from "react";
import styled from "styled-components";

export type IconButtonPropsType = {
    onClick: (v?: any) => void;
};

export const IconButton: React.FunctionComponent<IconButtonPropsType> = (
    props
) => {
    return <button>버튼</button>;
};

type StyledProps = {
    radius?: number | string;
    textColor?: string;
    backgroundColor?: string;
    width?: number;
};

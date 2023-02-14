import React, { useState, useEffect } from "react";
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from "@mui/material/CircularProgress";
import styled from "styled-components";

type LoadingProgressProps = {
    visible: number;
    progressColor?: string;
    bgColor?: string;
};
interface FinalLoadingProgressProps
    extends LoadingProgressProps,
        CircularProgressProps {}

export const LoadingProgress = (props: FinalLoadingProgressProps) => {
    return (
        <ModalBackground visible={props.visible ? "visible" : "hidden"}>
            {/* 뒤에 배경 */}
            <CircularProgress
                variant="determinate"
                sx={{
                    color: props.bgColor
                        ? props.bgColor
                        : "rgba(204, 204, 204,0.8)",
                }}
                size={50}
                thickness={3}
                {...props}
                value={100}
            />
            {/* 실제로 돌아가는놈 */}
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: props.progressColor
                        ? props.progressColor
                        : "rgba(238, 238, 238, 0.7)",
                    animationDuration: "500ms",
                    position: "absolute",
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: "round",
                    },
                }}
                size={50}
                thickness={3}
                {...props}
            />
        </ModalBackground>
    );
};
type styledProps = {
    visible: string;
};

const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${(props: styledProps) => {
        return props.visible;
    }};
`;

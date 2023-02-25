import React from "react";
import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
//
interface IconBtnProps extends IconButtonProps {
    icons: any;
    style?: CSSProperties;
    onClick?: (e?: any) => void;
}

export const IconBtn: React.FunctionComponent<IconBtnProps> = (
    props: IconBtnProps
) => {
    return (
        <IconButton
            onClick={(e: any) => {
                if (props.onClick) {
                    props.onClick(e);
                }
            }}
            size={props.size}
        >
            {props.icons}
        </IconButton>
    );
};

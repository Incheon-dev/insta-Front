import React from "react";
import { makeStyles } from "@material-ui/core";
import MTypography from "@material-ui/core/Typography";
import MIconButton, {
    IconButtonProps as MIconButtonProps,
} from "@material-ui/core/IconButton";
//
// import Icon, { FinalIconProps } from "@/components/atoms/image/icon";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export type IconButtonProps = {
    // icon: FinalIconProps;
    text?: string;
    buttonStyle?: CSSProperties;
    style?: CSSProperties;
    textStyle?: CSSProperties;
};

const IconButton: React.FC<IconButtonProps & MIconButtonProps> = (
    props: IconButtonProps & MIconButtonProps
) => {
    const useStyles = makeStyles((theme) => ({
        iconButtonLabel: {
            ...props.buttonStyle,
        },
        root: {
            ...props.style,
        },
        text: {
            ...props.textStyle,
        },
    }));

    const style = useStyles();
    return (
        <MIconButton
            {...props}
            classes={{ label: style.iconButtonLabel, root: style.root }}
        >
            {/* <Icon {...props.icon} /> */}
            {props.text ? (
                <MTypography classes={{ root: style.text }}>
                    {props.text}
                </MTypography>
            ) : (
                <></>
            )}
        </MIconButton>
    );
};

export default IconButton;

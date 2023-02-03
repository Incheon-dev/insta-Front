import React from "react"; //
export type ImgShapeType = "CIRCLE" | "RECT" | "CUSTOM";
export type ImgProps = {
    src: string;
    style?: React.CSSProperties;
    shape?: ImgShapeType;
};
const Img: React.FC<ImgProps> = (props: ImgProps) => {
    var radius = "initial";
    if (props.shape == "CIRCLE") {
        radius = "50%";
    } else if (props.shape == "RECT") {
        radius = "0px";
    }
    return (
        <img src={props.src} style={{ borderRadius: radius, ...props.style }} />
    );
};

export default Img;

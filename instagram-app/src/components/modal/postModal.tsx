import React, { useState, useEffect } from "react";
import * as S from "../../styled";


interface PostModalProps {
    title?: string;
    message?: string;
    width?: number;
    style?: any;
    visible?: boolean;
}

export const PostModal = ({ ...props }: PostModalProps) => {
    const [isActive, setisActive] = useState<boolean>(false);
    useEffect(() => {
        if (props.visible != undefined) {
            setisActive(props.visible);
        }
    }, [props.visible]);

    return (
        <S.ModalBackground visible={isActive}>
            <S.ModalContainer>
				포스트
			</S.ModalContainer>
        </S.ModalBackground>
    );
};

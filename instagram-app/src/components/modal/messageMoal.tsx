import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { reducerState } from "../../store";
import { useNavigate } from "react-router";
import * as S from "../../styled";

type ModalButton = {
    text: string;
    onClick: (value?: any) => void;
    style?: React.CSSProperties;
};

interface ModalProps {
    title?: string;
    message?: string;
    ok?: ModalButton;
    cancel?: ModalButton;
    width?: number;
    style?: any;
    visible?: boolean;
}

export const Modal = ({ ...props }: ModalProps) => {
    const [isActive, setisActive] = useState<boolean>(true);
    // const modalSelector = useSelector((state: reducerState) => state.modal);
    // useEffect(() => {
    //     console.log("modalSelector", modalSelector);
    // }, [modalSelector]);
    useEffect(() => {
        if (props.visible != undefined) {
            setisActive(props.visible);
        }
    }, [props.visible]);

    return (
        <S.ModalBackground $visible={isActive}>
            <S.ModalContainer>
                <S.ModalHeader>
                    <S.ModalTitle>{props.title}</S.ModalTitle>
                </S.ModalHeader>
                <S.ModalMessage>{props.message}</S.ModalMessage>
                <S.ModalBtnGroup>
                    {props.ok && (
                        <S.ModalOkBtn
                            onClick={(e) => {
                                props.ok?.onClick(e);
                            }}
                            style={{ ...props.ok.style }}
                        >
                            {props.ok.text}
                        </S.ModalOkBtn>
                    )}
                    {props.cancel && (
                        <S.ModalCancelBtn
                            style={{ ...props.cancel.style }}
                            onClick={(e) => {
                                props.cancel?.onClick(e);
                            }}
                        >
                            {props.cancel.text}
                        </S.ModalCancelBtn>
                    )}
                </S.ModalBtnGroup>
            </S.ModalContainer>
        </S.ModalBackground>
    );
};

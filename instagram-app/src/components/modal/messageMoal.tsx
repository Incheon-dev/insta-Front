import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, reducerState } from "../../store";
import { modalActions, AccountActions } from "../../store/slice";
import { useNavigate } from "react-router";
import * as S from "../../styled";

type ModalButton = {
    text: string;
    onClick?: (value?: any) => void;
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
    const dispatch = useAppDispatch();
    const [isActive, setisActive] = useState<boolean>(false);
    const accountSelector = useAppSelector(
        (state: reducerState) => state.account
    );
    const modalSelector = useAppSelector((state: reducerState) => state.modal);
    useEffect(() => {
        if (modalSelector.visible != undefined) {
            setisActive(modalSelector.visible);
        }
    }, [modalSelector]);
    useEffect(() => {
        if (props.visible != undefined) {
            setisActive(props.visible);
        }
    }, [props.visible]);

    return (
        <S.ModalBackground visible={isActive}>
            <S.ModalContainer>
                <S.ModalHeader>
                    <S.ModalTitle>{modalSelector.title}</S.ModalTitle>
                </S.ModalHeader>
                <S.ModalBody>
                    <S.ModalMessage>{modalSelector.message}</S.ModalMessage>
                    <S.ModalBtnGroup>
                        {modalSelector.ok && (
                            <S.ModalOkBtn
                                onClick={(e) => {
                                    dispatch(modalActions.closeModal());
                                    if (modalSelector.ok?.onClick) {
                                        modalSelector.ok?.onClick(e);
                                    }
                                }}
                                style={{ ...modalSelector.ok.style }}
                            >
                                {modalSelector.ok.text}
                            </S.ModalOkBtn>
                        )}
                        {modalSelector.cancel && (
                            <S.ModalCancelBtn
                                style={{ ...modalSelector.cancel.style }}
                                onClick={(e) => {
                                    dispatch(modalActions.closeModal());
                                    if (modalSelector.cancel?.onClick) {
                                        modalSelector.cancel?.onClick(e);
                                    }
                                }}
                            >
                                {modalSelector.cancel.text}
                            </S.ModalCancelBtn>
                        )}
                    </S.ModalBtnGroup>
                </S.ModalBody>
            </S.ModalContainer>
        </S.ModalBackground>
    );
};

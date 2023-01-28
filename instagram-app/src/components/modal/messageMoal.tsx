import React from "react";
import * as S from "../../styled";

let onError = false;
let onWarning = false;
let onConfirm = false;
let onSuccess = false;
let onInfo = false;

interface ModalProps {
    title?: string;
    message?: string;
    onOk?: (value: any) => void;
    onCancel?: () => void;
    width?: number;
    style?: any;
}

export const Modal = ({ ...props }: ModalProps) => {
    return (
        <S.ModalBackground>
            <S.ModalContainer>
                <S.ModalHeader>
                    <S.ModalTitle>{props.title}</S.ModalTitle>
                </S.ModalHeader>
                <S.ModalMessage>{props.message}</S.ModalMessage>
            </S.ModalContainer>
        </S.ModalBackground>
    );
};

// export const ModalConfirm = (
//     message: string,
//     onExit: (result: boolean) => void,
//     width?: string | number
// ) => {
//     if (!onConfirm) {
//         Modal.confirm({
//             title: "확인",
//             content: message,
//             cancelText: "취소",
//             okText: "확인",
//             onOk: () => {
//                 onConfirm = false;
//                 onExit(true);
//             },
//             onCancel: () => {
//                 onConfirm = false;
//                 onExit(false);
//             },
//             width: width,
//         });
//         onConfirm = true;
//     }
// };

// export const ModalSuccess = (message: string) => {
//     if (!onSuccess) {
//         Modal.success({
//             content: message,
//             okText: "확인",
//             onOk: () => {
//                 onSuccess = false;
//             },
//         });
//         onSuccess = true;
//     }
// };

// export const ModalInfo = (message: string) => {
//     if (!onInfo) {
//         Modal.info({
//             title: "안내",
//             content: message,
//             okText: "확인",
//             onOk: () => {
//                 onInfo = false;
//             },
//         });
//         onInfo = true;
//     }
// };

// export const ModalError = (message: string) => {
//     if (!onError) {
//         Modal.error({
//             title: "에러",
//             content: message,
//             okText: "확인",
//             onOk: () => {
//                 onError = false;
//             },
//         });
//         onError = true;
//     }
// };

// export const ModalWarning = (message: string) => {
//     if (!onWarning) {
//         Modal.warning({
//             title: "경고",
//             content: message,
//             okText: "확인",
//             onOk: () => {
//                 onWarning = false;
//             },
//         });
//         onWarning = true;
//     }
// };

import styled from "styled-components";

type styledProps = {
    visible: boolean;
};

export const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${(props: styledProps) => {
        return props.visible ? "visible" : "hidden";
    }};
`;
export const ModalContainer = styled.div`
    width: 30%;
    height: 15%;
    background-color: #fff;
    border-radius: 30px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
`;
export const ModalHeader = styled.div`
    height: 20%;
`;
export const ModalBody = styled.div`
    height: 80%;
`;
export const ModalTitle = styled.h2`
    margin: 0;
`;
export const ModalBtnGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ModalOkBtn = styled.button`
    padding: 10px 5px;
    width: 100px;
`;
export const ModalCancelBtn = styled.button``;
export const ModalMessage = styled.p`
    height: 75%;
`;

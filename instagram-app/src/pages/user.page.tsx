import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styled";
import { ListCard, PostModal } from "../components";

const UserPage = () => {
    const { id } = useParams();
    const [visiblePostModal, setVisiblePostModal] = useState<boolean>(false);
    useEffect(() => {
        setVisiblePostModal(false);
    }, []);
    const onCloseModal = () => {
        setVisiblePostModal(false);
    };
    return <S.HomeContainer></S.HomeContainer>;
};
export default UserPage;

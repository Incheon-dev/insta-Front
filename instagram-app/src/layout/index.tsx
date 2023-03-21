import React, { useState, useEffect, ReactElement } from "react";
import { useNavigate } from "react-router";
import ResponsiveDrawer from "../components/navigation";
import { useLocations } from "../hooks";
import { Modal ,PostModal} from "../components/";
import styled from "styled-components";

export type layoutProps = {
    children?: React.ReactNode;
};

export const Layout: React.FunctionComponent<layoutProps> = (props) => {
    const navMenus = [
        {
            title: "홈",
            onClick: ()=>{
                navigation("/home",{ replace: false })
            }
        },
        {
            title: "검색",
            onClick: ()=>{
                navigation("/home",{ replace: false })
            }
        },
        {
            title: "탐색 탭",
            onClick: ()=>{
                navigation("/home",{ replace: false })
            }
        },
        {
            title: "릴스",
            onClick: ()=>{
                navigation("/home",{ replace: false })
            }
        },
        {
            title: "메시지",
            onClick: ()=>{
                navigation("/home",{ replace: false })
            }
        },
        {
            title: "알림",
            onClick: ()=>{
                navigation("/home",{ replace: false })
            }
        },
        {
            title: "만들기",
            onClick: ()=>{
                setIsViewPostModal(true);
            }
        },
        {
            title: "프로필",
            onClick: ()=>{
                navigation("/user/dongeun_i",{ replace: false })
            }
            
        },
    ];
    const { path } = useLocations();
    const [useDrawer, setUseDrawer] = useState<boolean>(false);
    const [isViewPostModal,setIsViewPostModal] = useState<boolean>(false);
    const navigation = useNavigate();
    useEffect(() => {
        /* 로그인  , 회원가입페이지에서는 노출x */
        if (path?.indexOf("/login") != -1 || path?.indexOf("/signup") != -1) {
            setUseDrawer(false);
        } else {
            setUseDrawer(true);
        }
    }, [path]);
    return (
        <Container>
            <Modal />
            {useDrawer && <PostModal visible={isViewPostModal} onClose={()=>{setIsViewPostModal(false);}}/>}
            {useDrawer && <ResponsiveDrawer navList={navMenus} />}
            <Main>{props.children}</Main>
        </Container>
    );
};
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
`;

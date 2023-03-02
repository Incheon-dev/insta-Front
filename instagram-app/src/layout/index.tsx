import React, { useState, useEffect, ReactElement } from "react";
import ResponsiveDrawer from "../components/navigation";
import { navMenus } from "../constant/menus";
import { useLocations } from "../hooks";
import { Modal ,PostModal} from "../components/";
import styled from "styled-components";

export type layoutProps = {
    children?: React.ReactNode;
};

export const Layout: React.FunctionComponent<layoutProps> = (props) => {
    const { path } = useLocations();
    const [useDrawer, setUseDrawer] = useState<boolean>(false);
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

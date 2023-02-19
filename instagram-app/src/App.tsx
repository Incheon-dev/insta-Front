import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Modal } from "./components/";
import { PageList } from "./pages/page_list";
import ResponsiveDrawer from "./components/navigation";
import { useLocations } from "./hooks";
import { navMenus } from "./constant/menus";
const App: React.FunctionComponent<any> = () => {
    const { path } = useLocations();
    const [isLogin, setisLogin] = useState<boolean>(false);
    const [useDrawer, setUseDrawer] = useState<boolean>(false);
    useEffect(() => {
        let _isLogin = window.sessionStorage.getItem("isLogin");
        if (_isLogin) setisLogin(true);
    }, []);
    useEffect(() => {
        /* 로그인  , 회원가입페이지에서는 노출x */
        if (path?.indexOf("/login") != -1 && path?.indexOf("/signup") != -1) {
            setUseDrawer(true);
        } else {
            setUseDrawer(false);
        }
    }, [path]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Modal />
            {/* 로그인  , 회원가입페이지에서는 노출xc */}
            {useDrawer && (
                <ResponsiveDrawer navList={navMenus} visible={useDrawer} />
            )}
            <PageList isLogin={isLogin} />
        </Suspense>
    );
};

export default App;

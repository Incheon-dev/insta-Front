import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./layout";
import "./App.css";

import { PageList } from "./pages/page_list";
const App: React.FunctionComponent<any> = () => {
    const [isLogin, setisLogin] = useState<boolean>(false);
    const [useDrawer, setUseDrawer] = useState<boolean>(false);
    useEffect(() => {
        let _isLogin = window.sessionStorage.getItem("isLogin");
        if (_isLogin) setisLogin(true);
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <PageList isLogin={isLogin} />
            </Layout>
        </Suspense>
    );
};

export default App;

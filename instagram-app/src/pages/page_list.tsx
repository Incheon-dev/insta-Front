import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
//
//module

const LoginPage = lazy(() => import("./login.page"));

type pageListType = {
    isLogin: boolean;
};

export const PageList = (props: pageListType) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.isLogin) {
            navigate("/login", { replace: true });
        }
    }, [props.isLogin]);
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Routes>
                {/* <Route  path="/home" element={HomeMainPage} /> */}
                <Route path="/login" element={<LoginPage />} />
                {/* <Route  path="/settings" element={SettingPage} /> */}
                {/* <Route  path="/admin" element={AdminMainPage} /> */}
                {/* <Route  path="/order" element={OrderMainListPage} /> */}
                {/* <Route  path="/available/list" element={AvailableListPage} /> */}
            </Routes>
        </Suspense>
    );
};

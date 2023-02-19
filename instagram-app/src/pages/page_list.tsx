import React, { lazy, useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./login.page"));
const HomePage = lazy(() => import("./home.page"));
const SignupPage = lazy(() => import("./signup.page"));

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
        <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
    );
};

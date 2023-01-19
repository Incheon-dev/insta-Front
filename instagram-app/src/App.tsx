import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { PageList } from "./pages/page_list";

const App: React.FunctionComponent<any> = () => {
    const [isLogin, setisLogin] = useState<boolean>(false);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageList isLogin={isLogin} />;
        </Suspense>
    );
};

export default App;

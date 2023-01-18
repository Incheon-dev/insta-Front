// Library
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jQuery from "jquery";
//
// Module
//
//fuse lib
//
import { PageList } from "./pages/page_list";

const App: React.FunctionComponent<any> = () => {
    Object.assign(window, { toast: (str: string) => {} });
    Object.assign(window, { $: jQuery });
    const [isLogin, setisLogin] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <PageList isLogin={isLogin} />
        </BrowserRouter>
    );
};

export default App;

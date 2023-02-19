import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type useLocationType = {
    path?: string;
    existBack: boolean;
    searchParam?: string;
    locKey?: string;
};

export const useLocations = (): useLocationType => {
    const location = useLocation();
    const [path, setPath] = useState<string | undefined>(undefined);
    const [existBack, setExistBack] = useState<boolean>(false);
    const [searchParam, setSearchParam] = useState<string | undefined>(
        undefined
    );
    const [locKey, setLocKey] = useState<string | undefined>("");

    useEffect(() => {
        setPath(location.pathname);
        setExistBack(location.state ? true : false);
        setSearchParam(location.search);
        setLocKey(location.key);
    }, [location.pathname]);

    return {
        path,
        existBack,
        searchParam,
        locKey,
    };
};

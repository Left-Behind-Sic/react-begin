import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/myRoutes";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)

    console.log(isAuth)

    return (
        isAuth
        ? <Routes>
                {privateRoutes.map (r=>
                    <Route
                        path={r.path}
                        element={r.component}
                        key={r.path}
                    />
                )}
                <Route path={'*'} element={<Posts/>} />
            </Routes>
        : <Routes>
                {publicRoutes.map (r=>
                    <Route
                        path={r.path}
                        element={r.component}
                        key={r.path}
                    />
                )}
                <Route path={'*'} element={<Login/>} />
            </Routes>

    );
};

export default AppRouter;
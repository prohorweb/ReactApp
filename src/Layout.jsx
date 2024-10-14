import React from "react";
import { Header,Footer } from './components';

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        </>);
}                                           
export default Layout
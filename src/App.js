import React from "react";

import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Skills from "./components/Layout/Skills";
import Footer from "./components/Layout/Footer";

const data = [
    {
        subject: 'HTML',
        level: 65
    },
    {
        subject: 'CSS',
        level: 55
    },
    {
        subject: 'JAVASCRIPT',
        level: 50
    },
    {
        subject: 'REACT',
        level: 55
    },
    {
        subject: 'REDUX',
        level: 25
    }
];

const App = () => {

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Skills skills={data} />
        </React.Fragment>
    );
};

export default App;
import React from "react";

import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Skills from "./components/Layout/Skills";
import Footer from "./components/Layout/Footer";

const App = () => {

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Skills />
        </React.Fragment>
    );
};

export default App;
import React from "react";

import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Skills from "./components/Layout/Skills";
import Qualification from "./components/Layout/Qualification";
import Contact from "./components/Layout/ContactMe";
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

const courses = [
    {
        school: 'Kaunas University of Technology',
        degree: 'Bachelor degree in electronic engineering',
        year: '2007 - 2011'
    },
    {
        school: 'Code Academy',
        degree: 'PHP basics',
        year: '2017. Duration 9 weeks'
    },
    {
        school: 'Baltijos technologijų institutas',
        degree: 'JavaScript, CSS, HTML basics',
        year: '2018. Duration 6 month'
    },
    {
        school: 'Kaunas Coding School',
        degree: 'Quality assurance basics',
        year: '2019. Duration 8 weeks'
    }
]

const App = () => {

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Skills skills={data} />
            <Qualification courses={courses}/>
            <Contact />
            <Footer />
            <div>labas</div>
        </React.Fragment>
    );
};

export default App;
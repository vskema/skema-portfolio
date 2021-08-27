import React from "react";

import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Skills from "./components/Layout/Skills";
import Qualification from "./components/Layout/Qualification";
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
        course: 'Kaunas University of Technology',
        year: '2007 - 2011',
        degree: 'Bachelor degree in electronic engineering'
    },
    {
        course: 'PHP beginners course',
        year: '2017. Duration 9 weeks',
        degree: 'PHP basics'
    },
    {
        course: 'Web developer course',
        year: '2018. Duration 6 month',
        degree: 'CSS, JAVASCRIPT basics'
    },
    {
        course: 'Quality assurance course',
        year: '2019. Duration 8 weeks',
        degree: 'Quality assurance basics'
    }
]

const App = () => {

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Skills skills={data} />
            <Qualification courses={courses}/>
        </React.Fragment>
    );
};

export default App;
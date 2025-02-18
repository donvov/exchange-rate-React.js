import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "../header/Header";
import Footer from "../footer/Footer"
import Rate from "../rate/Rate";
import About from "../about/About";


class App extends React.Component {

    render() {
        return (
            <div className="site">
                <Header/>

                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Rate}/>
                                <Route exact path="/about" component={About}/>
                            </Switch>
                        </Router>
                    </main>
                </div>

                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">На нашем сайте мы используем cookie для сбора информации технического
                            характера.<br/>В
                            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                            местоположения.&nbsp;
                            <button className="btn btn-primary btn-sm">OK</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default App;

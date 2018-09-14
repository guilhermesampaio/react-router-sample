import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Home from './Home'
import About from './About'


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path ="/" component={Home}/>
                    <Route path ="/about" component={About}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
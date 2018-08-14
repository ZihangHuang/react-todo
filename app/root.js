import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import HeaderBox from './container/header_box';
import IndexBox from "./container/index_box";
import TodoBox from './container/todo_box';
import DoingBox from './container/doing_box';
import DoneBox from './container/done_box';
import configureStore from './stores';

export default class Root extends React.Component{
    render(){
        const store = configureStore();
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={HeaderBox}>
                        <IndexRoute component={IndexBox} />
                        <Route path="/todo" component={TodoBox} />
                        <Route path="/doing" component={DoingBox} />
                        <Route path="/done" component={DoneBox} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
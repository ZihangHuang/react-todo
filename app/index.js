import 'react-hot-loader/patch';
import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'antd/dist/antd.css';
import Root from './root';

render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    document.getElementById("root")
    );

if(module.hot){
    module.hot.accept("./root",() => {
        const NewRoot =require('./root').default;
        render(
            <AppContainer warnings={false}>
                <Root/>
            </AppContainer>,
            document.getElementById("root")
        );
    });
}

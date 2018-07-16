import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';




//register a new interceptor;
// all the axios are covered;
let myInterceptors = axios.interceptors.request.use(request=>{
    console.log(request);
    //edit request config

    return request
},
    error=>{
    //globally show the error;
    console.log(error);
    return Promise.reject(error);
    });
axios.interceptors.request.eject(myInterceptors);



axios.interceptors.response.use(response=>{
        console.log(response);
        //edit request config
        return response
    },
    error=>{
        //globally show the error;
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

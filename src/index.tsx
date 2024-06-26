import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {LibraryScreen} from "./screens/LibraryScreen";
import {PlayerScreen} from "./screens/PlayerScreen";
import {UploadScreen} from "./screens/UploadScreen";

import awsconfig from "./amplifyconfiguration.json";
import {Amplify} from "aws-amplify";

Amplify.configure(awsconfig);

const router = createBrowserRouter([
    {
        path: "/",
        element: <LibraryScreen/>
    },
    {
        path: "/music-player",
        element: <PlayerScreen/>
    },
    {
        path: "/upload",
        element: <UploadScreen/>
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <React.Suspense fallback={"loading"}>
            {/* Mettre le Authenticator pour englober tout ce que je veux qui soit caché*/}
            <RouterProvider router={router}/>
            {/*<App/>*/}
        </React.Suspense>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

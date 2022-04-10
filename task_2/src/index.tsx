import App from './App';

import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./store/store";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);
root.render(<Provider store={store}><App/></Provider>);

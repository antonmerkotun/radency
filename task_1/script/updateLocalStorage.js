import {data} from "./index.js";

export const updateLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(data))
}
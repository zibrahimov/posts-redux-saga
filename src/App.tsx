import React from 'react';
import { Provider } from "react-redux";
import Posts from './components/Posts';
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container p-3 my-3 bg-primary text-white">
        <h3>Posts</h3>
        <p>Typescript + Redux Saga + Redux Saga Test Plan</p>
        <Posts />
      </div>
    </Provider>
  );
}
export default App;

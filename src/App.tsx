import { Provider } from "react-redux";
import { CreatePost } from './components/CreatePost';
import { Posts } from './components/Posts';
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container p-3 my-3 bg-primary text-white">
        <h3>Posts</h3>
        <p>Typescript + Redux Saga + React Testing Library + Redux Saga Test Plan</p>
        <div className="row">
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <Posts />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default App;

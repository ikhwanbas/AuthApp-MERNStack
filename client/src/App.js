
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserLists from "./Components/UserLists";

function App() {
  return (
    <div className="App">

      <h1>Mern Stack Authentication</h1>

      <div className="row justify-content-center">

        <div className="co-md-6">

          <Register />

        </div>
        <div className="co-md-6">

          <Login />

        </div>

      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <UserLists />
        </div>
      </div>

    </div>
  );
}

export default App;

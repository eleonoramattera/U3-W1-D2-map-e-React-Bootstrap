import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import CustomNav from "./components/CustomNav";
import Jumbotron from "./components/Jumbotron";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <CustomNav />
      <Jumbotron />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;

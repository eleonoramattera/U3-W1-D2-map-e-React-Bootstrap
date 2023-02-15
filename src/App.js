import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CustomNav from "./components/CustomNav";
import Jumbotron from "./components/Jumbotron";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <CustomNav />
      <Jumbotron />
      {/*<BookList libri={romance} />*/}
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;

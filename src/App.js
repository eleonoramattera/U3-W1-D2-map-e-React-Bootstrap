import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CustomNav from "./components/CustomNav";
import Jumbotron from "./components/Jumbotron";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import romance from "./data/romance.json";

function App() {
  return (
    <>
      <CustomNav />
      <Jumbotron />
      <BookList libri={romance} />
      {/* <AllBook /> */}
      <MyFooter />
    </>
  );
}

export default App;

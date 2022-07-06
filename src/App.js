import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Router from "./components/Router";
import ShowAlertSuccess from "./components/Alert/component/ShowAlertSuccess";
function App() {
  return (
    <>
      <Header />
      <Router />
      <ShowAlertSuccess />
      <Footer />
    </>
  );
}
export default App;

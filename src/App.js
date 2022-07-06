import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/App.css"

function App() {
  return (
    <div>
      <div className="global">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;

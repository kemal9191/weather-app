import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import { CityProvider } from "./context/CityContext";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <Container />
      </CityProvider>
    </div>
  );
}

export default App;

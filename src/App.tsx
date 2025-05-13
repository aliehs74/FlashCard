import './App.css'
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Header from "./components/Header";

function App() {
  return (
    <main >
    <Router>
      <AppProvider >
        <Header />
        <Routes/>
      </AppProvider>
    </Router>
    </main>
  );
}

export default App;
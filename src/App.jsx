import "./App.css";
import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transactionbar from "./components/Transactionbar";

function App() {
  return (
    <>
      <Sidebar />
      <Heading title="Heading Test" />
      <Dashboard title="Dashboard Test" />
      <Transactionbar />
    </>
  );
}

export default App;

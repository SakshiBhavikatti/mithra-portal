import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
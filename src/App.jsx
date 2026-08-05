import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />

      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
}

export default App;
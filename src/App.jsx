import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import StatCard from "./components/StatCard/StatCard";

function App() {
  return (
    <>
      <Header />

      <Layout>

        <StatCard
          title="WPM"
          value="0"
        />

      </Layout>
    </>
  );
}

export default App;
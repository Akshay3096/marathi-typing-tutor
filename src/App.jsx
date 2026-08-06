import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

import { useTyping } from "./hooks/useTyping";

function App() {
  const typing = useTyping();

  return (
    <>
      <Header />

      <Layout>
        <Dashboard typing={typing} />
      </Layout>
    </>
  );
}

export default App;
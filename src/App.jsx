import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

import { useTyping } from "./hooks/useTyping";
import { useTimer } from "./hooks/useTimer";

function App() {
  const typing = useTyping();

  const timer = useTimer(typing.isTyping);

  return (
    <>
      <Header />

      <Layout>
        <Dashboard
          typing={typing}
          timer={timer}
        />
      </Layout>
    </>
  );
}

export default App;
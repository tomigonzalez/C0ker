import "./App.css";

import { AppRouter } from "./routes/routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;

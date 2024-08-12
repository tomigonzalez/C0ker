import "./App.css";
import { Suspense } from "react";
import { AppRouter } from "./routes/routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>cargando...</div>}>
        <AppRouter />
      </Suspense>
    </Layout>
  );
}

export default App;

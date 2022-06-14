import { lazy, Suspense } from "react";

const Column2d = lazy(() => import("./Column2d"));

const App = () => (
  <Suspense fallback={null}>
    <h2>Charts</h2>
    <Column2d />
  </Suspense>
);

export default App;

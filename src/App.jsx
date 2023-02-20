import { Layout } from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/spritepos" element={<Layout />}>
        <Route index element={<h1>It's homepage</h1>}></Route>
        <Route></Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;

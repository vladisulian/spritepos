import { Layout } from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./Components/Hero/Hero";

const App = () => {
  return (
    <Routes>
      <Route path="/spritepos" element={<Layout />}>
        <Route index element={<Hero />}></Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;

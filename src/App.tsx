import { Navbar, ExpectedImpactItem } from "./components";
import {
  ExpectedImpact,
  Home,
  Introduction,
  NewTechnologies,
  Objectives,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Introduction />
      <NewTechnologies />
      {/*  <ExpectedImpact /> */}
      <Objectives />
    </>
  );
}

export default App;

import { Navbar } from "./components";
import {
  Home,
  Introduction,
  NewTechnologies,
  Objectives,
  ThesisForm,
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
      <ThesisForm />
    </>
  );
}

export default App;

import { Navbar } from "./components";
import {
  ConclusionsCarousel,
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
      <ConclusionsCarousel />
    </>
  );
}

export default App;

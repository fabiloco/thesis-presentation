import { Navbar } from "./components";
import {
  DesignStages,
  ExpectedImpact,
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
      <ExpectedImpact />
      <Objectives />
      <DesignStages />
      <ThesisForm />
    </>
  );
}

export default App;

import { Navbar } from "./components";
import {
  Conclusions,
  DesignStages,
  ExpectedImpact,
  Home,
  Introduction,
  NewTechnologies,
  Objectives,
  Recomendations,
  ThesisForm,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Introduction />
      <ExpectedImpact />
      <NewTechnologies />
      <Objectives />
      <DesignStages />
      <ThesisForm />
      <Conclusions />
      <Recomendations />
      <div className='my-48' />
    </>
  );
}

export default App;

import "./App.css";
import CompRole from "./materi-testing/CompRole";
import CompUserEvent from "./materi-testing/CompUserEvent";
import CompVariant from "./materi-testing/CompVariant";
import SampleCompRTL from "./materi-testing/SampleCompRTL";
import SimpleShowHide from "./materi-testing/SimpleShowHide";
import CompAxiosCall from "./materi-testing/CompAxiosCall";

function App() {
  return (
    <div className="App">
      <SampleCompRTL />
      <SimpleShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </div>
  );
}

export default App;

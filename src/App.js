import ErrorExample from "./components/useState/ErrorExample";
import ArrayExample from "./components/useState/ArrayExample";
import ObjectExample from "./components/useState/ObjectExample";

import "./App.css";
import CounterExample from "./components/useState/CounterExample";
import UpdateTitleExample from "./components/useEffect/UpdateTitleExample";
import CleanUpExample from "./components/useEffect/CleanUpExample";
import FetchDataExample from "./components/useEffect/FetchDataExample";
import FetchUserExample from "./components/conditionalRendering/FetchUserExample";

function App() {
  return (
    <div className="container">
      {/* –––––– useState Examples –––––– */}
      {/* <ErrorExample /> */}
      {/* <ArrayExample /> */}
      {/* <ObjectExample /> */}
      {/* <CounterExample /> */}
      {/* –––––– useEffect Examples –––––– */}
      {/* <UpdateTitleExample /> */}
      {/* <CleanUpExample /> */}
      {/* <FetchDataExample /> */}
      {/* –––––– Conditional Rendering Examples –––––– */}
      <FetchUserExample />
    </div>
  );
}

export default App;

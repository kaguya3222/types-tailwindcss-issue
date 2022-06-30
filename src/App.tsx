import "./App.css";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

function App() {
  return <div className="text-red-500">123</div>;
}

export default App;

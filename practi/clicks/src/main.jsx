import { createRoot } from "react-dom/client";
import App from "./App";

let counter = 1;

createRoot(document.getElementById("root")).render(<App counter={counter} />);

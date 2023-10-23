import { createRoot } from "react-dom/client";
import "./styles.css";

// Custom Hooks: useFetch()
// import App from "./Custom.Hooks";
 
// React Query
import App from "./React.Query";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render( <App /> );


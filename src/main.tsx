import { createRoot } from "react-dom/client";
import TagManager from "react-gtm-module";
import App from "./App.tsx";
import "./index.css";
const gtmId = import.meta.env.VITE_GTM_ID
TagManager.initialize({
  gtmId,
  dataLayer: {
    app_version: "1.0.0",
    environment: import.meta.env.MODE,
  },
});
createRoot(document.getElementById("root")!).render(<App />);


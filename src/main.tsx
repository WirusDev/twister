import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <React.StrictMode>
      <App />
      <Analytics />
      <SpeedInsights />
    </React.StrictMode>
  </CookiesProvider>
);

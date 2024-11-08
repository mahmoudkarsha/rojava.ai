import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalsProvider from "./Providers/GlobalsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <GlobalsProvider>
            <App />
      </GlobalsProvider>
);

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<NotFound />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

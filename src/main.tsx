import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app/App.tsx";
import { RouterProvider } from 'react-router-dom';
import { store } from "@/store/store.ts";
import { Provider } from "react-redux";
import router from "@/router/routerConfig.tsx"; // import qiling

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> 
      <App />
    </Provider>
  </StrictMode>
);

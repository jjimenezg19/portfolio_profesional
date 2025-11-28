import { StrictMode } from "react";
import "@lottiefiles/lottie-player";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.css";
import App from "@/layout/App";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

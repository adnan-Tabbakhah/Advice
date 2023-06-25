import { createBrowserRouter } from "react-router-dom";

import AdvicePage from "./AdvicePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <AdvicePage />,
  },
]);

export default router;

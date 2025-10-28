import useLocalizeDocumentAttributes from "./hooks/useLocalizeDocumentAttributes";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/common/loader/spinner/Loader";
const Home = lazy(() => import("./app/home/page"));
const Success = lazy(() => import("./app/success/Success"));

const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

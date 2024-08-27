import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PATH } from "./routes";
import Layout from "./layouts/Layout";
import { Loader } from "./components/ui";

const Gallery = lazy(() => import("./pages/Gallery"));
const Photo = lazy(() => import("./pages/Photo"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={PATH.GALLERY.ROOT} element={<Layout />}>
          <Route index element={<Gallery />} />
          <Route path={PATH.GALLERY.PHOTO_ID} element={<Photo />} />
          <Route path={PATH.ALL} element={<NotFound />} />
        </Route>
        <Route
          path={PATH.ALL}
          element={<Navigate to={PATH.GALLERY.ROOT} replace />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;

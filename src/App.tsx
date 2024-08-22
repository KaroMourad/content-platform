import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { PATH } from "./routes";
import Layout from "./layouts/Layout";

const Gallery = lazy(() => import("./pages/Gallery"));
const DetailedPhoto = lazy(() => import("./pages/DetailedPhoto"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path={PATH.GALLERY.ROOT} element={<Layout />}>
        <Route index element={<Gallery />} />
        <Route path={PATH.GALLERY.PHOTO_ID} element={<DetailedPhoto />} />
        <Route path={PATH.ALL} element={<NotFound />} />
      </Route>
      <Route
        path={PATH.ALL}
        element={<Navigate to={PATH.GALLERY.ROOT} replace />}
      />
    </Routes>
  );
}

export default App;

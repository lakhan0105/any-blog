import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeLayout, Landing, Login, Register } from "./Pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <main>
        <h1>hello</h1>
      </main>
    </RouterProvider>
  );
}

export default App;

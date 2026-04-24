import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-tooltip/dist/react-tooltip.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "../Root/Root";
import { Contact } from "../Pages/Contact";
import { About } from "../Pages/About";
import { ErrorElement } from "../ErrorHandling/ErrorBoundary";
import { MyStory } from "../Pages/MyStory";
import { Projects } from "../Pages/Projects/Projects";
import { Experience } from "../Pages/Experience";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<About />} />
        <Route path="story" element={<MyStory />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorElement />} />
      </Route>
    </>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

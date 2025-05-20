import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters } from "./routes";
import { DefaultLayout } from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            // Page
            const Page = route.component;
            // Layout
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            // Render
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

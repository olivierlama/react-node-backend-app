import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import { GlobalHeaderBasicMenu } from "./components/GlobalHeaderBasicMenu";
import Box from "carbon-react/lib/components/box";
import Link from "carbon-react/lib/components/link";
function App() {
  return (
    <CarbonProvider theme={sageTheme}>
      <GlobalStyle />
      <GlobalHeaderBasicMenu />

      <Box m={3} p={3}>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Box>
    </CarbonProvider>
  );
}
export default App;

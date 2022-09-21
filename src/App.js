import "./App.scss";

import {
  About,
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
} from "./container";

import { Brand, CTA, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
        <main>
          <Brand />
          <About />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import {
   Cart,
   FlexContent,
   Footer,
   Hero,
   Nav,
   Sales,
   Stories,
} from "./components";
import {
   footerAPI,
   heroapi,
   highlight,
   popularsales,
   sneaker,
   story,
   toprateslaes,
} from "./data/data";

const App = () => {
   return (
      <>
         <main className="flex flex-col gap-16 relative">
            <Cart />
            <Nav />
            <Hero heroapi={heroapi} />
            <Sales endpoint={popularsales} isExist />
            <FlexContent endpoint={highlight} isReverse />
            <Sales endpoint={toprateslaes} />
            <FlexContent endpoint={sneaker} />
            <Stories stories={story} />
         </main>
         <Footer footerInfo={footerAPI} />
      </>
   );
};

export default App;

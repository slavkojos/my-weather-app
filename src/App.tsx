import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

export const App = () => {
  const [selectedCity, setCity] = useState("london");
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Route path="/" exact render={(props) => <Home {...props} selectedCity={selectedCity} />} />
        <Route path="/search" exact render={(props) => <Search {...props} setCity={setCity} />} />
      </Router>
    </ChakraProvider>
  );
};

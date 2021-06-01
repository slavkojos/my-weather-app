import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
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

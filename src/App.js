import React from "react";
import Products from './components/Products.jsx'
import {ChakraProvider} from '@chakra-ui/react'
const App = () => {
  return <ChakraProvider>
    <Products />
    </ChakraProvider>;
};

export default App;

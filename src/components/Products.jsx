import React from "react";
import AddProduct from './AddProduct';
import { Flex,Grid } from '@chakra-ui/react';
import styles from './box.module.css'
import Product from "./Product";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex className={styles.box}>
      {/* <h1>hi from products</h1> */}
      <AddProduct /> 
      
      <Grid><Product /></Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;

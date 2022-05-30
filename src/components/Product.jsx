import React, { useEffect, useState } from "react";
import {Stack,Image,Text,Tag, Heading, Box, TagLabel} from '@chakra-ui/react'
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  
  const[items,setItems] = useState([])
  const[newItem,setNewItem] = useState("")
  const show=()=>{
    fetch("http://localhost:8080/products",{
      method: 'POST',
    }).then((r)=>r.json()).then((d)=>{
      setItems([...items,d]);
      setNewItem("")
    })
  }
  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then((r)=>r.json())
    .then((d)=>{
      
      setNewItem("")
         
    })
  })
  return (
    <Stack data-cy="product" onClick={show}>
      {items.map((item)=>{
       <div key={item.id}>
         <Image data-cy="product-image" src={item.imageSrc}/>
        <Text data-cy="product-category">{item.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{item.title}</Heading>
        <Box data-cy="product-price">{item.price}</Box>

       </div>
      })}
    </Stack>
  );
};

export default Product;

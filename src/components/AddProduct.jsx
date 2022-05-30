import React from "react";
import { Button,Modal,ModalBody,Input, Select, RadioGroup ,Radio, useDisclosure} from '@chakra-ui/react';
import styles from './btn.module.css'
const AddProduct = () => {
    const{isOpen,onOpen,onClose} = useDisclosure(); 

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} className={styles.btn}>Add Products</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalBody pb={6} >
          <h1>Add New Product</h1>
          <br/>
          <h3>Title</h3>
          <Input data-cy="add-product-title" />
          <br />
          <h3>Category</h3>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <br/>
          <h3>Gender</h3>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <br/>
          <h3>Price</h3>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;

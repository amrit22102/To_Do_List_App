import React from "react";
import { useState } from "react";

import ItemsList from "./ItemsList"

const Content2 = ({items, handleCheck, handleDelete}) => {
  
  return (
    <main>
      {items.length ? (
        <ItemsList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        ></ItemsList>
      
      ) : (
        <p>The list is empty!</p>
      )
}
    </main>
  );
};

export default Content2;

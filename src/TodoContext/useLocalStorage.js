import React from 'react';

function useLocalStorage(itemName, InitialValue){

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(InitialValue);
  
    React.useEffect(() =>{
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem('itemName');
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(InitialValue));
          parsedItem = InitialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        } catch(error){
          setError(error);
        }
      }, 2000);
    });
  
      // Creamos la función en la que actualizaremos nuestro localStorage
    const saveItem = (newItem) => {
      try{
        // Convertimos a string nuestros TODOs
        const stringifiedItem = JSON.stringify(newItem);
        // Los guardamos en el localStorage
        localStorage.setItem('itemName', stringifiedItem);
        // Actualizamos nuestro estado
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export{ useLocalStorage };
import React from "react";

function UselocalStorage(itemName, initalValue) {
  const [item, setItem] = React.useState(initalValue);
  const [loading, setLoading] = React.useState(true); //loading state
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        /* Local storage and state settings */
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } // return value if there is something saved or to load

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [initalValue, itemName]); //Effects
  /* New state*/

  const SaveModifyStateLocalstorage = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }; /* Save adn update all changes in state and localstorage */
  return {
    item,
    SaveModifyStateLocalstorage,
    loading,
    error,
  };
} //custom hookss

export { UselocalStorage };
// localStorage.removeItem('INITIAL-STATE');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('INITIAL-STATE', JSON.stringify(defaultTodos));



const items = [
    { id: 1, title: 'Item 1', body: 'Descripción del Item 1' },
    { id: 2, title: 'Item 2', body: 'Descripción del Item 2' },

  ];
  
  export const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(items), 500);
    });
  };
  
  export const getItemById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = items.find((item) => item.id === Number(id));
        resolve(item);
      }, 500);
    });
  };
  
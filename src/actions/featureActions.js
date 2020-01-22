export const removeItem = item => {
    console.log('actions - remove', item)
    return { type: 'REMOVE_ITEM', payload: item};
  };

export const buyItem = item => {
    console.log('actions - add', item)
    return { type: 'BUY_ITEM', payload: item};
  };
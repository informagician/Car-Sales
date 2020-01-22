export const removeFeature = item => {
    // dispatch an action here to remove an item
  };

export const buyItem = item => {
    console.log('actions', item)
    return { type: 'BUY_ITEM', payload: item};
  };
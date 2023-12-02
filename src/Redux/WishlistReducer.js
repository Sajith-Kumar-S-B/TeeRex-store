import {
    WISHLIST_ITEM,
    DECREASE_ITEM_QUANTITY,
    DELETE_WISHLIST_ITEM,
    INCREASE_ITEM_QUANTITY,
  } from "./WishlistConstant";
  
  const initialState = {
    wishlistData: [],
   
  };
  
  export const WishlistReducer = (store = initialState, { type, payload }) => {
    switch (type) {
      case WISHLIST_ITEM:
        return { ...store, wishlistData: [...addToWishlist(store, payload)] }
      case DELETE_WISHLIST_ITEM:
        return { wishlistData: [...deleteItem(store, payload)] }
      case INCREASE_ITEM_QUANTITY:
        return { wishlistData: [...incrementQuantity(store.cartData,payload)] }
      case DECREASE_ITEM_QUANTITY:
        return { wishlistData: [...decrementQuantity(store.cartData,payload)] }
      default:
        return store;
    }
  };
  
  const deleteItem = (wishlist, id) => {
    let rest_wishlist_data = wishlist.wishlistData.filter((e) => e.id != id);
    console.log("cart after deleting data", wishlist.wishlistData);
    return rest_wishlist_data;
  };
  
  const addToWishlist = (wishlist, item) => {
     if(wishlist.wishlistData){
  
     }
    const temp = wishlist.wishlistData;
    let currentItem = { currentQuantity: 1, ...item };
    console.log("current updated item", currentItem);
    temp.push(currentItem);
    return temp;
  };
  
  const incrementQuantity=(wishlist,id)=>{
  
    return wishlist.filter((e)=>e.id==id?e.currentQuantity++:e)
     
  }
  const decrementQuantity=(wishlist,id)=>{
  
    return wishlist.filter((e)=>e.id==id && e.currentQuantity>1?e.currentQuantity--:e)
     
  }
  
  
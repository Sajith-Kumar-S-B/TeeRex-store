
export const  WISHLIST_ITEM="WISHLIST_ITEM";
export const DELETE_WISHLIST_ITEM="DELETE_WISHLIST_ITEM";

export const  INCREASE_ITEM_QUANTITY="INCREASE_ITEM_QUANTITY";
export const DECREASE_ITEM_QUANTITY="DECREASE_ITEM_QUANTITY";

export const wishlist_item=(payload)=>({type:WISHLIST_ITEM,payload});
export const delete_wishlist_item=(payload)=>({type:DELETE_WISHLIST_ITEM,payload});

export const increase_item_quantity=(payload)=>({type:INCREASE_ITEM_QUANTITY,payload});
export const decrease_item_quantity=(payload)=>({type:DECREASE_ITEM_QUANTITY,payload});


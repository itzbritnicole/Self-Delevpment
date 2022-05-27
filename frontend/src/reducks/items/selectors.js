import {createSelector} from "reselect" ;

const itemSelector=(state)=>state.carts;

export const getItems=createSelector(
    [itemSelector],
    state=>state.list
);
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userAction as setUser} from "../reducer/user.js"
export default function Panier(){
    const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
    return(
        <>
        <div className="banPanier">   
        <h2>Hi {user.firstname}</h2>
        <h3>There are {/*itemCounter*/} items in your basket </h3>
        <button>Clear Basket</button>
        </div>

        Liste d'article dans le panier

        
        
        </>
    )
}
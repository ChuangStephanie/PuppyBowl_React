import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import {useParams} from "react-router-dom"
import AllPlayers from "./AllPlayers"

const SinglePlayer = () => {
    console.log(useParams());
    const {id} = useParams();
 
  
    return (
      <>
        <div>
        HELLO {id}
        </div>
  
      </>
    )
    };

export default SinglePlayer;

//name, breed, status, imageURL
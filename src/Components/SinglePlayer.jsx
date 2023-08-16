import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import {useParams} from "react-router-dom"

const SinglePlayer = () => {
    console.log(useParams());
    const {id} = useParams();
  
    return (
      <>
        <div>
        HELLO
        </div>
  
      </>
    )
}

export default SinglePlayer;
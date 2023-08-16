import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import {useParams} from "react-router-dom"
import AllPlayers from "./AllPlayers"

const SinglePlayer = () => {
    const [player, setPlayer] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useParams();
  
    useEffect(() => {
      async function getSinglePlayer() {
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
          setPlayer(APIResponse.data.players);
        } else {
          setError(APIResponse.error.message);
        }
      }
      getSinglePlayer();
    }, []);

    const playerToDisplay = player.id

// const SinglePlayer = () => {
//     console.log(useParams());
//     const {id} = useParams();
 
  
    return (
      <>
        <div>
            {playerToDisplay}
        <h4>{id}</h4>
        </div>
  
      </>
    )
    };



export default SinglePlayer;

//name, breed, status, imageURL
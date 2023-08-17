import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import SinglePlayer from "./SinglePlayer.jsx";
import DeletePlayer from "./DeletePlayer.jsx"; // Import the DeletePlayer component
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players;

  const handlePlayerDelete = (playerId) => {
    setPlayers(players.filter((player) => player.id !== playerId));
  };

  const SeeDetails = () => {
    const path = "./SinglePlayer";
    navigate(path);
  };

  return (
    <>
      <div>
        <label>
          Search
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </label>
      </div>

      {playersToDisplay.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <button className="seeDetails" onClick={SeeDetails}>
            See Details
          </button>
          <DeletePlayer playerId={player.id} onDelete={handlePlayerDelete} />
        </div>
      ))}
    </>
  );
}

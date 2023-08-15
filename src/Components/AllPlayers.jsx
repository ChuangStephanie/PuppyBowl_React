import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");

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
    ? players.filter(player => 
        player.name.toLowerCase().include(searchParam)) 
        : players;

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

            {playerplayersToDisplay.map((player) => {
                return <h3 key={player.id}>{player.name}</h3>;
            })}
        </>
    )

}
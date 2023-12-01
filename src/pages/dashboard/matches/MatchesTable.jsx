import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

import { getMyTimePlaces, getTimePlaceMatches, getMyMatches, getTimePlaceChats } from "../../../api";
import { appPath } from "../../../api/paths";
import useToken from "../../../auth/Token";

export function MatchesTable(){
    const [matchData, setMatchData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (matchData !== undefined){
            setLoaded(true)
        }
    }, [matchData])

    
    useEffect(() => async () => {
    if (loaded) {return};
        const { error, status, data} = await getMyMatches();
        if (error) {
            redirect(
                appPath.error.concat(status.toString())
            )
        } 
        setMatchData([...data.results, ...matchData]);
    }, []);


    return (
        <div className="Matches columnContainer">
        <div className="Matches-Container">
            <div className="Matches-Content ">
            <div className="Matches-Content-Header">
                <span>Match1</span>
                <span>Location</span>
            </div>
            <button className="Matches-button button Column-button Home-button">
                Match Details
            </button>
            <button className="Chat-button button2 Column-button About-button">
                Chat
            </button>
            </div>
        </div>
        </div>
    );
    }

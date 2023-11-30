import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

import { getMyTimePlaces, getTimePlaceMatches, getMyMatches } from "../../../api";
import { appPath } from "../../../api/paths";
import useToken from "../../../auth/Token";

function TimePlaceData({
  id,
  start,
  end,
  latitude,
  longitude,
  city,
  description,
  possibleMatches,
  activeChats,
}) {
  const [tpMatchData, setTpMatchData] = useState([]);
  const [tpMatchCount, setTpMatchCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  //const SLICE_AT = 7: todo use backends paginaton
  useEffect(() => {
      if (tpMatchData !== undefined){
          setLoaded(true)
      }
  }, [tpMatchData])

  
  useEffect(() => async () => {
  if (loaded) {return};
      const { error, status, data} = await getTimePlaceMatches(id);
      if (error) {
          redirect(
              appPath.error.concat(status.toString())
          )
      } 
      setTpMatchData([...data.results, ...tpMatchData]);
      setTpMatchCount(data.count);
  }, []);

  
  return (
    <tr>
      <td>{tpMatchCount}</td>
      <td>{activeChats}</td>
      <td>{id}</td>
      <td>{city}</td>
      <td>{new Date(start).toLocaleString("de")}</td>
      <td>{new Date(end).toLocaleString("de")}</td>
      <td>{description}</td>
    </tr>
  );
}

export function TimePlaceTable() {
    const [tpData, setTpData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    //const SLICE_AT = 7: todo use backends paginaton
    useEffect(() => {
        if (tpData !== undefined){
            setLoaded(true)
        }
    }, [tpData])

    
    useEffect(() => async () => {
    if (loaded) {return};
        const { error, status, data} = await getMyTimePlaces();
        if (error) {
            redirect(
                appPath.error.concat(status.toString())
            )
        } 
        setTpData([...data.results, ...tpData]);
    }, []);


    const [matchesData, setMatchesData] = useState([]);
    const [matchesloaded, setMatchesLoaded] = useState(false);
    useEffect(() => {
        if (matchesData !== undefined){
            setMatchesLoaded(true)
        }
    }, [matchesData])

    
    useEffect(() => async () => {
    if (matchesloaded) {return};
        const { error, status, data} = await getMyMatches();
        if (error) {
            redirect(
                appPath.error.concat(status.toString())
            )
        } 
        setMatchesData([...data.results, ...matchesData]);
    }, []);

    useEffect(() => {
      if ((loaded && matchesloaded)){
      console.log(tpData)
      const _matchData = tpData.map((timeplace) => {
        console.log(timeplace)
        const _tpMatches = matchesData.find((match) => {
          return timeplace.id === match.own_timeplace.id
        })
        return {...timeplace, matchcount: _tpMatches.length}
      })
      console.log(_matchData)
    }
    }, [loaded, matchesloaded]);
    

  return (
    <table className="Dashboard-table">
      <thead>
        <tr>
          <th>Possible Matches</th>
          <th>Active Chats</th>
          <th>Timeplace</th>
          <th>Location</th>
          <th>Start</th>
          <th>End</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {loaded ? (
          tpData.map((item) => <TimePlaceData key={item.id} {...item} />)
        ) : (
          <tr>
            <td colSpan="7">Loading...</td> {/* Ensure proper colspan */}
          </tr>
        )}
      </tbody>
    </table>
  );
}

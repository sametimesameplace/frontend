import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

import { getMyTimePlaces } from "../../../api";
import { appPath } from "../../../api/paths";
import useToken from "../../../auth/Token";

function TimePlaceData({
  id,
  start,
  end,
  latitude,
  longitude,
  description,
  possibleMatches,
  activeChats,
}) {
  return (
    <tr>
      <td>{possibleMatches}</td>
      <td>{activeChats}</td>
      <td>{id}</td>
      <td>{`${latitude}, ${longitude}`}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>{description}</td>
    </tr>
  );
}

export function TimePlaceTable() {
    const [tpData, setTpData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    //const SLICE_AT = 7: todo use backends paginaton
    const { token } = useToken();
    useEffect(() => {
        if (tpData !== undefined){
            setLoaded(true)
        }
    }, [tpData])

    

    useEffect(() => async () => {
    if (loaded) {return};
        const { error, status, data} = await getMyTimePlaces(token);
        if (error) {
            redirect(
                appPath.error.concat(status.toString())
            )
        } 
        setTpData([...data.results, ...tpData]);
    }, []);
    

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

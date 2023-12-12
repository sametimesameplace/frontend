import React from "react";

import { TimePlaceTable } from "./TimePlaceTable";
import { AddTimePlaceButton } from "./AddTimePlaceButton";
import { AddTimePlaceForm } from "./AddTimePlaceForm";

export function TimePlace() {
    /* main dashbooard content component */

    return (
            <div className="TimePlace-Container">
              <TimePlaceTable />
              <AddTimePlaceButton />
              <AddTimePlaceForm />
            </div>
    )
}

import React from "react";
import { TriggerNames } from "../constants";

export default function TriggerForm({ trigger }) {
  return (
    <div className="mb-5">
      {trigger.id === TriggerNames.ACCOUNT && (
        <>
          <input type="text" placeholder="address here" name="trigger" />
        </>
      )}
    </div>
  );
}

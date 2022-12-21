import { Input } from "components/common/Input";
import React from "react";
import { TriggerNames, TriggerOptionType } from "../constants";

type TriggerFormProps = {
  trigger: TriggerOptionType;
};

export default function TriggerForm({ trigger }: TriggerFormProps) {
  return (
    <div className="mb-20">
      {trigger.id === TriggerNames.ACCOUNT && (
        <>
          <Input placeholder="Input address here" name={trigger.name} />
        </>
      )}
      {trigger.id === TriggerNames.CRON && (
        <>
          <Input placeholder="Input cron here" name={trigger.name} />
        </>
      )}
    </div>
  );
}

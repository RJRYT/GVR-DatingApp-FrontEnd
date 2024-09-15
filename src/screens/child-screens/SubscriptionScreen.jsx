import React, { useState } from "react";
import SubscriptionHead from "../../components/Admin/subscription/SubscriptionHead";
import SubscriptionTable from "../../components/Admin/subscription/SubscriptionTable";
import SubscriptionAdd from "../../components/Admin/subscription/SubscriptionAdd";
import { TopBar } from "../../components/Admin";

function SubscriptionScreen() {
  const [addValue, setAddValue] = useState(false);
  return (
      <div className=" w-full h-screen">
        <div className={`grid gap-10 ${addValue ? "blur-lg" : ""}`}>
          <SubscriptionHead setValue={setAddValue} />
          <SubscriptionTable />
        </div>
        {addValue && (
          <div className="w-full absolute top-10 ">
            <SubscriptionAdd setValue={setAddValue} />
          </div>
        )}
      </div>
  );
}

export default SubscriptionScreen;
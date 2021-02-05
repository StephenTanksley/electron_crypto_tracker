import React from "react";
import { Timeline } from "react-twitter-widgets";

export const Ethereum = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "ethereum",
        }}
        options={{
          width: "350",
          height: "680",
        }}
      />
    </div>
  );
};

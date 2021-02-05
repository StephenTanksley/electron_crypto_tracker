import React from "react";
import { Timeline } from "react-twitter-widgets";

export const BBCAfrica = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "BBCAfrica",
        }}
        options={{
          width: "350",
          height: "680",
        }}
      />
    </div>
  );
};

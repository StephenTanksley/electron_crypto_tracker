import React from "react";
import { Timeline } from "react-twitter-widgets";
import { TwitterContainer } from "../../Styles/styled";

export const Newsfeeds = () => {
  return (
    <div>
      <TwitterContainer>
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
      </TwitterContainer>
    </div>
  );
};

import React from "react";
import TopActionsBlck from "./TopActionsBlck";
import Feedback from "./Feedback";

function Main() {
  return (
    <main className="flex-1">
      <TopActionsBlck />
      <div className="main">
        <Feedback />
      </div>
    </main>
  );
}

export default Main;

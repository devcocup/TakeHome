import type { FC } from "react";
import { IAgent } from "../../types/Agent";
import { history } from "../../utils/history";

import './Agent.css'

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  const goToDetails = () => {
    history.push(
      "/detail",
      { agent },
    )
  }

  return (
    <div className="container" onClick={goToDetails}>
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Agent;

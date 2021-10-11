import type { FC } from "react";
import { useLocation } from "react-router";
import { IAgent } from "../../types/Agent";
import { history } from "../../utils/history";

import './styles.css'

interface stateType {
    agent: IAgent
}

const AgentDetail: FC = () => {
    const { state } = useLocation<stateType>();
    const agent = state.agent;
    
    const goToBack = () => {
        history.goBack()
    }
  
    return (
        <div className="agent-detail-container">
            <img src={agent.photoUrl} className="agent-avatar" alt={agent.firstName} />
            <div className="agent-info">
                <h2>{agent.firstName + " " + agent.lastName}</h2>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Address:</p>
                    <span>{agent.address}</span>
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Areas of Practics:</p>
                    <span>{agent.practiceAreas}</span>
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Licence:</p>
                    <span>{agent.agentLicence}</span>
                </div>
                <div>
                    <p className="agent-info-item-label">About me:</p>
                    <span>{agent.aboutMe}</span>
                </div>
            </div>
            <div className="back" onClick={goToBack}><p className="back-label">Back</p></div>
        </div>
    );
};

export default AgentDetail;

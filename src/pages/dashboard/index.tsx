import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "../../components/Agent/Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './styles.css'
import { Link } from "react-router-dom";

const Dashboard: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [originalAgents, setOriginalAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
      setOriginalAgents(response.data);
      setLoading(false);
    }
    fetchInitialData();
  }, []);

  const isRightAgent = (areas: string[] | string, str: string): boolean => {
    if (typeof areas === "string") {
      areas = areas.split(",")
    }
    const flag =  areas.some(i => i.toLowerCase().includes(str.toLowerCase()))
    return flag
  }

  const filterAgents = (e: any) => {
    const str: string = e.target.value;
    setQuery(str);
    const filteredAgents = originalAgents.filter((i: IAgent) => isRightAgent(i.practiceAreas, str))
    setAgents(filteredAgents)
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Agents</h1>
        <div className="search">
          <input value={query} type="text" className="search-text" onChange={filterAgents} />
          <div className="add-agent">
            <Link to='/create' className="add-agent-text">Join the team!</Link>    
          </div>
        </div>
      </header>

      <div className="body">
      {
        loading ? (
          <div className="loader" />
        ) : (
          <div>
          {
            agents.map((agent) => (
              <Agent key={agent.id} agent={agent} />
            ))
          }
          </div>
        )
      }
      </div>
    </div>
  );
};

export default Dashboard;

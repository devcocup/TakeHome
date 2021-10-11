import axios from "axios";
import { FC, useState } from "react";
import { useLocation } from "react-router";
import { IAgent } from "../../types/Agent";
import { history } from "../../utils/history";

import './styles.css'

const CreateAgent: FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [photoURL, setPhotoURL] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [practics, setPractics] = useState<string>("");
    const [licence, setLicence] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    
    const goToBack = () => {
        history.goBack()
    }

    const save = () => {
        const items = [firstName, lastName, address, practics, licence, description, photoURL];
        const inValid = items.some(i => i.length === 0)
        if (inValid) {
            alert("Please fill all fields to join the team.");
            return;
        }
        axios.post('/agent', {
            firstName,
            lastName,
            photoUrl: photoURL,
            agentLicence: licence,
            address,
            practiceAreas: practics,
            aboutMe: description
        }).then((res) => {
            console.log(res);
            history.goBack()
        })
        
    }
  
    return (
        <div className="create-agent-container">
            <div className="toolbar">
                <div className="button cancel" onClick={goToBack}>
                    <p className="button-text">Back</p>    
                </div>
                <div className="button save" onClick={save}>
                    <p className="button-text">Save</p>    
                </div>
            </div>
            <div className="body">
                <div className="agent-info-item">
                    <p className="agent-info-item-label">First Name:</p>
                    <input value={firstName} className="agent-info-input" onChange={(e: any) => {
                        setFirstName(e.target.value);
                    }} />
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Last Name:</p>
                    <input value={lastName} className="agent-info-input" onChange={(e: any) => {
                        setLastName(e.target.value);
                    }}/>
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Photo:</p>
                    <input className="agent-info-input" type="file" accept="image/*" onChange={(e: any) => {
                        if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setPhotoURL(URL.createObjectURL(file));
                        }
                    }} />
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Address:</p>
                    <input value={address} className="agent-info-input" onChange={(e: any) => {
                        setAddress(e.target.value);
                    }} />
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Licence:</p>
                    <input value={licence} className="agent-info-input" onChange={(e: any) => {
                        setLicence(e.target.value);
                    }} />
                </div>
                <div className="agent-info-item">
                    <p className="agent-info-item-label">Areas of Practics:</p>
                    <input value={practics} className="agent-info-input" onChange={(e: any) => {
                        setPractics(e.target.value);
                    }} />
                </div>
                <div>
                    <p className="agent-info-item-label">Description:</p>
                    <textarea value={description} className="about-me" onChange={(e: any) => {
                        setDescription(e.target.value);
                    }} />
                </div>
            </div>
        </div>
    );
};

export default CreateAgent;

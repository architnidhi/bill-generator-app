import React, { useState } from 'react';
import "./selectPlan.css";
import { BsJoystick } from "react-icons/bs";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

function SelectPlan({getUserPlans, goToSummaryPage, hidePlanDiv, getInfoDiv}) {

    let switchVal = document.querySelector('.toggle-switch');
    
    const [arcadeActive, setArcadeActive] = useState(false);
    const [advancedActive, setAdvancedActive] = useState(false);
    const [proActive, setProActive] = useState(false);
    const [toggle, setToggle] = useState('');
    
    const [plan, setPlan] = useState('');
    const [amount, setAmount] = useState('');
    
    function arcadeClickHandler(e) {
        setArcadeActive(true);
        setPlan("Arcade");
        if(toggle) {
            setAmount("$49/yr");
        } else {
            setAmount("$9/Mo");
        }
    }

    function advancedClickHandler() {
        setAdvancedActive(true);
        setPlan("Advanced");
        if(toggle) {
            setAmount('$69/Yr');
        } else {
            setAmount('$12/Mo');
        }
    }

    function proClickHandler() {
        setProActive(true);
        setPlan("Pro");
        if (toggle) {
            setAmount("$90/Yr");
        } else {
            setAmount("$15/Mo");
        }
    }

    function nextStepClickHandler() {
        getUserPlans({
            clientPlan: plan,
            clientAmount: amount
        })
        goToSummaryPage(true);
        hidePlanDiv(false);
    }

    function goBackHandler() {
        console.log("Hello from the plan");
        hidePlanDiv(false);
        getInfoDiv(false);
        
    }

    return (
        <div className='select-plan-div'>
            <div className='select-plan-heading'>
                <p className='select-plan-Htext'>Select your plan</p>
                <p className='select-plan-Stext'>You have the option of monthly or yearly billing</p>
            </div>
            <div className="card-group">
                <div className="card main-card" style={{backgroundColor: arcadeActive ?  "#DADADA" : 'transparent'}} onClick={arcadeClickHandler}>
                    <div className="card-body">
                        <div className='plan-icon joy-stick'>
                            <BsJoystick />
                        </div>
                        <div className='text-keeper'>
                            <h5 className="card-title">Arcade</h5>
                            <p className="card-text">{ toggle ? "$49/Yr" : "$9/Mo"}</p>
                        </div>
                    </div>
                </div>
                <div className="card main-card" style={{backgroundColor: advancedActive ?  "#DADADA" : 'transparent'}} onClick={advancedClickHandler}>
                    <div className="card-body">
                        <div className='plan-icon flat-pad'>
                            <VideogameAssetIcon />
                        </div>
                        <div className="text-keeper">
                            <h5 className="card-title">Advanced</h5>
                            <p className="card-text">{ toggle ? "$69/Yr" : "$12/Mo"}</p>
                        </div>
                    </div>
                </div>
                <div className="card main-card" style={{backgroundColor: proActive ?  "#DADADA" : 'transparent'}} onClick={proClickHandler}>
                    <div className="card-body">
                        <div className='plan-icon gamepad'>
                            <SportsEsportsIcon />
                        </div>
                        <div className="text-keeper">
                            <h5 className="card-title">Pro</h5>
                            <p className="card-text">{ toggle ? "$90/Yr" : "$15/Mo"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="toggle-div">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Monthly</Typography>
                    <Switch  inputProps={{ 'aria-label': 'ant design' }} onChange={e => {
                        setToggle(e.target.checked);
                    }} />
                    <Typography>Yearly</Typography>
                </Stack>
            </div>
            <div className='sec-div'>
                <button className='btn' onClick={goBackHandler}>Go Back</button>
                <button type="button" className="btn btn-dark" onClick={nextStepClickHandler}>Next step</button>
            </div>
        </div>
    )
}

export default SelectPlan;

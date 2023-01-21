import React, { useState } from 'react';
import Summery from '../components/summary/Summary';
import SelectPlan from '../components/plan/SelectPlan';
import GetInfo from '../components/getInfo/GetInfo';
import "./home.css";

function Home() {

    const [getUserDetails, setGetUserDetails] = useState({});
    const [getUserPlan, setGetUserPlan] = useState({});
    const [getInfoDiv, setGetInfoDiv] = useState(false);
    const [selectPlanDiv, setSelectPlanDiv] = useState(false);
    const [summaryDiv, setSummaryDiv] = useState(false);    
    

    console.log(`plan: ${getUserPlan.clientPlan} and amount: ${getUserPlan.clientAmount}`)

    const userDetails = {
        name: getUserDetails.name,
        eMail: getUserDetails.eMail,
        phone: getUserDetails.phone,
    }

    const userPlan = {
        plan: getUserPlan.clientPlan,
        amount: getUserPlan.clientAmount,
    }

    console.log(`Clients Name: ${userDetails.name}, Email: ${userDetails.eMail}, Phone: ${userDetails.phone} `)
    
    const asidePointselected = {
        backgroundColor: "#BCE0F6",
        color: "#072A4A"
    }

    const asidePointDisSelected = {
        backgroundColor: "#483EFF",
        color: "white"
    }

    return (
        <div className='container home-div'>
            <aside className='leftSide-div'>
                <div>
                    <p className='num' style={!getInfoDiv ? asidePointselected : asidePointDisSelected}>1</p>
                    <p className='steps'>STEP 1</p>
                    <p className='desc'>YOUR INFO</p>
                </div>
                <div>
                    <p className='num-div-two' style={selectPlanDiv ? asidePointselected : asidePointDisSelected}>2</p>
                    <p className='steps-div-two'>STEP 2</p>
                    <p className='desc-div-two'>SELECT PLAN</p>
                </div>
                <div>
                    <p className='num-div-three' style={summaryDiv ? asidePointselected : asidePointDisSelected}>3</p>
                    <p className='steps-div-three'>STEP 3</p>
                    <p className='desc-div-three'>SUMMARY</p>
                </div>
            </aside>
            {!getInfoDiv ? <GetInfo getUserDetail={setGetUserDetails} goToNextpage={setSelectPlanDiv} hideInfoDiv={setGetInfoDiv}  /> : "" }
            {selectPlanDiv ? <SelectPlan  getUserPlans={setGetUserPlan} goToSummaryPage={setSummaryDiv} hidePlanDiv={setSelectPlanDiv} getInfoDiv={setGetInfoDiv} />: ''}
            {summaryDiv ? <Summery clientName={userDetails.name} clientEmail={userDetails.eMail} clientPhone={userDetails.phone} clientAmt={userPlan.amount} clientPlan={userPlan.plan} goToSummaryPage={setSummaryDiv} hidePlanDiv={setSelectPlanDiv} /> : ''}
            {/* <SelectPlan />  */}
        </div>
    )
}

export default Home

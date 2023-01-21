import React from 'react';
import "./summary.css";

function Summary(props) {

    function goBackHandler() {
        props.goToSummaryPage(false);
        props.hidePlanDiv(true);
    };

    return (
        <div className='summary-div'>
            <div className='summary-heading'>
                <p className='summary-Htext'>Summary</p>
            </div>
            <div className='summary-details'>
                <p className='summary-pTag'>Name: {props.clientName}</p>
                <p className='summary-pTag'>Email: {props.clientEmail}</p>
                <p className='summary-pTag'>Phone: {props.clientPhone}</p>
                <p className='summary-pTag'>Plan: {props.clientPlan}</p>
                <p className='summary-pTag'>Total: {props.clientAmt}</p>
                <hr />
                <div className='summary-total'>
                    <p className='summary-grandTotal'>GrandTotal</p>
                    <p>{props.clientAmt}</p>
                </div>
            </div>
            <div className='sec-div'>
                <button className='btn' onClick={goBackHandler}>Go Back</button>
                <button type="button" className="btn btn-dark">Pay now</button>
            </div>
        </div>
    )
}

export default Summary

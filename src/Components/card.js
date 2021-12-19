import React from 'react'

const Card = (props) => {
    return (
        <div className="card text-start" style={{ width: "18rem", boxShadow: "2px 2px 7px lightGreen", margin: "20px" }}>
            <div className="card-body" style={{ backgroundColor: "rgb(199,299,199)" }}>
                <p className="card-title"><b>Name:</b> {props.name}</p>
                <p className="card-title"><b>Father Name:</b> {props.fname}</p>
                <p className="card-title"><b>CNIC No:</b> {props.CNIC}</p>
                <p className="card-title"><b>DOB:</b> {props.dob}</p>
                <p className="card-title"><b>No of family members:</b> {props.no}</p>
                <p className="card-title"><b>Applicant monthly income:</b> {props.income}</p>
                <p className="card-title"><b>Help category:</b> {props.help}</p>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between", margin: "15px" }}>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: "#228B22", border: "none" }}>Approve</a>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: "#228B22", border: "none" }}>Reject</a>
                </div>
            </div>
        </div>
    )
}

export default Card;

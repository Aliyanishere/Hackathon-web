import React from 'react'
import Card from "../../Components/card"
import { useNavigate } from "react-router-dom"


const Request = () => {
    let navigate = useNavigate();
    return (
        <div className='container'>
            <h4 style={{ textDecoration: "underline", cursor: "pointer" }} onClick={()=>navigate("/seeAll")}>See All Requests</h4>

            <div className='d-flex flex-wrap' style={{ justifyContent: "space-between" }}>
                <Card name="Nawaz Uddin" fname="Shah Nawaz" CNIC="12345-6715495-8" dob="08-05-2003" no="6" income="15000" help="Monthly Ration" />
                <Card name="Ubaid Ullah" fname="Shahid" CNIC="18765-6565695-5" dob="23-03-1983" no="8" income="20000" help="Monthly Ration" />
                <Card name="Sufyan Jumani" fname="Razaq" CNIC="35416-4836127-0" dob="03-08-1967" no="3" income="10000" help="1" />
                <Card name="Ali Raza" fname="Abdullah" CNIC="14365-6565695-3" dob="02-10-1953" no="4" income="25000" help="2" />
                <Card name="Mubashir" fname="Amla" CNIC="32157-7463215-4" dob="30-12-1943" no="5" income="30000" help="Monthly Ration" />
                <Card name="Nawaz Uddin" fname="Shah Nawaz" CNIC="12345-6715495-8" dob="08-05-2003" no="6" income="15000" help="Monthly Ration" />
                <Card name="Ubaid Ullah" fname="Shahid" CNIC="18765-6565695-5" dob="23-03-1983" no="8" income="20000" help="Monthly Ration" />
                <Card name="Sufyan Jumani" fname="Razaq" CNIC="35416-4836127-0" dob="03-08-1967" no="3" income="10000" help="1" />
                <Card name="Ali Raza" fname="Abdullah" CNIC="14365-6565695-3" dob="02-10-1953" no="4" income="25000" help="2" />
                <Card name="Mubashir" fname="Amla" CNIC="32157-7463215-4" dob="30-12-1943" no="5" income="30000" help="Monthly Ration" />
            </div>
        </div>
    )
}

export default Request;
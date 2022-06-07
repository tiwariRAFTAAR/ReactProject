import React, { useEffect } from "react";
import './covid.css';


const Covid = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.jason()
            // console.log(acctualData.statewise[0]);
        }catch (err){
            console.log(err);
        }
    }


    useEffect(() => {
       // getCovidData();
    }, []);

    return (
        <>
        <section>
            <h1>🔴 LIVE</h1>
            <h2>Covid-19 Coronavirus Tracker</h2>

            <ul>
                <li className="card">
                    <div className="card_main">
                        <div className="card-inner">
                            <p className="card-name"><span>Our</span>Country</p>
                            <p className="card-total card-small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card-inner">
                            <p className="card-name"><span>Total</span>Recoverd</p>
                            <p className="card-total card-small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card-inner">
                            <p className="card-name"><span>Total</span>Country</p>
                            <p className="card-total card-small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card-inner">
                            <p className="card-name"><span>Total</span>Country</p>
                            <p className="card-total card-small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card-inner">
                            <p className="card-name"><span>Total</span>Country</p>
                            <p className="card-total card-small">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card_main">
                        <div className="card-inner">
                            <p className="card-name"><span>Last</span>Country</p>
                            <p className="card-total card-small">INDIA</p>
                        </div>
                    </div>
                </li>
            </ul>
         </section>
        </>
    )
}

export default Covid
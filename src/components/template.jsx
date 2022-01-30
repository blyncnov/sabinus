import React from 'react';
import Picture from "../img/sab8.png"

const Template = () => {
    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="image__container">
                        <img src={Picture} alt="sabinus" />
                    </div>
                    <div className="text__container">
                        <h1 style={{ textAlign: 'center' }}>70yrs Old Man </h1>
                        <br />
                        <p style={{ textAlign: 'center' }}>Bros ..... Good Afternoon oh, how is the family?  <br />
                            Happy Birthday MrFunny , Age with sufficient grace .
                        </p>
                    </div>
                    <div className="btn__style">
                        <button className="btn" style={{ textAlign: 'center' }}>Get Something Hooge</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="footer">
                        <h6 style={{ textAlign: 'center' }}>Designed by Blyncnov</h6>
                        <br />
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Template;

import React, { useState } from 'react';
import { Table } from '../Table';
//import DatePicker from 'react-datepicker';

//The feature method enables dropdown and then displays table data 

export function Feature(props) {
    const { parseCrimeData } = props;

    const [county, setCounty] = useState('');


    const optionElems = props.crimeOptions.map((crime) => {
        return <option key={crime} value={crime}>{crime}</option>
    })

    function countyCallBack(event) {
        setCounty(event.target.value);
    }



    return (

        <div className="bg-dark">
            <section id="top">
                <img src={"img/pier.jpg"} alt="Seattle pier 56"
                    title="Image by Ally Laws from Pixabay" className="header-img" />
            </section>
            <section id="section-0" class="container bg-dark">
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <h1 className="display-4 ">&#x1F4C8; Table Analysis</h1>
                    <p className="lead">Analysis of collected and organized crime information within
                        Seattle range</p>
                </div>
            </section>
            <div className="p-5">
                <h1>Search Crimes</h1>
                <h2>Enter name of counties or date to see crimes</h2>

                <label htmlFor="county_form">Enter County:</label>

                <select className="form-select" id="countySelect" placeholder="Enter County"
                    onChange={countyCallBack} value={county}>
                    <option value=''>Show all counties</option>
                    {optionElems}
                </select>
                <Table parseCrimeData={parseCrimeData} county={county} />
                
            </div>
        </div>
    );

}
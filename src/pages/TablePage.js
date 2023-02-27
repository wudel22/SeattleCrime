import React, { useState, useEffect } from 'react';
import { Table } from '../Table';
//import DatePicker from 'react-datepicker';

export function Feature(props) {
    const { parseCrimeData, gotData } = props;

    const dates = parseCrimeData.map((crime) => {
        return crime["report_datetime"]
    });

    /*let onlyDate = dates.map((date) =>{
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let formatDate = `${day}-${month}-${year}`;
        return formatDate
    })

    console.log(onlyDate)


    let recentDate = new Date(Math.max(...onlyDate));
    console.log(recentDate); */

    const [county, setCounty] = useState('');

    const [date, setDate] = useState(new Date());

    const optionElems = props.crimeOptions.map((crime) => {
        return <option key={crime} value={crime}>{crime}</option>
    })

    function countyCallBack(event) {
        setCounty(event.target.value);
    }

    function dateCallBack(event) {
        setDate(event.target.value);
    }

    function buttonCallBack() {
        props.applyFilterCallBack(county, date);
    }

    return (

        <div className="bg-dark">
            <section id="top">
                <img src={"img/pier.jpg"} alt="Seattle pier 56"
                    title="Image by Ally Laws from Pixabay" className="header-img" />
            </section>
            <section id="section-0" class="containe bg-dark">
                <div className="jumbotron jumbotron-fluid bg-dark text-light">
                    <h1 className="display-4 ">&#x1F4C8; Table Analysis</h1>
                    <p className="lead">Analysis of collected and organized crime information within
                        Seattle range</p>
                </div>
            </section>
            <div className="container">
                <h1>Search Crimes</h1>
                <h2>Enter name of counties or date to see crimes</h2>

                <label htmlFor="county_form">Enter County:</label>

                <select className="form-select" id="countySelect" placeholder="Enter County"
                    onChange={countyCallBack} value={county}>
                    <option value=''>Show all counties</option>
                    {optionElems}
                </select>


                {/* <label htmlFor="date_form">Enter Date:</label>
                <form id="date_form">
                    <DatePicker
                        showIcon
                        selected= {date}
                        onChange={dateCallBack}/>
                </form> */}

                <Table parseCrimeData={parseCrimeData} county={county} date={date} />
            </div>

            {/* <div className="row"></div>
            <div className="col-md-12"></div> */}
        </div>
    );

}
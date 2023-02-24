import React, {useState} from 'react';
import {Table} from './Table';
import DatePicker from 'react-datepicker';

export function Feature(props){
    const {parseCrimeData} = props;
    const [county, setCounty] = useState('');
    const [date, setDate] = useState(new Date());

    const optionElems = props.crimeOptions.map((crime) => {
        return <option key={crime} value={crime}>{crime}</option>
    })

    function countyCallBack(event){
        setCounty(event.target.value);
    }

    function dateCallBack(event){
        setDate(event.target.value);
    }

    function buttonCallBack(){
        props.applyFilterCallBack(county, date);
    }

    return(
        <div class="bg-secondary">
        <div class="container"></div>
        <div class="row"></div>
        <div class="col-md-12"></div>
        <h1>Search Crimes</h1>
        <h2>Enter name of counties or date to see crimes</h2>

        <label for="county_form">Enter County:</label>
  
            <select className="form-select" id="countySelect" placeholder="Enter County" 
                    onChange={countyCallBack} value={county}>
                    <option value=''>Show all counties</option>
                    {optionElems}
            </select>


        <label for="date_form">Enter Date:</label>
        <form id="date_form">
            <input class="form-control" id="date-input" placeholder="Enter date"/>
            <DatePicker
                showIcon
                selected={date}
                onChange={dateCallBack}/>
        </form>

       <Table parseCrimeData={parseCrimeData} county={county} date={date}/>
    </div>
    );

}
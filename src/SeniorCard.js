import React from 'react';
import seniorQuote from './SeniorQuote.js';
import seniorPhoto from './SeniorPhoto.js';
import Honors from './Honors.js';

function seniorCard() {
    let data = {
        "photo":[{
          "pic":  "" }],
         "name": [{ 
             "title": "Susan"}],
         "quote": [{
             "id": "Be yourself"}],
         "honors": [{
             "Answer": "Yes"}]


    }

  return (
   
        <div>
            <ul>
                <li>{data.photo}</li>
                <li><seniorQuote/></li>
                <li><seniorPhoto/></li>
                <li><Honors/></li>
            </ul>
        </div>    
          
  )
 }

export default seniorCard;
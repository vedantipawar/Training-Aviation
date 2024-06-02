import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProcedureDetail.css';
import { startProcedure } from './action.js'; 


const ProcedureDetail = () => {
  const { id } = useParams();
  const [procedure, setProcedure] = useState(null);

  useEffect(() => {
    console.log(`Fetching procedure details for ID: ${id}`);
    axios.get(`http://127.0.0.1:5000/api/procedures/${id}`)
      .then(response => {
        console.log('Fetched data:', response.data);
        setProcedure(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the procedure details!', error);
      });
  }, [id]);

  if (!procedure) {
    return <div>Loading...</div>;
  }

  return (

    <div> 
        <div className='container'>
            <div className='left-container'>
                <h1>Hi</h1>
            </div>
            <div className='right-container'>

                <h1>{procedure.title}</h1>
                <p>{procedure.moreinfo}</p>
                <button class="start-button" onClick={startProcedure}>Start</button>
            </div>
            {/* Render more details about the procedure here */}
        </div>
    </div>
  );
};

export default ProcedureDetail;

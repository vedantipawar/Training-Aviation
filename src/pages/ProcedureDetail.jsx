import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProcedureDetail.css';
import { startProcedure } from './action.js'; 

const ProcedureDetail = () => {
  const { id } = useParams();
  const [procedure, setProcedure] = useState(null);
  const [allProcedures, setAllProcedures] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/procedures')
      .then(response => {
        setAllProcedures(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the procedures!', error);
      });
  }, []);

  const handleStart = () => {
    console.log("Procedure has started!");
    startProcedure();
    navigate('/new-page');
  }

  if (!procedure) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='left-container'>
        {allProcedures.map(proc => (
          <div key={proc.id} className={`procedure-wrapper ${procedure && procedure.id === proc.id ? 'active' : ''}`}>
            <button
              className={`procedure-item ${proc.status === 'complete' ? 'complete' : 'incomplete'}`}
              onClick={() => proc.status === 'complete' && setProcedure(proc)}
              style={{ backgroundImage: `url(${proc.iconUrl})` }}
              disabled={proc.status === 'incomplete'}
            >
              <span className="visually-hidden">{proc.title}</span>
            </button>
            <div className={`procedure-text ${proc.status === 'complete' ? 'text-complete' : 'text-incomplete'}`}>
              <h3>{proc.title}</h3>
              <p>{proc.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='right-container'>
        <h1>{procedure.title}</h1>
        <p>{procedure.moreinfo}</p>
        <button className="start-button" onClick={handleStart}>Start</button>
      </div>
    </div>
  );
};

export default ProcedureDetail;

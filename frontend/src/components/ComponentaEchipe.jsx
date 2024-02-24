import React, { useState, useEffect, useRef } from 'react';
import { checkAuthenticated, load_user } from '../actions/auth';
import { connect } from 'react-redux';
import ButtonAccent2 from './ButtonAccent2';



const EchipeListPage = ({ accessToken, load_user, isAuthenticated, searchTerm, viewMode , lastName}) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    getEchipe();
  }, []);

  const getEchipe = async () => {
    const token = accessToken;
    console.log(token)
    const response = await fetch('http://127.0.0.1:8000/api/echipe/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(token),
      },
    });

    const data = await response.json();
    setTests(data);
    console.log(data)
  };

  const filteredTests = tests.filter((test) => {
    return test && test.nume && test.nume.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const showHistoryRef = useRef(false);


  return (<>


<div className={`cursor-pointer p-4   ${ 'flex flex-col'}`}>
      {filteredTests.map((test, index) => (
        <div key={index} className={` bg-bkg border shadow-lg  border-accent-1 hover:border-accent-3 p-3 border   mb-2 rounded-2xl flex flex-row justify-between items-center}`}>
          <div className={` text-content ${viewMode === 'cards' ? ' mb-4' : ''}`}>
            <h3 className={`font-bold  text-lg mb-2 ${ 'text-content'}`}>{test && test.nume}</h3>
            
           
             
          
              <div className="flex ">
               
                <p className="mr-4 mt-2">Numar jucatori: {test && test.nr_jucatori }</p>
               
         
                <ButtonAccent2    text="detalii"/>
              </div>
            
          </div>
        </div>
      ))}


    </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  firstName: state.auth.user ? state.auth.user.first_name : '',
  lastName: state.auth.user ? state.auth.user.last_name : '',
  userId: state.auth.user ? state.auth.user.id : '',
  accessToken: state.auth.access,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(EchipeListPage);

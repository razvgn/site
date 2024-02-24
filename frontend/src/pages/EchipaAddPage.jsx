import React, { useState,useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import SidebarComp from '../components/SidebarComp';

const EventCreate= ({  isAuthenticated, userId ,accessToken}) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: userId,
    nume: '',
    oras: '',
    antrenor: '',
    nr_jucatori: '',
  
  });

  const { nume,  oras,antrenor,nr_jucatori , user} = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {

    e.preventDefault();
    console.log(formData)
    console.log(accessToken)
      const token = accessToken;
      const response = await fetch('http://127.0.0.1:8000/api/create_echipa/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(token),
        },
        body: JSON.stringify(formData),
      });

  
      const data = await response.json();
      console.log('Success:', data);
      navigate("/echipe")
    

    };

  return (
    <div className="h-full bg-filler min-h-screen">
 
    <SidebarComp />
      <div className="flex-grow p-4  overflow-hidden flex items-start justify-center">
   
              <div className="col-span-2 lg:col-span-3 sm:mt-20 mt-0 bg-bkg text-content rounded-md p-4">
                        <div className=" p-4 ">
                          <h1 className="text-2xl font-bold mb-2">Inregistreaza echipa</h1>
                          <p className=" ">Nume echipa</p>
                          <form onSubmit={(e) => onSubmit(e)} className="">
                            <div className="mb-4 ">
                              <input
                                className="w-full px-8 py-2 border border-gray-300 text-black rounded-md"
                                type="text"
                                placeholder=""
                                name="nume"
                                value={nume}
                                onChange={(e) => onChange(e)}
                                minLength="4"
                                required
                              />
                            </div>
                      <p className=" ">Oras</p>
                      <div className="mb-4">
                        <input
                          className="w-full px-8 py-2 border border-gray-300  text-black rounded-md"
                          type="text"
                          placeholder=""
                          name="oras"
                          value={oras}
                          onChange={(e) => onChange(e)}
                        
                          required
                        />
                      </div>
                      <p className=" ">Antrenor</p>
                      <div className="mb-4">
                        <input
                          className="w-full px-8 py-2 border border-gray-300  text-black rounded-md"
                          type="text"
                          placeholder=""
                          name="antrenor"
                          value={antrenor}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <p className=" ">Numar jucatori:</p>
                      <div className="mb-4">
                        <input
                          className="w-full px-8 py-2 border border-gray-300  text-black rounded-md"
                          type="number"
                          placeholder=""
                          name="nr_jucatori"
                          value={nr_jucatori}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <button className="bg-black text-white hover:bg-yellow-500 px-4 py-2 rounded-md" type="submit">
                        Creeaza echipa
                      </button>
                    </form>
                    
                    
                    
                  </div>
                </div>
            
            </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userId: state.auth.user ? state.auth.user.id : '',
  accessToken: state.auth.access,
}); 

export default connect(mapStateToProps, ) (EventCreate);

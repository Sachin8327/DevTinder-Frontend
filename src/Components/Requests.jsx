import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { removeRequest,addRequests } from '../utils/requestSlice'
import axios from 'axios'
 

const Requests = () => {
  const requests= useSelector((store)=>store.requests);
  const dispatch= useDispatch();


  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review" + "/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRequests= async()=>{
    try{
       const res=await axios.get(BASE_URL+"/user/requests/recieved", {
        withCredentials:true,
       });
       dispatch(addRequests(res.data.data));
    }catch(err){

    }
  }

   useEffect(()=>{
fetchRequests(); 
   },[])

  if (!requests) return null;

  if (requests.length === 0) {
    return (
      <h1 className="flex justify-center text-2xl my-10 text-green-300">
        No Requests found
      </h1>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl text-pink-400">
        Requests ({requests.length})
      </h1>

      {requests.map((request,index) => {
        console.log(request);
           const {_id, firstName, lastName, photoUrl,age,gender,about}=request.fromUserId || {};
        // console.log(user)

        return (
          <div
            key={`${_id}-${index}`} 
            className="flex items-center m-2 p-2 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-14 h-14 rounded-full object-cover"
                src={photoUrl}
              />
            </div>

            <div className="text-left m-4 p-4">
              <h2 className="font-bold text-xl">
                {firstName} {lastName}
              </h2>

              {age &&  gender && (
                <p>
                  {age} {gender}
                </p>
              )}

              <p>{about}</p>
            </div>
            <div className="">
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Requests

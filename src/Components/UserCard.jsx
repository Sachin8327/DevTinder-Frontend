// import React from "react";
// import { useDispatch } from "react-redux";
// import { removeUserFromFeed } from "../utils/feedSlice";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";

// const UserCard = ({ user }) => {
//   const { _id, firstName, lastName, age, gender, about, photoUrl, skills } = user;

//   const dispatch = useDispatch();

//   const handleSendRequest = async (status, userId) => {
//     try {
//       await axios.post(
//         BASE_URL + "/request/send/" + status + "/" + userId,
//         {},
//         {
//           withCredentials: true,
//         }
//       );

//       dispatch(removeUserFromFeed(userId));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="card bg-base-300 w-96 shadow-sm">

//       <div className="card-actions justify-center">
//         <img src={photoUrl} alt="Profile" />
//       </div>

//       <div className="card-body">
//         <h2 className="card-title">
//           {(firstName || "") + " " + (lastName || "")}
//         </h2>

//         {age && gender && <p>{age + ", " + gender}</p>}

//         <p>{about}</p>

//         {skills && skills.length > 0 && (
//           <div>
//             <h3 className="font-semibold">Skills:</h3>

//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg text-sm"
//                 >
//                   {skill.trim()}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="card-actions justify-center my-4">
//           <button
//             className="btn btn-accent"
//             onClick={() => handleSendRequest("ignore", _id)}
//           >
//             Ignore
//           </button>

//           <button
//             className="btn btn-secondary"
//             onClick={() => handleSendRequest("interested", _id)}
//           >
//             Interested
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default UserCard;
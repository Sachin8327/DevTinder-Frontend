// import React, { useState, useEffect } from "react";
// import UserCard from "./UserCard";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";

// const EditProfile = ({ user }) => {
//   // const {firstName,lastName,photoUrl,age,gender,about,skills} = user
//   const [firstName, setFirstname] = useState(user?.firstName);
//   const [lastName, setLastName] = useState(user?.lastName);
//   const [photoURL, setPhotoURL] = useState(user?.photoUrl);
//   const [age, setAge] = useState(user?.age);
//   const [gender, setGender] = useState(user?.gender);
//   const [about, setAbout] = useState(user?.about );
//   const [skills, setSkills] = useState(user?.skills || []);
//   const [error, setError] = useState("");
//   const [showToast, setShowToast] = useState(false);
//   const dispatch = useDispatch();
 
//   // no need of this   
//   // useEffect(() => {
//   //   if (user) {
//   //     setFirstname(user.firstName );
//   //     setLastName(user.lastName);
//   //     setPhotoURL(user.photoUrl);
//   //     setAge(user.age);
//   //     setGender(user.gender);
//   //     setAbout(user.about);
//   //     setSkills(user.skills);
//   //   }
//   // }, [user]);

//   const saveProfile = async () => {
//     setError("");
//     try {
//       const res = await axios.patch(
//         BASE_URL + "/profile/edit",
//         {
//           firstName,
//           lastName,
//           photoUrl: photoURL,
//           age,
//           gender,
//           about,
//           skills,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       dispatch(addUser(res.data.data));
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//       }, 2000);
//     } catch (error) {
//       setError(error?.response?.data?.message || "Something went wrong");
//     }
//   };

  


//   return (
//     <>
//       <div className="flex justify-center  my-10 max ">
//         <div className="flex justify-center mx-10 ">
//           <div className="card bg-base-300 w-96 shadow-xl">
//             <div className="card-body">
//               <h2 className="card-title justify-center">Edit Profile</h2>
//               <div>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">First Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={firstName}
//                     onChange={(e) => setFirstname(e.target.value)}
//                     className="input input-bordered w-full max-w-xs"
//                   />
//                 </label>

//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     className="input input-bordered w-full max-w-xs"
//                   />
//                 </label>

//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Age</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={age}
//                     onChange={(e) => setAge(e.target.value)}
//                     className="input input-bordered w-full max-w-xs"
//                   />
//                 </label>

//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">PhotoURL</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={photoURL}
//                     onChange={(e) => setPhotoURL(e.target.value)}
//                     className="input input-bordered w-full max-w-xs"
//                   />
//                 </label>

//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Gender</span>
//                   </div>
//                   <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn m-1">
//                       {gender || "Select gender"}
//                     </div>
//                     <ul
//                       tabIndex={0}
//                       className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//                     >
//                       <li>
//                         <button onClick={() => setGender("Male")}>Male</button>
//                       </li>
//                       <li>
//                         <button onClick={() => setGender("Female")}>
//                           Female
//                         </button>
//                       </li>
//                       <li>
//                         <button onClick={() => setGender("Others")}>
//                           Others
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 </label>
//                  <div>
//                   <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Skills</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={skills.join(", ")}
//                     onChange={(e) =>
//                       setSkills(
//                         e.target.value.split(",").map((s) => s.trim())
//                       )
//                     }
//                     className="input input-bordered w-full max-w-xs"
//                   />
//                 </label>
//                  </div>

//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">About</span>
//                   </div>
//                   <textarea
//                     placeholder="Bio"
//                     type="text"
//                     value={about}
//                     onChange={(e) => setAbout(e.target.value)}
//                     className="input input-bordered w-full max-w-xs"
//                   ></textarea>
//                 </label>
//               </div>

//               <p className="text-red-500 text-center">{error}</p>

//               <div className="card-actions justify-center  ">
//                 <button className="btn btn-primary" onClick={saveProfile}>
//                   Save Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
 
         
//         <UserCard 
//           user={{
//             firstName: firstName || " ",
//             lastName: lastName || " ",
//             photoUrl: photoURL, 
//             about: about || " ",
//             age,
//             gender,
//             skills,
//           }}
//         />
//         </div>
         
    
//       {/* <UserCard
//           user={{
//             firstName: firstName || "First Name",
//             lastName: lastName || "Last Name",
//             photoURL: photoURL || defaultPhoto,
//             about: about || "No bio available",
//             age,
//             gender,
//             skills,
//           }}
//         />
//       </div> */}

//       {showToast && (
//         <div className="toast toast-top toast-center pt-20 ">
//           <div className="alert alert-success">
//             <span>Profile saved successfully</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditProfile;
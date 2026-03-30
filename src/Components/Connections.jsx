//  import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addConnection, removeConnection } from "../utils/connectionSlice";

// const Connections = () => {
//   const connections = useSelector((store) => store.connection);
//   // console.log(connections);
//   const dispatch = useDispatch();

//   const fetchConnections = async () => {
//     try {
//       dispatch(removeConnection());

//       const res = await axios.get(BASE_URL + "/user/connections", {
//         withCredentials: true,
//       });

//       dispatch(addConnection(res.data.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchConnections();
//   }, []);

//   if (!connections) return null;

//   if (connections.length === 0) {
//     return (
//       <h1 className="flex justify-center text-2xl my-10 text-green-300">
//         No connections found
//       </h1>
//     );
//   }

//   return (
//     <div className="text-center my-10">
//       <h1 className="font-bold text-3xl text-pink-400">
//         Connections ({connections.length})
//       </h1>

//       {connections.map((user, index) => {

//         // console.log(user)

//         return (
//           <div
//             key={`${user._id}-${index}`} 
//             className="flex items-center m-2 p-2 rounded-lg bg-base-300 w-1/2 mx-auto"
//           >
//             <div>
//               <img
//                 alt="photo"
//                 className="w-14 h-14 rounded-full object-cover"
//                 src={user?.photoUrl}
//               />
//             </div>

//             <div className="text-left m-4 p-4">
//               <h2 className="font-bold text-xl">
//                 {user?.firstName} {user?.lastName}
//               </h2>

//               {user?.age && user?.gender && (
//                 <p>
//                   {user.age} {user.gender}
//                 </p>
//               )}

//               <p>{user?.about}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Connections;
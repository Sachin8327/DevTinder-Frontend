// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { removeUser } from "../utils/userSlice";

// const NavBar = () => {
//   const user = useSelector(store => store.user);
//    const navigate = useNavigate();
//   const dispatch = useDispatch();


//   const handleLogout = async () => {
//     try {
//       await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
//       dispatch(removeUser());
//       return navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="navbar bg-base-300 shadow-sm">
//       <div className="flex-1">
//         <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition">
//           DevTinder 🔥
//         </Link>
//       </div>
//       {user && <div className="flex gap-2">
//         <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
//         <div className="dropdown dropdown-end mx-5 flex">
//           {/* cleck ui bad because of below line  */}
//           <p className="px-4">Welcome,{user.firstName}</p>
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img
//                 alt="User Photo"
//                 src={user.photoUrl} />
//             </div>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             <li>
//               <Link to="/profile" className="justify-between hover:bg-gray-800 rounded-md p-2">
//                 Profile <span className="badge badge-success">New</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/connections">Connections</Link>
//             </li>
//             <li>
//               <Link to="/requests">Requests</Link>
//             </li>
//             <li>
//               <a onClick={handleLogout}>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>}
//     </div>





//   );
// }

// export default NavBar;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import Button from '../ui/button';
// import '../styles/user.css';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: 'Admin' | 'Manager' | 'Staff';
// }

// const UsersPage: React.FC = () => {
//   const [users] = useState<User[]>([
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
//     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Staff' },
//   ]);

//   return (
//     <div className="users-page">
//       <h1>Users</h1>
//       <Button onClick={() => alert('Add user clicked')}>Add User</Button>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <span className={`role-badge ${user.role.toLowerCase()}`}>
//                     {user.role}
//                   </span>
//                 </td>
//                 <td>
//                   <Button variant="secondary" size="small" onClick={() => alert(`Edit ${user.name}`)}>
//                     <FaEdit />
//                   </Button>
//                   <Button variant="primary" size="small" onClick={() => alert(`Delete ${user.name}`)}>
//                     <FaTrash />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>
//     </div>
//   );
// };

// export default UsersPage;
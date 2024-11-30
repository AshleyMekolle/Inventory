// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Card from '../ui/card';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import '../styles/inventory.css';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface InventoryItem {
//   id: number;
//   name: string;
//   quantity: number;
//   reorderPoint: number;
// }

// const InventoryPage: React.FC = () => {
//   const [inventory, setInventory] = useState<InventoryItem[]>([
//     { id: 1, name: 'Product A', quantity: 50, reorderPoint: 20 },
//     { id: 2, name: 'Product B', quantity: 30, reorderPoint: 15 },
//     { id: 3, name: 'Product C', quantity: 75, reorderPoint: 25 },
//     { id: 4, name: 'Product D', quantity: 10, reorderPoint: 30 },
//   ]);

//   const chartData = {
//     labels: inventory.map(item => item.name),
//     datasets: [
//       {
//         label: 'Current Quantity',
//         data: inventory.map(item => item.quantity),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//       {
//         label: 'Reorder Point',
//         data: inventory.map(item => item.reorderPoint),
//         backgroundColor: 'rgba(255, 99, 132, 0.6)',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="inventory-page">
//       <h1>Inventory Management</h1>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card title="Inventory Overview">
//           <Bar data={chartData} options={chartOptions} />
//         </Card>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <Card title="Inventory List">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Quantity</th>
//                 <th>Reorder Point</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {inventory.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.reorderPoint}</td>
//                   <td>
//                     <span className={`status-badge ${item.quantity <= item.reorderPoint ? 'low-stock' : 'in-stock'}`}>
//                       {item.quantity <= item.reorderPoint ? 'Low Stock' : 'In Stock'}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default InventoryPage;
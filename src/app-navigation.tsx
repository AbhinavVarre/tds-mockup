import AdminPage from './pages/admin/AdminPage';
import BillingPage from './pages/billing/BillingPage';
import InventoryPage from './pages/inventory/InventoryPage';
import SettingsPage from './pages/settings/SettingsPage';
import WorkOrderPage from './pages/workOrder/WorkOrderPage';


export const pagesAndRoutes = [
  { name: "Inventory", route: "/inventory", icon: "orderedlist", component: InventoryPage },
  // { name: "Work Order", route: "/work-order", icon: "taskcomplete", component: WorkOrderPage },
  // { name: "Billing", route: "/billing", icon: "money", component: BillingPage },
  // { name: "Settings", route: "/settings", icon: "preferences", component: SettingsPage},
  { name: "Admin", route: "/admin", icon: "user", component: AdminPage},
];

export const navigation = pagesAndRoutes.map((page) => {
  return {
    text: page.name,
    path: page.route,
    icon: page.icon,
  };
});
// ,{
//   text: 'Home',
//   path: '/home',
//   icon: 'home'
// },
// {
//   text: 'Examples',
//   icon: 'folder',
//   items: [
//     {
//       text: 'Profile',
//       path: '/profile'
//     },
//     {
//       text: 'Tasks',
//       path: '/tasks'
//     }
//   ]
// }

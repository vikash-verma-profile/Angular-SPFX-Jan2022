import { HomeComponent } from "../home/home.component";


export const MainRoutes=[
    {path:'Home',component:HomeComponent},
    
    {path:'Customer',loadChildren:'../customer/customer.module#CustomerModule'},
    {path:'Supplier',loadChildren:'../supplier/supplier.module#SupplierModule'}
];
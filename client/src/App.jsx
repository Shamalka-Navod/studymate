import {
  Routes,
  Route
} from "react-router-dom";


import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";

import Notes from "./pages/Notes";
import Summary from "./pages/Summary";
import Settings from "./pages/Settings";


function App(){


return (

<MainLayout>


<Routes>


<Route path="/" element={<Dashboard/>}/>

<Route path="/notes" element={<Notes/>}/>

<Route path="/summary" element={<Summary/>}/>

<Route path="/settings" element={<Settings/>}/>


</Routes>


</MainLayout>


);


}


export default App;
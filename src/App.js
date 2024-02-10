// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
  
//   Routes
// } from 'react-router-dom';

// import Users from './Users';
// import NewPlace from './NewPlace';
// import MainNavigation from './MainNavigation';

// const App = () => {
//   return (
//      <Router>
//        <MainNavigation />
//        <main>
//         <Routes>
//            <Route path="/" exact element={<Users/>}/>
             
          
//        <Route path="/places/new" exact element={<NewPlace/>}/>
            
         
//          </Routes> 
//        </main>
//     </Router>
  
//   );
// };

// export default App;
import React from 'react'
import YoutubeForm from './YoutubeForm'
const App=()=>{
    return (<>
        <YoutubeForm/>
    </>)
}
export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Dictonary from "./Dictonary/Dictonary";
import './App.css';
function App() {


  

  return (
    
<div className="container-fluid d-flex justify-content-center">
  <div className="row w-100">
    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <Dictonary />
    </div>
  </div>
</div>
  
  );
}

export default App;

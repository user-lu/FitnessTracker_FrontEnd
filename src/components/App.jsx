import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import{NavBar, Profile, Activities, Register, Routines, MyRoutines, Login }  from "./"

import './app.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <NavBar 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn}
      setUsername={setUsername}
      setPassword={setPassword}
      />
      <div>
      {isLoggedIn ? (
      <Routes>
            <Route path="/" 
            element={<h1>Welcome To FitnessTrackr!</h1>}>
            </Route>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path="/routines" element={<Routines />}></Route>
            <Route path="/my-routines" element={<MyRoutines />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
      </Routes>

      ) : (
        <div>

        <Routes>
            <Route path="/" 
            element={<h1 className="main-head">Welcome To FitnessTrackr! Please log in to begin.
            </h1>}>
            </Route>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
        </div>

      )}

      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Andrew from "./Andrew";
import Brady from "./Brady";

const TeamScreen = () => {
  return (
    <div>
      <h1>Meet the Team!</h1>
      <h2>Pick a team member</h2>
      <Link to="/team/brady">
        <button>Brady</button>
      </Link>
      <Link to="/team/andrew">
        <button>Andrew</button>
      </Link>
      <Routes>
        <Route path="brady" element={<Brady/>}/>
        <Route path="andrew" element={<Andrew/>}/>
      </Routes>
    </div>
  );
};

export default TeamScreen;

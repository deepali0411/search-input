import React, { useEffect, useState } from "react";

import SearchInput from "./searchInput/SearchInput";
import { getData } from "./actions";

import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getData();
      setUserData(data);
    };
    getUserData();
  }, []);

  return (
    <div className="App">
      <SearchInput userData={userData} />
    </div>
  );
}

export default App;

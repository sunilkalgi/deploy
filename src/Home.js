import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
   
      const fetchData = async () => {
        try {
          const response = await axios.get("http://13.233.33.93:8000");
          setUserDetails(response.data);
          setDataFetched(true);
          console.log("setUserDetails");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
  }, [dataFetched]);

  return (
    <div>
      <div>Home Page</div>
      <div>
        {userDetails.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

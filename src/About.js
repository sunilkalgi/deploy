import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://13.233.33.93:8000/aboutus");
        setAboutUs(response.data);

        console.log("setUserDetails");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>About Page</div>
      <div>
        {aboutUs}
      </div>
    </div>
  );
};

export default About;

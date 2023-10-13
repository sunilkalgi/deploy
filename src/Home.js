import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const saveDetails = await axios.post(`${process.env.REACT_APP_API}/saveUser`, {
          name: "sunil",
          age: 28,
          gender: "male",
          email: "sunil@gmail.com",
        });
        if (saveDetails) {
          const response = await axios.get(`${process.env.REACT_APP_API}`);
          setUserDetails(response.data);
          setDataFetched(true);
        }
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
        <h1>User Details</h1>
        {userDetails.map((user, index) => (
          <Card key={index} style={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h6">Name: {user.name}</Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body1">Age: {user.age}</Typography>
              <Typography variant="body1">Gender: {user.gender}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Click Me
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;

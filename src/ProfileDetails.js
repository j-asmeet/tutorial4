import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProfileDetails() {
  let { id } = useParams();
  const [userDetails, setUser] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const userData =  (await axios.get( `https://express-t4.onrender.com/api/users/${id}`)).data;
      setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "120px" }}>
      {userDetails && (
        <div >
          <img src={userDetails.picture} alt={userDetails.name} style={{ width: "50px" }}  />
          <p style={{fontWeight:"bold"}}>{userDetails.name}</p><hr></hr>
          <h3>User personal details: </h3>
          <p>Address: {userDetails.address}</p>
          <p>Company: {userDetails.company}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>Email: {userDetails.email}</p>
          <p>About : {userDetails.about}</p>
          <p>Gender: {userDetails.gender}</p>
          <p>Eye Color: {userDetails.eyeColor}</p>
          <p>Favourite Fruit: {userDetails.favoriteFruit}</p>
          <p>About: {userDetails.greeting}</p>
          <p>Account Balance: {userDetails.balance}</p>
          <h3>Friends:</h3>
          {userDetails.friends &&
            userDetails.friends.map((friend) => (
                <p>{friend.name}</p> 
            ))}
        </div>
      )}
    </div>
  );
};

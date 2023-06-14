import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";


export function Profile() {
  const navigate = useNavigate();
  const [usersData, setUsers] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const usersData = (await axios.get(
        "https://express-t4.onrender.com/api/users"
      )).data;
      setUsers(usersData);
    };
    fetchData();
  }, []);

  const filteredUsers = usersData?.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
     <input type="text" value={searchText} placeholder="Search first or last name" onChange={(e) => setSearchText(e.target.value)} />
     <div className="cardsGrid" style={{ marginTop: "200px" }}>
      {
        filteredUsers &&
        filteredUsers?.map((user, index) => (
          <div
            key={user.name}
            onClick={() =>
              navigate(`/profile/${user._id}`)
            }
          >
            {user && ( <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Img src={user.picture} alt={user.name} style={{ width: "50px" }} />
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>Address: {user.address}</Card.Text>
                <Card.Text>Company: {user.company}</Card.Text>
              </Card.Body>
              <br/>
            </Card>)}
           
          </div>
        ))}
      
      </div>
         
   
    </>
  );
}

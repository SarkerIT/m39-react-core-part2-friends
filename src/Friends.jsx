import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
  //1.
  const [friends, setFriends] = useState([]);

  // 2. && 3.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>

      {friends.map(
        (friend) => (
          <p className="box2">
            {friend.name} <br /> <h3> {friend.email}</h3>
          </p>
        )
        // <Friend friend={friend}></Friend>
      )}
    </div>
  );
}

/*
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */

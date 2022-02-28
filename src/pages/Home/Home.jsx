import "./home.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// function Listitem(params) {
//   for (const ele in params) {
//     params[ele]["title"];
//   }
//   return params;
// }

export default function Home() {
  //get data from api
  //const [posts, getPosts] = useState("");

  const [posts, getPosts] = useState([]);

  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const url = "http://10.193.57.21:30470/GetAllPod";

  const getAllPosts = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allPosts = response.data;
        console.log(typeof allPosts);
        const title = allPosts.map((obj) => {
          return (
            <div className="reference">
              <Link to="www.google.com">
                <li key={obj.id}>{obj.title}</li>
              </Link>
            </div>
          );
        });
        console.log(title);
        getPosts(title);
        console.log(typeof posts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="home">
      <ul>{posts}</ul>
    </div>
  );
}

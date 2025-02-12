import React from "react";
import Home from "./components/home/Home";
import { useError } from "./contextapi/ErrorContext";
import Routings from "./routings/Routings";
import "./App.scss";
function App() {
  // const { handleError } = useError();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todoss/1")
  //     .then((res) => res.json())
  //     .then(setData)
  //     .catch((err) => handleError("Home Page Failed to fetch data!"));
  // }, []);

  // if (!data) return <p>Loading...</p>;
  return (
    <div>
      <Routings/>
    </div>
  );
}

export default App;

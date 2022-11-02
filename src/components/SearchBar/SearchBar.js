import React from "react";

function SearchBar() {
  const [origin, setOrigin] = useState();



    const [flights, setPosts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(urlflights);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
    return <div>{flights}</div>;
  }

  let url = "http://localhost:8080/flights";

  const ShowPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(url);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
    return <div>{posts}</div>;
  };

  const data = ShowPosts();

  return (
    <div>
      <div className="selectionDestination">
        <form>
          <select className="destination">
            {data.props.children.map((o) => {
              return <Options props={o} />;
            })}
          </select>
          <input
            className="sendInfo"
            value="Book a flight!"
            type="submit"
            onClick={originHandler}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

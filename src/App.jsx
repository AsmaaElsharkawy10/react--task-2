import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import { posts } from "./data/data";

export default function App() {
    // Hooks =>use
    // let [state, setState] = useState(initailState);   // rerender component
   
    useEffect(() => {
        console.log("Component Did Mount");
    }, []);

    const [searchVal, setSearchVal] = useState("");
    const uniquePosts = posts.reduce((acc, curr) => {
        const existing = acc.find((post) => post.type === curr.type);
        return existing ? acc : [...acc, curr];
    }, []);
    const [filtered_Posts, setFiltered_Posts] = useState("");

                 

    return (
        <div>
      
            <input type="text" className="search" placeholder="Search.." onChange={(e) => setSearchVal(e.target.value)} />
            <div className="tabs">
                {uniquePosts.map((ele) => (
                    <span key={ele.type} onClick={()=>setFiltered_Posts(ele.type)}>{ele.type}</span>
                ))}
            </div>
            <Posts searchVal={searchVal} filterPosts={filtered_Posts} />
        </div>
    );
}

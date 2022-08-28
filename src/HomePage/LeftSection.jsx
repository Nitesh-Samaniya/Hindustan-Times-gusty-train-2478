import { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";
import { Link } from "react-router-dom";


function LeftSection(){
  
  const {leftNews} = useContext(NewsContext);

  return (
    <div>
        <div className="left-section-homepage">
            {
                leftNews.map((el)=>(
                    <div style={{borderBottom:'1px solid gray'}} >
                        <Link to={`/home/left/${el.id}`} key={el.id}>
                            <h2>{el.title}</h2>
                            <h3>Published At: {el.publishedAt}</h3>
                        </Link>

                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default LeftSection;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../Context/NewsContext";

function MiddleSection(){
  
  const {news} = useContext(NewsContext);

  return (
    <div>
        <div className="middle-section-homepage">
            {
                news.map((el)=>(
                    <div className="middle-section-homepage-box" style={{borderBottom:'1px solid gray'}} >
                        <Link to={`/home/middle/${el.id}`} key={el.id}>
                            <h1>{el.description}</h1>
                            <h3>Published At: {el.publishedAt}</h3>
                            <img src={el.urlToImage} alt="ulrimage"/>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default MiddleSection;
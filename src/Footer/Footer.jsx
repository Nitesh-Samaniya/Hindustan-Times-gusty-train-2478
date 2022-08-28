import FirstHalfFooter from "./FirstHalfFooter";
import "./Footer.css" 
import SecondHalfFooter from "./SecondHalfFooter";
import ThirdHalfFooter from "./ThirdHalfFooter";
function Footer(){
    return (
        <div className="footer">
            <FirstHalfFooter />     {/* First half */}
            <SecondHalfFooter />
            <ThirdHalfFooter />
        </div>
    );
}

export default Footer;
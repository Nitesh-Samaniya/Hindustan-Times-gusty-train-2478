// import { Box } from '@chakra-ui/react'
import { CalendarIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { DrawerExample } from "../Components/Drawer";
import SearchNews from "../Components/Search";
import { Button } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import "./Navbar.css"
import Tags from "../Tags/Tags";

function Navbar(){
    return (
        <div className="navbar">
            <div className="container">

                 <div>       {/*first box */}
                    <div style={{display:'flex',gap:'2rem',marginBottom:'0.8rem',fontWeight:'bold',fontFamily:'sans-serif'}}>
                        <div><DrawerExample /></div>
                        {/* <div><SearchNews /></div> */}
                    </div>
                    <div style={{display:'flex',gap:'0.2rem'}}>
                        <div>Wednesday, Aug24, 2022 |</div>
                        <div>New Delhi 28C</div>
                    </div>
                </div>

                <div>       {/*second box */}
                    <Link to="/">
                        <img src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="ht" />
                    </Link>
                </div>

                <div>       {/*third box */}
                    <div style={{display:'flex',gap:'1.5rem',fontWeight:'bold',fontFamily:'sans-serif',marginBottom:'0.8rem'}}>
                        <div>Games</div>
                        <div><CalendarIcon /> E-Paper</div>
                        <div>
                            <Avatar size='xs' src='https://bit.ly/broken-link' /> My-Accounts<ChevronDownIcon />
                        </div>
                    </div>
                    <div>
                        <div>Start 15 Days Free Trial <Button color='black' size='sm'>Subscribe</Button></div>
                    </div>
                </div>
            </div>
                {/* <Tags /> */}
        </div>
    );
}

export default Navbar;
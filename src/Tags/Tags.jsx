import { Box, HStack, Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Tags(){
    return (
        <div>
            <Box bg="white" w='73%' margin='auto' p={1} color='black'>
                <div style={{width:'73%'}}>
                    <HStack spacing={10}>
                        <Link to="/"><Tag>Home</Tag></Link>
                        <Link to="/business"><Tag>Business</Tag></Link>
                        <Link to="/entertainment"><Tag>Entertainment</Tag></Link>
                        <Link to="/sports"><Tag>Sports</Tag></Link>
                        <Link to="/health"><Tag>Health</Tag></Link>
                        <Link to="/science"><Tag>Science</Tag></Link>
                        <Link to="/tech"><Tag>Tech</Tag></Link>
                        <Link to="/politics"><Tag>Politics</Tag></Link>
                        <Link to="/bitcoin"><Tag>Bitcoin</Tag></Link>

                    </HStack>
                </div>
            </Box>
        </div>
    );
}

export default Tags;
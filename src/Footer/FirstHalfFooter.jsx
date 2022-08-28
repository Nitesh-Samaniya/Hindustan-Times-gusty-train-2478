import {
    Button,
    FormControl,
    Input,
    Select
  } from '@chakra-ui/react'

function FirstHalfFooter(){
    return (
        <div style={{borderBottom:'1px solid gray'}} className="footer-container">

            {/* top */}
            <div>        
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className="footer-ht-img">       
                        <img src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="ht" />
                    </div>
                    <div>
                        <img src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg" alt="google" />
                    </div>
                </div>
            </div>

            {/* middle */}
            <div style={{fontWeight:'bold',fontFamily:'sans-serif',marginBottom:'0.8rem'}}>   
                Subscribe to our best newsletters
            </div>
            
            {/* last */}
            <div style={{display:'flex',justifyContent:'space-between', marginBottom:'1.5rem'}}>       
                <div style={{display:'flex',gap:'1rem'}}>   
                    <div style={{width:'200px'}}>
                        <FormControl>
                            <Select placeholder='HT Daily Capsule'>
                                <option>HT Daily Capsule</option>
                                <option>@HT_Ed Calling</option>
                                <option>HT Wknd</option>
                                <option>HT Week Ahead</option>
                                <option>HT Capital Letters</option>
                                <option>Wired Wisdom</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{width:'300px'}}>
                        <Input placeholder='Enter Email Address'/>
                    </div>
                    <div>
                        <Button color='black' size='md'>Subscribe</Button>
                    </div>
                </div>
                <div>
                    <ul style={{display:'flex',gap:'2rem',listStyle:'none'}}>
                        <li><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg" alt="facebook"/></li>
                        <li><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg" alt="linkedin" /></li>
                        <li><img src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg" alt="instagram" /></li>
                        <li><img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" alt="twitter" /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FirstHalfFooter;
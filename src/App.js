import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
       <div className="grid-container">
            <div className="first-navbar">
               <div className="first-one"> 
                   <span><img src="am.png" alt="amazon logo" height="50" width="120"/></span>
                   <span className="in">.in</span>
                </div>
                <div style={{display:"grid"}}>
                   <span>Hello</span>
                  <div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>
                           </span>
                        <span>Select your address</span>
                  </div>
            </div>
           <div className="searchbox">
                    <span style={{backgroundColor:"grey",fontSize:"10",paddingTop:"6px",
                     paddingRight:"10px",paddingLeft:"10px"}}>All</span>
                    <span style={{backgroundColor:"grey",paddingTop:"6px",
                     paddingRight:"10px",paddingLeft:"5px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.870 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .2003 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg></span>
                    <span>
                  <input type ="text"></input>
               </span>
                   <span style={{backgroundColor:"#ffa500",paddingTop:"6px",
                     paddingLeft:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.70 3.70a1 1 0 0 0 1.415-1.414l-3.70-3.70a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                 </svg>
                 </span>
            </div>
               <div>
                  <span><img src="in.svg" width="20" height="22" alt ="flag"/></span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                       <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .2003 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                      </span>
               </div>
               <div>
                  <span>Hello, Sign in</span>
                    <span>
                       <span>Account & Lists</span>
                       <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .2003 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                             </svg>
                        </span>
                    </span>
               </div>
               <div>
                  <span>Returns</span>
                  <span>& Orders</span>
               </div>
               <div >
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                 </svg>
               </div>

            </div>
           <div className="second-navbar">
            <div>
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
              </span>
              <span>All</span>
           </div>
           
           <div>Best Sellers</div>
           <div>Mobiles</div>
           <div>Today's Deals</div>
           <div>Fashion</div>
           <div>Prime</div>
           <div>New Release</div>
           <div>Electronics</div>
           <div>Customer Service</div>
           <div>Amazon Pay</div>
           <div>Home & Kitchen</div>
           <div>Computers</div>
           <div>Toys & Games</div>
           <div>Books</div>
           <div>Sell</div>
           <div>
               <img src="download.png" width="70" height="40" alt="download"/></div>
           <div 
                style={{
                fontSize:"20px"}}>
                Shopping made easy | Download the app
           </div>
           </div>
           <div className="main">
            
              <div className="item1">
                <div className="chevron">
                    <span className="chevron1"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg></span>

                            <span className="chevron2"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                              </svg></span>
                </div> 
              </div>
           </div>   
               <div className="firstone">
               <div className="secondone">
                           <div className="header">Trending now cooling appliances | Up to 40% off</div>
                           <div className="thirdone">
                                   <div className="fourthone">
                                         <div><img src="AC.jpg" alt="ac"/></div>
                                         <div>window AC | Starting Rs17,999</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="AC1.jpg" alt="ac"/></div>
                                         <div>Split ACs | Starting Rs23,499</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="fr1.jpg" alt="ac"/></div>
                                         <div>Single doors | Starting Rs10,190</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="fr2.jpg" alt="ac"/></div>
                                         <div>Double doors | Starting Rs17,990</div>
                                   </div>
                                   
                             </div>
                       </div>
                     
                       <div className="secondone">
                           <div className="header">Home Appliaces</div>
                           <div className="thirdone">
                                   <div className="fourthone">
                                         <div><img src="tv.jpg" alt="ac"/></div>
                                         <div>Tv</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="wm.jpg" alt="ac"/></div>
                                         <div>Washing Machine | Starting Rs12,499</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="AC2.jpg" alt="ac"/></div>
                                         <div>ACs</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="fr2.jpg" alt="ac"/></div>
                                         <div>Double doors | Starting Rs17,990</div>
                                   </div>
                             </div>
                       </div>
                       <div className="secondone">
                           <div className="header">Professionl tools, testing & more</div>
                           <div className="thirdone">
                                   <div className="fourthone">
                                         <div><img src="nut.jpg" alt="ac"/></div>
                                         <div>Professional tools</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="meter.jpg" alt="ac"/></div>
                                         <div>Measuring Instruments</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="cs.jpg" alt="ac"/></div>
                                         <div>Cleaning Supplies</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="ms.jpg" alt="ac"/></div>
                                         <div>Medical supplies</div>
                                   </div>
                             </div>
                       </div>
                       <div className="secondone">
                       <div>
                         <div className="header">
                               <span style={{backgroundColor:"grey"}}>Sign in for your best Experience</span>
                               <span><button type="button">Sign in securely</button></span>
                         </div>
                           <div><img src="lp.jpg" alt="lp"/></div>
                           </div>
                        </div>    
                           
                     </div>
                     {/* first shooping menu ended */}
                     
                
            
             <div className="firstone"> 

             <div className="secondone">
                       <div>
                         <div className="header">
                               <span style={{backgroundColor:"grey"}}>Choclates, Sweets</span>
                               
                         </div>
                           <div><img src="choc.jpg" alt="lp"/></div>
                           </div>
                        </div>    

                        <div className="secondone">
                       <div>
                         <div className="header">
                               <span style={{backgroundColor:"grey"}}>Amazon pay | Buy Google Play Recharge Code now </span>
                               
                         </div>
                           <div><img src="gpay.jpg" alt="lp"/></div>
                           </div>
                        </div>    

                        <div className="secondone">
                           <div className="header">Professionl tools, testing & more</div>
                           <div className="thirdone">
                                   <div className="fourthone">
                                         <div><img src="nut.jpg" alt="ac"/></div>
                                         <div>Professional tools</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="meter.jpg" alt="ac"/></div>
                                         <div>Measuring Instruments</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="cs.jpg" alt="ac"/></div>
                                         <div>Cleaning Supplies</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="ms.jpg" alt="ac"/></div>
                                         <div>Medical supplies</div>
                                   </div>
                             </div>
                       </div>

                       <div className="secondone">
                           <div className="header">Professionl tools, testing & more</div>
                           <div className="thirdone">
                                   <div className="fourthone">
                                         <div><img src="bed.jpg" alt="ac"/></div>
                                         <div>Home Products</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="kitchen.jpg" alt="ac"/></div>
                                         <div>Kitchen & dining</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="da.jpg" alt="ac"/></div>
                                         <div>Daily essentials</div>
                                   </div>
                                   <div className="fourthone">
                                         <div><img src="ce.jpg" alt="ac"/></div>
                                         <div>Clothing essentials</div>
                                   </div>
                             </div>
                       </div>

                       </div>
                       {/* shoplist 2 end here */}
              <div className="fifthone">
                <div><b>Today's Deal</b></div>
                <div className="horizon">
                <div>
                     <img src="guitar.jpg" alt="gittar"/>
                  
                </div>
                <div>
                <img src="watch.jpg" alt="gittar"/>
                 
                </div>
                <div>
                <img src="doll.jpg" alt="gittar"/>

                </div>
                <div>
                <img src="joy.jpg" alt="gittar"/>

                </div>
                <div>
                <img src="y30.jpg" alt="gittar"/>

                </div>
                <div>
                <img src="seed.jpg" alt="gittar"/>

                </div>
                </div>
              </div>
             <div className="footer">
                   <div className="back"><b>Back to top</b></div>

                   <div className="footerflex">
                          <div className="normal">
                                  
                                  <div><b>Get to Know Us</b></div>
                                  <div>About us</div>
                                  <div>Press Release</div>
                                  <div>Gift a smile</div>

                          </div>
                          <div className="normal">
                          <div><b>Get to Know Us</b></div>
                                  <div>About us</div>
                                  <div>Press Release</div>
                                  <div>Gift a smile</div>

                          </div>
                          <div className="normal">
                               
                                  <div><b>Get to Know Us</b></div>
                                  <div>About us</div>
                                  <div>Press Release</div>
                                  <div>Gift a smile</div>

                          </div>
                          <div className="normal">

                          <div><b>Get to Know Us</b></div>
                                  <div>About us</div>
                                  <div>Press Release</div>
                                  <div>Gift a smile</div>
                          </div>
                   </div>
                   <div className="normal">
                        <div className="secondlast">
                             <div><img src="am.png" alt="amazon" width="80" height="60"/></div> 
                              <div>

                              <select class="selectpicker" data-width="fit">
                             <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                             <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
                                     </select>
                              </div>
                              </div>
                          <div className="last">

                                <div>Australia</div>
                                <div>Brazil</div>
                                <div>canada</div>
                                <div>China</div>
                                <div>France</div>
                                <div>Singapore</div>
                                <div>japan</div>
                                <div>Itlay</div>
                                <div>Mexico</div>
                                <div>Poland</div>
                                <div>spain</div>
                                <div>Turkey</div>
                          </div>
                   </div>
                   
             </div> 
      </div>
            
    </div>
    
  );
}

export default App;

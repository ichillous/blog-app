import React from 'react';
// import './Nav.css';
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav" style={{

                width: "100vw",
                height: "100px",

                // Navbar Positioning Properties
                top: "0",
                left: "0",
                marginBottom: "50px",
                
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            
                fontWeight: "bolder",
                padding: "10px 25px",
            
                boxShadow: '0px 8px 10px darkgray',
                backgroundColor: "lightblue",
                opacity: "90%",

               }}>
          
          <Link className="Logo" to="/" style={{
                
                textDecorationLine: 'none',
                letterSpacing: "-3px",
        
                // Container Contents Organization
                display: "flex",
                  
                  
          }}>
            <h1 style={{
            
            //Container Physical Props
              height: "50px",
              width: "60vw",
              flexGrow: "1",
              
              //Font Props
              fontSize: "2.25em",
              color: "black",
              fontFamily: 'Kalam',
              textDecorationLine: 'none',
              letterSpacing: "-3px",
    
              //Positioning Props
              textAlign: "left",
              marginLeft: '50px',
              marginBlockEnd: "0.50em",
              marginBlockStart: "0.50em",
        
            
            }}>BlogApp</h1>
          </Link>
                <div className="links" style={{
                
                    textDecorationLine: 'none',
            
                    // Container Contents Organization
                    display: "flex",
                      
                    }}>
                  <NavLink className="link" to="/blogs" style={{
                      
                      minWidth: "10vw",

                    }}>Blogs</NavLink> 
                  <NavLink className="link" to="/add-blog" style={{
                      
                      minWidth: "10vw",

                    }}>
                      New Blog Post
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
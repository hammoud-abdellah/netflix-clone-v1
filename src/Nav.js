import React from 'react'
import "./Nav.css";

function Nav() {
// const [show, handleShow] = useState(false);

//   useEffect( () => {
//     window.addEventListener("scroll" , () => {
//       if (window.scrolly > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll", () => {
//         if (window.scrollY > 100) {
//           handleShow(true);
//         } else {
//           handleShow(false);
//         }
//       });
//     };
//   }, []);


  

  return (
    <div className='nav'> 
        <img 
            className='nav__logo'     //`nav ${show && "nav__black"}}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt='Netflix-logo'
        />


       {/* <div class="dropdown-menu">
          <p class="collections__btn">Collections</p>
          <div class="collections_menu">
                  <a className="collections" href="#">Netflix Originals</a>
                  <a className="collections" href="#">Trending Now</a>
                  <a className="collections" href="#">Top Rated</a>
                  <a className="collections" href="#">Action Movies</a>
                  <a className="collections" href="#">Comedy Movies</a>
                  <a className="collections" href="#">Documentaries</a>
                  <a className="collections" href="#">Horror Movies</a>
                  <a className="collections" href="#">Romance Movies</a>
          </div>
        </div> */}
        
        <a href='#' className='sign__in'>Sign in</a>
        
        <img 
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt='Netflix-avatar'
        />
      
    </div>
  )
}

export default Nav

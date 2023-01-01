
import Logo from 'components/logo';
export default function WelcomeFooter() {
    return (<div>  
        <footer>
        <div className="footer-container">
            <div className="left-col">
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="rights-text">© 2022 Created By <b>3WE IT Solutions</b>  All Rights Reserved.</p>
        </div>
 
      </div>
    </footer></div> 
  )
}



const styles = {
    
    logo: {
      mr: {xs:3, sm:null, md:null, lg:null, xl:null},
      width: '180px'
    }, 
    
  };
  
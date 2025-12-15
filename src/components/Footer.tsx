import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer(){

  return(
    <footer className='
 text-black'>
      <div className = "text-center   ">
        <p className="w-full text-center font-arial text-white">Built by Vivek Jagadeesh</p>
        <div className = " flex flex-row justify-center mt-2">
          <div className="hover:animate-bounce mr-1">
            <a href="https://github.com/vivekjag1" target="_blank" className="hover:animate-bounce">
              <GitHubIcon fontSize="large" style={{color: 'white'}}/>
            </a>
          </div>
          <div className = "hover:animate-bounce mr-1 ">
            <a href = "https://www.linkedin.com/in/vivek-jagadeesh/" target="_blank">
              <LinkedInIcon fontSize="large" style={{color: 'white'}}/>
            </a>
          </div>
          <div className = "hover:animate-bounce mr-1 ">
            <a href="mailto:vivekjag1@gmail.com" target = "_blank">
              <EmailIcon fontSize = "large" style={{color: 'white'}}/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )

}
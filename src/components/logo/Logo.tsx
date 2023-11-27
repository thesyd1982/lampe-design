import './logo.scss';
import {Link} from 'react-router-dom';

interface LoginProps{
    cls:string
}
function Logo(props:LoginProps){
    const {cls} = props
  return (
           <Link to='' className="navbar__link">
             <div className={cls}>DARIZEENNA</div>
           </Link>
  )
}
export default Logo

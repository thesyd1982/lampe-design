import { Link } from 'react-router-dom';
import "./card.scss"
import { CardProps } from '../../types/commonTypes';
import { getIconComoponent} from '../../utils/';


export const Card = (props: CardProps) => {

    const { title, description, icon:iconName, link, image } = props

    const iconComponent = iconName?getIconComoponent(iconName, "128px", "icon"):null
    return (
    <div className='card'>
        <div className="card__container">
            {image && <div className='card__container__image'><img src={image}/></div> }
            {!image && iconComponent && <div className="card__container__icon">{iconComponent}</div>}
            <div className="card__container__details">
                <h3 className='card__container__details__title'>{title}</h3>
                <p className='card__container__details__description'>{description.substring(0,70).trim()+'...'}</p>
                {link && <Link to={link} className='card__container__details__link'>En savoir plus</Link>}
            </div>
        </div>
    </div>
    );
};
export default Card;

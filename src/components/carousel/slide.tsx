import { SlideProps } from "../../types/commonTypes"


export const Slide = (props : SlideProps) => {
    const{id=0,title, description, image, children}=props
        return (
                <div className="slide" style={{ translate: `${-100 * id}%` }}>
                    <img src={image}className="slide__image"/>
                    <div className="slide__content">
                        <h3 className="title">{title}</h3>
                        <p className="description">{description}</p>
                    {children}
                    </div>
                </div>
               )
}

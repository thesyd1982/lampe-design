import { Card } from '../../../../components';
import services from './services.json'
import "./services.scss"
const Services = () => {
    return (
        <section className='services__container'>
        <h2 className='services__title'>Nos Services</h2>
            <div className="services__grid">
                {services.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    )

}
export default Services;

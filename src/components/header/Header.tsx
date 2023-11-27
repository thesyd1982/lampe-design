import { Hero, Navbar, Section, Carousel } from '../../components/';
import { SlideProps } from '../../types/commonTypes';
import './header.scss';

type link = {
    id: string,
    text: string,
    href?: string
}
interface HeaderProps {
    links: link[],
    slides?: SlideProps[]
}

function Header(props: HeaderProps) {
    const { links, slides } = props

    return (
        <Section sectionId='header'>

            <div className='header'>
                <Navbar links={links} />
                {!slides && <Hero />}
                {slides && <Carousel slides={slides} />}
            </div>
        </Section>
    )
    }

export default Header

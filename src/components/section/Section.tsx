import { useRef } from "react";
import { useIntersectionObserver } from '../../hooks/'
import { SectionProps } from "../../types/commonTypes";


const Section = (props:SectionProps) => {
  const { children, sectionId } = props
        const ref = useRef<HTMLDivElement | null>(null)
        const entry = useIntersectionObserver(ref, {})
        const isVisible = !!entry?.isIntersecting
        //console.log(`Render Section ${sectionId}`, { isVisible })
        return (
                <section
                className={`section section--${sectionId} ${isVisible?"active":""}`}
                ref={ref}
                id={`${sectionId}`}
                >
                {children}
                </section>

               )
}
export default Section

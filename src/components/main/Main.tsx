import "./main.scss";
import { Section } from "../../components/";
import { ReactNode } from "react";


type section = {
    children: JSX.Element[] | JSX.Element | string,
    sectionId :string ,
  };
  type MainProps ={
      sections:section[],
      children?: ReactNode

  }

function Main(props:MainProps) {
    const {sections, children} = props



    return (
        <main className="main" id="main">
            <div className="container">

                {sections.map((section,i) =>
                    <Section
                    key={i}
                    sectionId={section.sectionId}
                    >
                    {section.children}
                    </Section>
                     )}
                    {children}
            </div>
        </main>
    );
}

export default Main;

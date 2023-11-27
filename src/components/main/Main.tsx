import "./main.scss";
import { Section } from "../../components/";


type section = {
    children: JSX.Element[] | JSX.Element | string,
    sectionId :string ,
  };
  type MainProps ={
      sections:section[]
  }

function Main(props:MainProps) {
    const {sections} = props



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
            </div>
        </main>
    );
}

export default Main;

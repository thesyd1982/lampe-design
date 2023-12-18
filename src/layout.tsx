import { Footer, Main, Navbar } from './components'
import { Children } from './types/commonTypes'

export const layout = ({ children }: Children) => {
    return (<> <Navbar links={links}/>
       i     <Main>
            {chilren}
            <Main />
            <Footer />
        </>
        )
}

import { nosotrosInfo } from "../../data"
import { Navbar, NosotrosGroup } from "../components"

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="h-[600px] color-secundario">

            </div>

            {
                nosotrosInfo.map( info => (
                    <NosotrosGroup key={info.id} info={ info } />
                ))
            }
        </>
    )
}


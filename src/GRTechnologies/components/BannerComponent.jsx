
export const BannerComponent = () => {
    return (
        <div className="h-[52rem] color-primario banner flex justify-center items-center gap-24">
                <div className="pt-20">
                    <h2 className="text-white text-[3rem] colorTextBanner">We're GRS Technologies</h2>
                    <p className="text-white text-[1.6rem]">Brindamos soluciones creativas, rapidas y eficaces</p>
                </div>
                <img src="/banner.svg" className="w-1/4" alt="banner" />
                {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
            </div>
    )
}

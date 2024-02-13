import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TypingEffect } from "../components";

export const BannerComponent = () => {

    const bannerRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div ref={bannerRef} id="inicio" className="h-[36rem] md:h-[44rem] lg:h-[52rem] color1 banner flex flex-col xl:flex-row justify-center items-center gap-24">
                <div className="pt-20">
                    <h2 className="text-center text-[1.7rem] sm:text-[3rem] colorTextBanner">We're <TypingEffect /></h2>
                    <p className=" text-center text-white text-[1rem] sm:text-[1.6rem] px-8">Brindamos soluciones creativas, rapidas y eficaces</p>
                </div>
                <img src="/banner.svg" className="w-1/3 xl:w-1/4" alt="banner" />
                {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
            </div>
    )
}

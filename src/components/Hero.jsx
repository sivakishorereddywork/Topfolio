/**
 * @copyright 2025 Siva Kishore Reddy
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/assets/mine/avatar.png"
                width={40}
                height={40}
                alt="Siva Kishore Reddy portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Apps for the Future in Java
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="https://drive.google.com/file/d/15kULfUKOVJDzSl6oz2-ZL7TTALYjOQnv/view?usp=sharing"
              target="_blank"
              label="Download resume"
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block relative w-full max-w-[480px] ml-auto">
        <div className="absolute inset-0 w-full h-full rounded-[200px] border-[6px] border-sky-400 animate-float" />
          <figure className="relative bg-gradient-to-t from-sky-400 via-100% via-sky-950/40 to-65% rounded-[200px] overflow-hidden">
            <img
              src="/assets/mine/removedBg.png"
              width={656}
              height={800}
              alt="Siva Kishore Reddy"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero
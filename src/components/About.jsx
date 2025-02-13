/**
 * @copyright 2025 Siva Kishore Reddy
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Projects completed',
    number: 15
  },
  {
    label: 'Years of experience',
    number: 2
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <p className="headline-6 text-zinc-500 mb-1 reveal-up">My Introduction</p>
        <h2 className="headline-2 mb-8 reveal-up">
          Overview
        </h2>
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[100ch]">
            Welcome! I&apos;m <span> Siva Kishore Reddy,</span> a professional Software Engineer, with expertise in building robust, scalable 
            software systems and integrating cutting-edge AI models into
            applications. Experienced in leveraging generative AI, Retrieval-Augmented Generation, and private learning techniques to create
            next-generation user experiences. Proficient in programming languages such as Python, Java Swift, and C++, with a strong base
            of data structures and algorithms. Experienced in automating and testing data pipelines, problem solving, and developing tools
            for visualization and reporting. Skilled in optimizing systems for performance and reliability, with a proven ability to thrive in
            fast-paced, collaborative environments. Passionate about applying ML and AI to deliver high-quality, user-centric solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/assets/mine/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
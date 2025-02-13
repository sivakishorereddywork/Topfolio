/**
 * @copyright 2025 Siva Kishore Reddy
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="container">
        <p className="headline-6 text-zinc-500 mb-1 reveal-up">My Work</p>
        <h2 className="headline-2 mb-8 reveal-up">
          My recent projects
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

const projects = [
  {
    imgSrc: '/assets/projects/Netflix.png',
    title: 'Netflix Clone Static Website',
    tags: ['TMDB', 'ML', 'Predictive Modeling', 'Data Visualization'],
    projectLink: 'https://bit.ly/42pEMSW'
  },
  {
    imgSrc: '/assets/projects/Spotify.jpg',
    title: 'Most Streamed SPOTIFY Song Analytics',
    tags: ['Data Analysis', 'ML', 'Predictive Modeling', 'Data Visualization'],
    projectLink: 'https://bit.ly/3Qaw7N7'
  },
  {
    imgSrc: '/assets/projects/DynamicPortfolio.png',
    title: 'Dynamic Portfolio with 3D images in React',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/assets/projects/Healthcare.png',
    title: 'Big Data Analytics For Prediction Modelling In Healthcare Databases',
    tags: ['Pyspark', 'Seaborn', 'Feature Engineering', 'Pandas', 'Numpy'],
    projectLink: ''
  },
  {
    imgSrc: '/assets/projects/UnderWorking.png',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    // projectLink: 'https://github.com/*/codewithsadee/vcard-personal-portfolio'
  },
  {
    imgSrc: '/assets/projects/UnderWorking.png',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    // projectLink: 'https://github.com/*/codewithsadee/anon-ecommerce-website'
  },
];

export default Projects
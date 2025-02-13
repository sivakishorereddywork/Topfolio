/**
 * @copyright 2025 Siva Kishore Reddy
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Review.css";


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">
      <p className="headline-6 text-zinc-500 mb-1 reveal-up">My Endorsements</p>
        <h2 className="headline-2 mb-8 reveal-up">
          Testimonials
        </h2>

        <div className="flex items-stretch gap-3 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

const reviews = [
  
  {
    content: ' Siva did an Impressive work on the Netflix clone project, demonstrating strong skills in Node.js, React.js, and JWT authentication. His work was efficient and well-structured. highly recommended.',
    name: 'Lotfi ben Othmane',
    imgSrc: '/assets/reviews/Ben.jpg',
    company: 'Assistant Professor | University of North Texas'
  },
  {
    content: 'I’ve enjoyed working with Siva. He’s a quick learner, smart working, collaborative mindset, and a valuable team player who actively engages in discussions and contributes thoughtful insights.',
    name: 'Apoorva K',
    imgSrc: '/assets/reviews/Apoorva.jpg',
    company: 'Program Manager | Spektra Systems'
  },
  {
    content: 'Siva did an excellent job on the Inventory Distribution System project, showcasing strong data visualization skills and technical expertise. His work effectively presented complex data and integrated best practices.',
    name: 'Sayed Khushal Shah',
    imgSrc: '/assets/reviews/syed.jpg',
    company: 'Assistant Professor | University of North Texas'
  }
];

export default Review
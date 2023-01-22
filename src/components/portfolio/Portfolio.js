import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE THE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts Templates & Infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI Kit for Data Design Web Apps',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining Tasks & Tracking Progress',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts Templates & Infographics In Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Emoji Game Using Plain JavaScript',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
];

const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data.map((datum) => (
            <article className="portfolio__item" key={datum.id}>
              <div className="portfolio__item-image">
                <img src={datum.image} alt={datum.title} />
              </div>

              <h3>{datum.title}</h3>
              <div className="portfolio__item-cta">
                <a href={datum.github} className='btn'>GitHub</a>
                <a href={datum.demo} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
   
  export default Portfolio;
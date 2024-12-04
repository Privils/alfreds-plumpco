import React from 'react'
import image from './images/burst-pipe2.jpg'
import image1 from './images/sink1.jpg'
import image2 from './images/geyser1.jpg'
import image3 from './images/burst-pipe3.jpg'
import image4 from './images/clay-pipe1.jpg'
import image5 from './images/toilet1.jpg'
import image6 from './images/bath-reno.jpg'
import image7 from './images/kitchen-before.jpg'
import MoreProjects from './Projects2.1'

const Projects = () => {
  return (
   <>
   <section className='work-container'>
   <h3>our work</h3>
   <h1>View some of our recent Projects</h1>
   <div className="work-type">
    <picture>
        <figure>
            <img src={image} alt="burst pipe replacement" className='work-images'/>
            <figcaption>
            burst pipe replacement
        </figcaption>
        </figure>
       

        <figure>
            <img src={image1} alt="" className='work-images'/>
            <figcaption>
new sink installation
            </figcaption>
        </figure>
        <figure>
        <img src={image2} alt="" className='work-images'/>
            <figcaption>
                new geyser installation
            </figcaption>
        </figure>
        <figure>
            <img src={image7} alt="" className='work-images'/>
            <figcaption>
                kitchen plumbing renovations & installation
            </figcaption>
        </figure>
        <figure>
            <img src={image3} alt="" className='work-images'/>
            <figcaption>
                burst pipe replacement
            </figcaption>
        </figure>
        <figure>
            <img src={image4} alt="" className='work-images'/>
            <figcaption>
                clay pipe replacement <br />
                <span>Due to continuous drain blockage and roots</span>
            </figcaption>
        </figure>
        <figure>
            <img src={image5} alt="" className='work-images'/>
            <figcaption>
                toilet installation
            </figcaption>
        </figure>
        <figure>
            <img src={image6} alt="" className='work-images'/>
            <figcaption>
                full bathroom renovations
            </figcaption>
        </figure>
    </picture>
   </div>
   <MoreProjects/>
   </section>
   </>
  )
}

export default Projects

import React from 'react'
import image from './images/bath-reno1.jpg'
import image1 from './images/bath-reno2.jpg'
import image2 from './images/bath-reno3.jpg'
import image3 from './images/bath-reno4.jpg'
import image4 from './images/kitchen-before.jpg'
import image5 from './images/kitchen-reno2.jpg'
import image6 from './images/kitchen-reno3.jpg'
import image7 from './images/kitchen-reno (1).jpg'

const MoreProjects = () => {
  return (
   <>
   <h1>Before and After</h1>
    <div className="before-after">
    <picture>
        <figure>
            <img src={image} alt="" className='work-images'/>
            <figcaption>
            Before Bathroom Renovation <br />
            <span>Before new tub installation</span>
            </figcaption>
        </figure>
        <figure>
            <img src={image1} alt="" className='work-images'/>
            <figcaption>
            Bathroom Installation <br />
            <span>
            In progress
            </span>
            </figcaption>
        </figure>
        <figure>
            <img src={image2} alt="" className='work-images'/>
            <figcaption> 
            Bathroom Renovation <br />
            <span>
            In progress
            </span>
            </figcaption>
        </figure>
        <figure>
            <img src={image3} alt="" className='work-images'/>
            <figcaption>
            After Bathroom Renovation <br />
            <span>
            Completed Bathroom Renovation
            </span>
            </figcaption>
        </figure>
        <figure>
            <img src={image4} alt="" className='work-images'/>
            <figcaption>
            Before Kitchen Renovation <br />
            <span>
            Before
            </span>
            </figcaption>
        </figure>
        <figure>
            <img src={image5} alt="" className='work-images'/>
            <figcaption>
            During Kitchen Renovation <br />
            <span>
            In-progess
            </span>
            </figcaption>
        </figure>
        <figure>
            <img src={image6} alt="" className='work-images'/>
            <figcaption>
            During Kitchen Renovation <br />
            <span>
            In-progress
            </span>
            </figcaption>
        </figure>
        <figure>
            <img src={image7} alt="" className='work-images'/>
            <figcaption>
            After Kitchen Renovation <br />
            <span>
            Kitchen Renovations Completed
            </span>
            </figcaption>
        </figure>
    </picture>
   </div>
   </>
  )
}

export default MoreProjects;

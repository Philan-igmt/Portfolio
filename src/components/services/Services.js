import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import "./Services.css"

const Services = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div data-aos="fade-up">
            <h2>Services</h2>
            <div className="container">
              
              <div className="row">
                  {/* <div className="col s12 l6">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium numquam temporibus ea officiis placeat cum exercitationem molestias fugiat distinctio accusamus soluta repellendus inventore, blanditiis reprehenderit repellat, maiores cumque quibusdam eligendi optio architecto autem enim! Non necessitatibus debitis itaque ipsam praesentium blanditiis ab iure voluptates obcaecati eveniet fuga autem, quae consequatur quos voluptate iusto, at perferendis sint architecto earum tenetur rem magnam. Repellendus, similique hic. Laboriosam ea sed nulla, quae mollitia dolorem sequi voluptatibus officia quisquam debitis fuga veritatis laudantium amet accusantium a ipsam reprehenderit earum culpa? Delectus voluptatibus nihil, tenetur cum suscipit enim, nesciunt adipisci sapiente consectetur illo amet dolorum.</p>
                  </div>
                  <div className="col s12 l6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, autem. Doloremque quis beatae, earum at libero rerum ullam eum ducimus voluptatum vero itaque minus facere enim omnis nemo inventore optio blanditiis maiores veritatis laboriosam. Molestias saepe, inventore corrupti temporibus ipsam autem quis minima hic voluptatum. Cumque incidunt sed necessitatibus aperiam. Illum aut qui sequi nesciunt accusantium repellat ut veniam necessitatibus doloremque exercitationem. Repellendus, rem animi qui necessitatibus, libero perspiciatis maxime aperiam magnam neque nemo architecto corporis deleniti maiores sequi rerum ducimus vitae quibusdam reprehenderit voluptate saepe ab modi temporibus aliquid. Laborum tenetur, minus autem quos quasi repellat. Ea, ut cupiditate!
                  </div> */}
              </div>
        </div>
        </div>
    )
}

export default Services;
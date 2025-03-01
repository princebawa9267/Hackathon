import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import SwiperCard from '../../Components/SwiperCard'

const AboutSection = () => {
  return (
    <div>
      <Container >
        <Row style={{display:"flex"}}>
            <Col lg={7}>
                <h1 className='headings'>
                  ABOUT
                </h1>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, itaque, voluptatem consectetur quis odio dolore in placeat architecto dignissimos ad praesentium, commodi laudantium omnis maiores magnam ab fuga. Tenetur rem modi ipsam est architecto non reiciendis enim maiores, accusantium dolorem magnam fuga tempora natus magni repudiandae doloribus autem dicta ipsum, quia excepturi consectetur molestiae qui nesciunt repellendus! Eius ducimus error, molestias voluptatum, corrupti itaque ab unde doloremque debitis esse autem harum ea magni aliquam? Voluptatum ratione ea nulla corporis, quaerat ad. Tenetur labore praesentium sed quas eveniet, molestiae, accusantium ea distinctio libero iure ut, qui officiis. Commodi excepturi accusantium velit impedit iusto omnis eligendi, recusandae culpa officiis, dolore nobis aut voluptatum inventore cum provident facilis at et totam nesciunt perferendis consequuntur cupiditate! Quia iure vitae mollitia cum nulla! Velit sequi hic omnis nihil similique natus, dolor perspiciatis, odio molestiae error ipsum accusamus! Labore, iusto. Nisi hic id dolores corrupti obcaecati, consectetur odit soluta at quidem facere natus quod, repudiandae dolor? Itaque porro blanditiis expedita consectetur dolorum assumenda sapiente, accusamus esse reiciendis reprehenderit, enim officiis. Esse similique ducimus nisi aperiam perferendis ut dolores quia odit tempora officia eligendi, libero earum ipsam optio, vitae ipsa voluptatum placeat? Deserunt, aut. Deserunt, perferendis quia!
                </div>
            </Col>
            <Col lg={5} style={{display:'flex',justifySelf:"center",justifyContent:"center",alignItems:"center"}}>
                <SwiperCard/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutSection

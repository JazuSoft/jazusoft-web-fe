import React from "react"
import {
    ScreenContainer,
    Button,
    HeroSection,
    Hero,
    HeroBody,
    HeroTitle,
    HeroTeaser,
    HeroActionList,
    HeroAction,
    FeatureSection,
    FeatureList,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureImage,
    Projects,
    Contact
  } from '../components'
  
import { Link } from 'gatsby'
import codeImageURL from '../images/icons8-code-100.png'
import variableImageURL from '../images/icons8-variable-100.png'
import registryEditorImageURL from '../images/icons8-registry-editor-100.png'
import systemTaskImageURL from '../images/icons8-system-task-100.png'
import webDesignImageURL from '../images/icons8-web-design-100.png'
import moduleImageURL from '../images/icons8-module-100.png'
import heroBackgroundURL from '../images/hero-background.png'

const IndexPage = () => {
  return <><HeroSection>
    <ScreenContainer>
        <Hero backgroundImageURL={heroBackgroundURL}>
        <HeroBody>
            <HeroTitle>Helping companies boost their bussiness</HeroTitle>
            <HeroTeaser>
            A team of professional engineers ready to develop your next project.
            </HeroTeaser>
            <HeroActionList>
            <HeroAction>
                <Button as={Link} to="#contact">
                Contact us
                </Button>
            </HeroAction>
            </HeroActionList>
        </HeroBody>
        </Hero>
    </ScreenContainer>
    </HeroSection>
    <FeatureSection>
    <FeatureList>
        <Feature>
        <FeatureImage src={registryEditorImageURL} />
        <FeatureTitle>Scale & Growth</FeatureTitle>
        <FeatureText>
        We provide the talent that you need, so you focus on your business. We understand the difference between growing and scaling and how we can support it. Our multi-location delivery enables us to tap the best talent for when you need it the most.
        </FeatureText>
        </Feature>
        <Feature>
        <FeatureImage src={variableImageURL} />
        <FeatureTitle>Product Design & Management</FeatureTitle>
        <FeatureText>
            We shape our products with their users in mind, using customer journey maps, design thinking methodologies and our own research and expertise to do so.
        </FeatureText>
        </Feature>
        <Feature>
        <FeatureImage src={webDesignImageURL} />
        <FeatureTitle>Software Engineering</FeatureTitle>
        <FeatureText>
        High expectations. High complexity projects. High quality solutions. We are committed to our agile methodology which helps us develop well engineered solutions that are scalable, easy to maintain and business ready.
        </FeatureText>
        </Feature>
        <Feature>
        <FeatureImage src={moduleImageURL} />
        <FeatureTitle>Autonomous Expert Team</FeatureTitle>
        <FeatureText>
            Provides all the roles needed to complete the team your require. The Delivery Team works autonomously but communicates and provides status reports as often as you request. Using the Agile methodology, the team relies heavily on feedback and discoveries made during testing to shape its design and functions.
        </FeatureText>
        </Feature>
        <Feature>
        <FeatureImage src={codeImageURL} />
        <FeatureTitle>Web & Mobile apps</FeatureTitle>
        <FeatureText>
        Does your product require a web application with a neat user interface? Do you need an admin panel or real-time chat feature? Or maybe you simply need a website that will manage a heavy load of data and will be accessible on any browser? We can give you just what you need to keep you ahead of the competition.
        </FeatureText>
        </Feature>
        <Feature>
        <FeatureImage src={systemTaskImageURL} />
        <FeatureTitle>Infrastructure</FeatureTitle>
        <FeatureText>
        One of the primary benefits of cloud computing is the opportunity to replace significant up-front infrastructure expenses with reduced variable costs that scale with your business.
        </FeatureText>
        </Feature>
    </FeatureList>
    </FeatureSection>
    <ScreenContainer as="section" py={5}>
    <Projects />
    </ScreenContainer>
    <div id="contact"></div>
    <ScreenContainer as="section" py={5}>        
    <Contact />
    </ScreenContainer></>

}

export default IndexPage

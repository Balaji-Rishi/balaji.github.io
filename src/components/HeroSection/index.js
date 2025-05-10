import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    
                    {/* Left Side */}
                    <HeroLeftContainer id="Left">

                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1 }}
                        >
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                        </motion.div>

                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1.2 }}
                        >
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                        </motion.div>

                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1.4 }}
                        >
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>

                        <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }} 
                            transition={{ duration: 1.6 }}
                        >
                            <ResumeButton 
                                as={motion.a}
                                whileHover={{ scale: 1.1 }}
                                href={Bio.resume} 
                                target='display'
                            >
                                Check Resume
                            </ResumeButton>
                        </motion.div>

                    </HeroLeftContainer>

                    {/* Right Side */}
                    <HeroRightContainer id="Right">
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 2 }}
                        >
                            <Img src={HeroImg} alt="hero-image" />
                        </motion.div>
                    </HeroRightContainer>

                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection

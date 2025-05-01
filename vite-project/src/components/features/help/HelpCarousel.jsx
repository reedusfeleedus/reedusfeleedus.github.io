import { useState } from 'react';
import styled from '@emotion/styled';
import helpImage from '../../../assets/tutorial/help section.png';
import catFileImage from '../../../assets/tutorial/cat file.txt section.png';
import aiImage from '../../../assets/tutorial/ai section.png';
import clearGif from '../../../assets/tutorial/Clear Vid.gif';
import tabCompleteGif from '../../../assets/tutorial/Autocomplete Video.gif';
import commandHistoryGif from '../../../assets/tutorial/Up Down Commands.gif';

const CarouselContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2C001E;
  border: 1px solid #E95420;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const TitleBar = styled.div`
  background: linear-gradient(to right, #77216F, #5E2750);
  padding: 8px 16px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 8px;
`;

const WindowButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #1E1E1E;
  font-weight: bold;
  line-height: 0;
  padding: 0;
  transform: translateY(-1px);

  &.close {
    background: #E95420;
    &:hover {
      background: #F27B53;
    }
  }
`;

const CarouselContent = styled.div`
  text-align: center;
  color: #fff;
  padding: 20px;
  padding-bottom: 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E95420;
  border-radius: 4px;
  overflow: hidden;
  background: #1E1E1E;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Description = styled.p`
  margin: 20px 0;
  line-height: 1.6;
  color: #FFFFFF;
  font-size: 16px;
  padding: 0 60px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  color: #E95420;
  font-size: 36px;
  cursor: pointer;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: color 0.2s;
  z-index: 2;
  
  &:hover {
    color: #F27B53;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
`;

const ProgressDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#E95420' : '#666'};
  transition: background 0.3s;
`;

const slides = [
  {
    description: "Enter 'ai' mode to have a natural conversation about my experience and skills. Just type your questions normally! Type 'exit' to go back to normal mode.",
    image: aiImage
  },
  {
    description: "Start by typing 'help' to see all available commands. You can navigate through my portfolio using these core terminal commands.",
    image: helpImage
  },
  {
    description: "If you're a bit more tech savvy I encourage you to use commands like 'cat' to read files. Try 'cat projects.txt', or 'cat skills.txt' to learn more about me.",
    image: catFileImage
  },
  {
    description: "Type 'clear' to clean up your terminal screen anytime.",
    image: clearGif
  },
  {
    description: "Pro Tip: Use tab to auto-complete commands! Start typing a command and hit tab to complete it.",
    image: tabCompleteGif
  },
  {
    description: "Pro Tip: Use up and down arrow keys to quickly access your command history.",
    image: commandHistoryGif
  }
];

const HelpCarousel = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <CarouselContainer>
        <TitleBar>
          <TitleText>How This Works</TitleText>
          <WindowControls>
            <WindowButton className="close" onClick={onClose}>×</WindowButton>
          </WindowControls>
        </TitleBar>
        <CarouselContent>
          <ImageContainer>
            {slides[currentSlide].image ? (
              <SlideImage src={slides[currentSlide].image} alt={`Tutorial step ${currentSlide + 1}`} />
            ) : (
              <div style={{ color: '#666' }}>Image will be added here</div>
            )}
          </ImageContainer>
          <Description>{slides[currentSlide].description}</Description>
          <NavigationButton className="prev" onClick={prevSlide}>←</NavigationButton>
          <NavigationButton className="next" onClick={nextSlide}>→</NavigationButton>
          <ProgressDots>
            {slides.map((_, index) => (
              <Dot key={index} active={currentSlide === index} />
            ))}
          </ProgressDots>
        </CarouselContent>
      </CarouselContainer>
    </>
  );
};

export default HelpCarousel; 
import SVG1 from '../../images/svg-1.svg'
import SVG2 from '../../images/svg-2.svg'
import SVG3 from '../../images/svg-3.svg'


export const homeObjOne = {
    id : 'about',
    lightBg : false,
    lightText : true,
    lightTextDesc : true,
    topLine : 'Premium Bank',
    headLine : 'Unlimited Transactions with zero fees',
    description: `Get access to our exclusive app that allows you to
                  send unlimited transactions without getting charged 
                  any fees.  
                    `,
    buttonLabel : 'Get started',
    imgStart : false,
    img : SVG1,
    alt: 'car',
    dark: true,
    primary  : true,
    darkText : false
};

export const homeObjTwo = {
  id : 'discover',
  lightBg : true,
  lightText : false,
  lightTextDesc : false,
  topLine : 'Unlimited Access',
  headLine : 'Login to your account at any time',
  description: `We have you covered no matter where you are located. All you need
                is an internet connection and a phone or computer.  
                  `,
  buttonLabel : 'Learn More',
  imgStart : true,
  img : SVG2,
  alt: 'car',
  dark: false,
  primary  : false,
  darkText : true
};

export const homeObjThree = {
  id : 'signup',
  lightBg : true,
  lightText : false,
  lightTextDesc : false,
  topLine : 'Join Our Team',
  headLine : 'Creating an account is extremely easy',
  description: `Get everything set up under 10 minutes. All you need to do is add you're ready to go.  
                  `,
  buttonLabel : 'Start Now',
  imgStart : false,
  img : SVG3,
  alt: 'car',
  dark: false,
  primary  : false,
  darkText : true
};
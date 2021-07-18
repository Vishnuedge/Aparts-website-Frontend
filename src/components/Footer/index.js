import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer , FooterWrap  ,FooterLinksContainer,FooterLinksWrapper ,FooterLinkItems , FooterLinkTitle , FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink  } from './FooterElements'
const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                       
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to = '/signin'>How it works</FooterLink>
                                <FooterLink to = '/signin'>Testimonials</FooterLink>
                                <FooterLink to = '/signin'>Carrers</FooterLink>
                                <FooterLink to = '/signin'>Investers</FooterLink>
                                <FooterLink to = '/signin'>Terms of service</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                                <FooterLink to = '/signin'>Contact</FooterLink>
                                <FooterLink to = '/signin'>Support</FooterLink>
                                <FooterLink to = '/signin'>Destination</FooterLink>
                                <FooterLink to = '/signin'>Sponcership</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to = '/signin'>Submit Videos</FooterLink>
                                <FooterLink to = '/signin'>Ambassadors</FooterLink>
                                <FooterLink to = '/signin'>Agency</FooterLink>
                                <FooterLink to = '/signin'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to = '/signin'>Instagram</FooterLink>
                                <FooterLink to = '/signin'>Facebook</FooterLink>
                                <FooterLink to = '/signin'>Youtube</FooterLink>
                                <FooterLink to = '/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Apparts
                        </SocialLogo>
                        <WebsiteRights> Apparts @ { Date.getFullYear} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink aria-label = 'Facebook' href='/' target='_blank'><FaFacebook /></SocialIconLink>
                            <SocialIconLink aria-label = 'Instagram' href='/' target='_blank'><FaInstagram /></SocialIconLink>
                            <SocialIconLink aria-label = 'Twitter' href='/' target='_blank'><FaTwitter /></SocialIconLink>
                            <SocialIconLink aria-label = 'Youtube' href='/' target='_blank'><FaYoutube /></SocialIconLink>
                            <SocialIconLink aria-label = 'Linkedin' href='/' target='_blank'><FaLinkedin /></SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            </FooterContainer>   
        </>
    )
}

export default Footer

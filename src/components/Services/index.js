import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { ServicesContainer , ServicesH1 , ServicesWrapper , ServicesCard , ServicesIcon , ServicesH2 , ServicesP } from './ServicesElements';
const services = () => {
    return (
        <>
        <ServicesContainer id = 'services'>
            <ServicesH1>
                SERVICES    
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expences</ServicesH2>
                    <ServicesP>We help reduce ypur fees and increase your overall revenue.</ServicesP>
                </ServicesCard>    
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere from the world.</ServicesP>
                </ServicesCard>   
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benifits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cashback.</ServicesP>
                </ServicesCard>   
            </ServicesWrapper>      
        </ServicesContainer>  
        </>
    )
}

export default services

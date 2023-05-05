import React from 'react';
import CashOut from '../assets/images/cash-out.png';
import EidSalami from '../assets/images/gift.png';
import Payment from '../assets/images/payment.png';
import MobileRecharge from '../assets/images/recharge.png';
import SendMoney from '../assets/images/send-money.png';
import PayBill from '../assets/images/utilities.png';
import ServiceCard from './ServiceCard';

const Services = (props) => {
    return (
        <div className='grid grid-cols-2 gap-[25px] mx-8 mt-8'>
            <ServiceCard icon={SendMoney} serviceName="Send Money" onClick={() => props.handleServiceClick('send-money')} />
            <ServiceCard icon={CashOut} serviceName="Cash Out" onClick={() => props.handleServiceClick('cash-out')} />
            <ServiceCard icon={MobileRecharge} serviceName="Recharge" onClick={() => props.handleServiceClick('recharge')} />
            <ServiceCard icon={Payment} serviceName="Payment" onClick={() => props.handleServiceClick('payment')} />
            <ServiceCard icon={PayBill} serviceName="Bill Pay" onClick={() => props.handleServiceClick('bill-pay')} />
            <ServiceCard icon={EidSalami} serviceName="Eid Salami" onClick={() => props.handleServiceClick('eid-salami')} />
        </div>
    );
};

export default Services;
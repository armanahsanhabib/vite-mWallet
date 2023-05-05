import { useState } from 'react';
import '../src/assets/css/App.css';
import BillPay from './components/BillPay';
import CashOut from './components/CashOut';
import EidSalami from './components/EidSalami';
import HomeMenu from './components/HomeMenu';
import Payment from './components/Payment';
import ProfileAndBalance from './components/ProfileAndBalance';
import Recharge from './components/Recharge';
import SendMoney from './components/SendMoney';
import Services from './components/Services';

function App() {
  const [activeContent, setActiveContent] = useState('services');

  const handleServiceClick = (serviceName) => {
    setActiveContent(serviceName);
  }

  const handleHomeMenuClick = () => {
    setActiveContent('services');
  }

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className='h-[700px] w-[380px] p-3 bg-gray-50 rounded-3xl border-4 border-rose-400 shadow-lg shadow-rose-300'>
        <div className='border-2 border-gray-200 h-full rounded-3xl flex flex-col justify-between'>
          <div>
            <ProfileAndBalance />
            {
              (activeContent === 'services') ? <Services handleServiceClick={handleServiceClick} /> :
                (activeContent === 'send-money') ? <SendMoney /> :
                  (activeContent === 'cash-out') ? <CashOut /> :
                    (activeContent === 'recharge') ? <Recharge /> :
                      (activeContent === 'payment') ? <Payment /> :
                        (activeContent === 'bill-pay') ? <BillPay /> :
                          (activeContent === 'eid-salami') ? <EidSalami /> :
                            <ErrorPage />
            }
          </div>
          <HomeMenu handleHomeMenuClick={handleHomeMenuClick} />
        </div>
      </div>
    </div>
  )
}

export default App;

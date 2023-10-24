import ServiceItem from './service';
import SectionTitle from '../SectionTitle/SectionTitle';
const services = [
    {
        icon: 'fa fa-trophy',
        title: 'Instant Withdrawal & Deposit',
        description: 'Trustworthy and Speedy Withdrawals, Seamless Deposits'
    },
    {
        icon: 'fa fa-phone',
        title: '24 /7 Customer Service',
        description: 'Support Around the Clock, Always Ready. Click here and chat with us'
    },
    {
        icon: 'fa fa-gift',
        title: 'Referral Bonus',
        description: 'Share the Wealth, Earn Rewards with Every Referral'
    },
]

const Services = () => {
    return (
        <section id="services" className="services-area what-story pt-0 pb-0 fix">

            <div className="container">
            <SectionTitle
                titlefirst={'Best'}
                titleSec={'Service'}
                className={'about-title second-title text-center'}
            />
            <div className="s-about-content " data-wow-delay=".4s">
            <p className='text-center'><b>Welcome to Rocky Book - the world's biggest betting exchange.
We offer a wide range of options to bet on including sportsbook, live cards & live casino</b></p>
</div>
                <div className="row">
                    {
                        services.map((service, index) => {
                            return <ServiceItem
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;
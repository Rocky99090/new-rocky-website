import React from 'react';
import { Accordion } from 'react-bootstrap';
import Breadcrumb from '../../Utilities/Breadcrumb/Breadcrumb';
import AccordionItem from '../../Utilities/AccordionItem/AccordionItem';
import SectionTitle from '../../Utilities/SectionTitle/SectionTitle';

const faqData = [
    {
        title: 'How to Register on RockyBook?',
        bodyText: "To register on RockyBook and begin your sports betting adventure, follow these straightforward steps: Start by contacting us on WhatsApp at 9111191111 for any assistance. Explore our platform using a demo ID to get acquainted. Deposit funds into your account using our secure payment methods and share a screenshot for verification. Upon verification, receive your playing chips. With these chips, you're all set to immerse yourself in the excitement of betting on a wide range of sports events."
    },
        {
            title: "Is sports betting legal?",
            bodyText: "The legality of sports betting varies by jurisdiction. Our company operates within the legal framework of the regions we serve. It's important to understand and follow your local laws and regulations regarding sports betting."
        },
        {
            title: "How can I start betting?",
            bodyText: "To start betting, you need to create an account on our platform. Once registered, you can browse the available sports events, select your bets, and choose your stake. Our user-friendly interface makes the process straightforward."
        },
        {
            title: "What sports can I bet on?",
            bodyText: "We offer a wide range of sports for betting, including popular options like football, basketball, soccer, baseball, tennis, and more. You'll find a comprehensive list of available events and matches on our website."
        },
        {
            title: "How are odds determined?",
            bodyText: "Odds are determined based on various factors, including team strength, player performance, historical data, and market trends. Our odds experts analyze all relevant information to provide accurate and competitive odds for each event."
        },
       
        {
            title: "How do I contact customer support?",
            bodyText: "Our customer support team is available through various channels, including live chat, email, and phone. Click on whatsapp icon to know more"
        },
        {
            title: "Can I bet on mobile devices?",
            bodyText: "Yes, our platform is optimized for mobile betting. You can access our website on your smartphone or tablet to place bets, manage your account, and enjoy a seamless betting experience on the go."
        }
]

const Faqs = () => {
    return (
        <React.Fragment>


            {/* <Faq/> */}
            <section id="faq" className="faq-area ">
                
                <div className="container">
                <div className="col-lg-12">
                 <SectionTitle
                     titleSec='FAQs' />
                 </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <h4 className="mb-30">{'Change Your Style With Rocky Book. Get Your ID and Start Winning Now!'}</h4>
                                <p>{"Welcome to the Frequently Asked Questions (FAQ) section of Rocky Book. We understand that sports betting might raise various questions, especially if you're new to the world of betting or exploring our platform for the first time. This comprehensive FAQ is designed to provide you with clear and informative answers to some of the most common queries you might have."}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <Accordion className="accordion" id="accordionExample" defaultActiveKey="0">
                                    {
                                        faqData.map((data, index) => {
                                            const { title, bodyText } = data;
                                            return (
                                                <AccordionItem
                                                    id={index}
                                                    title={title}
                                                    body={bodyText} />
                                            );
                                        })
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </React.Fragment>
    )
}

export default Faqs;

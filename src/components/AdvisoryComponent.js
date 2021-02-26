import React, { useEffect } from 'react'
import { PUBLIC_URL } from '../conf/conf'

const Advisory = () => {
    useEffect(() => {
        document.title = "Advisory - COVID-19 Statistics";
    }, [])

    return (
        <>
            {/* Symptoms */}
            <section className="pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className="mb-3 font-weight-bolder">Corona Virus Symptoms</h1>
                            <p className="mb-3">It may take upto 14 days to appear the symptoms of corona virus. The main symptoms are</p>
                            <dl>
                                <dt>Fever</dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.</dd>
                                <dt>Coughing</dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).</dd>
                                <dt>Shortness of Breath</dt>
                                <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- Around 1 out of every 6 people who get COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.</dd>
                            </dl>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={ PUBLIC_URL + 'imgs/covid.jpg' } alt="Not found" width="100%" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Prevention */}
            <section className="pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={ PUBLIC_URL + 'imgs/prevention.png' } alt="Not found" width="100%" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h1 className="font-weight-bolder mb-3">Ways to prevent</h1>
                            <dl>
                                <dt>Use Face Masks When In Closed And Crowded Places</dt>
                                <dd className="mb-3">-- Cover coughs and sneezes with tissues.</dd>
                                <dt>Avoid Crowd</dt>
                                <dd className="mb-3">-- As an individual, you can lower your risk of infection by reducing your rate of contact with other people. Avoiding public spaces and unnecessary social gatherings, especially events with large numbers of people or crowds, will lower the chance that you will be exposed to the coronavirus as well as to other infectious diseases like flu.</dd>
                                <dt>Hand Hygiene</dt>
                                <dd className="mb-3">-- Wash hands often with soap and water for at least 20 seconds or use hand sanitizer if soap and water are not available.</dd>
                                <dt>Sick People</dt>
                                <dd>-- Avoid close contact with anyone showing symptoms of respiratory illness.</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <div className="container">
                    <h1 className="mb-3 font-weight-bolder">Frequently Asked Questions</h1>
                    <h3 className="font-weight-bolder">What is Isolation?</h3>
                    <p className="mb-3">Separation of the affected person or suspected of being infected from other healthy people for the duration of the disease infection inappropriate places and health conditions, in order to prevent the transmission of the infection.</p>
                    <h3 className="font-weight-bolder">What is the difference between isolation and quarantine?</h3>
                    <p className="mb-3">Isolation and quarantine are common public health strategies used to help prevent the spread of infectious diseases. Isolation and quarantine keep people who are sick or exposed to illness isolated for a defined period of time to prevent the disease spread</p>
                    <h3 className="font-weight-bolder">Why this Prevention important for me?</h3>
                    <p className="mb-3">You may be asked to: Stay at home Stay away from others Ensure that there are no symptoms of the disease Contact the doctor if you develop symptoms</p>
                    <h3 className="font-weight-bolder">Do Isolation and quarantine prevent infection of others?</h3>
                    <p className="mb-3">Quarantine and isolation are effective measures that are taken to reduce the spread of the disease to all members of society</p>
                    <h3 className="font-weight-bolder">What is Quarantine?</h3>
                    <p>Restricting the activities of healthy people for a period of time as determined by the competent medical authorities</p>
                </div>
            </section>
        </>
    )
}

export default Advisory

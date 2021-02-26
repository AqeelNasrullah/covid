import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { PUBLIC_URL } from '../conf/conf'
import { fetchHistories } from '../store/actions/ActionCreators';

const Home = () => {
    const dispatch = useDispatch();
    const histories = useSelector(state => state.histories);
    const current = `${ new Date().getFullYear() }-${ ((new Date().getMonth() + 1).toString()).length < 2 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1 }-${ new Date().getDate().toString().length < 2 ? '0' + new Date().getDate() : new Date().getDate() }`;
    const dataPk = histories.histories.response?.filter(history => history.day === current)[0];

    useEffect(() => {
        dispatch(fetchHistories());
    }, [dispatch])

    return (
        <>
            {/* Introduction */}
            <section>
                <div className="container pb-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md">
                            <h3 className="font-weight-bolder">COVID 19 Pandemic</h3>
                            <p className="text-justify">The COVID-19 pandemic, too known as the coronavirus pandemic, is a progressing pandemic of coronavirus infection 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It was to begin with distinguished in December 2019 in Wuhan, China. The World Health Organization pronounced the flare-up a Open Health Crisis of Universal Concern in January 2020 and a pandemic in March 2020. As of 25 February 2021, more than 100 million cases have been affirmed, with more than 2.49 million passings credited to COVID-19.</p>
                        </div>
                        <div className="col-12 col-md">
                            <img src={ PUBLIC_URL + 'imgs/covid-map.png' } width="100%" alt="Not found" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section>
                <div className="container">
                    <h3 className="font-weight-bolder mb-3">Pakistan Statistics</h3>
                    
                    { histories.loading ? <p className="text-center"><span className="spinner-grow"></span></p> : (histories.err ? <p className="text-center text-danger"><i className="bi bi-exclamation-circle"></i> {histories.err}</p> : (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="info">
                                    <CardHeader>
                                        <h1 className="font-weight-bolder text-center text-light"><i className="bi bi-thermometer-sun"></i></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bolder text-center text-light mb-0">{ dataPk?.cases.total.toLocaleString() }</h3>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="mb-0 text-center text-light">Total Cases</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="primary">
                                    <CardHeader>
                                        <h1 className="font-weight-bolder text-center text-light"><i className="bi bi-bookmark-plus"></i></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ dataPk?.cases.active.toLocaleString() }</h3>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="mb-0 text-center text-light">Active Cases</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="success">
                                    <CardHeader>
                                        <h1 className="font-weight-bolder text-center text-light"><i className="bi bi-award"></i></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ dataPk?.cases.recovered.toLocaleString() }</h3>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="mb-0 text-center text-light">Recovered</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="danger">
                                    <CardHeader>
                                        <h1 className="font-weight-bolder text-center text-light"><i className="bi bi-emoji-angry"></i></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ dataPk?.deaths.total.toLocaleString() }</h3>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="mb-0 text-center text-light">Total Deaths</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="text-center">---<span className="text-success mr-3">Recovery Rate { Number(((dataPk?.cases.recovered / dataPk?.cases.total) * 100).toFixed(2)) }%</span>-<span className="text-danger ml-3">Death Rate: { Number(((dataPk?.deaths.total / dataPk?.cases.total) * 100).toFixed(2)) }%</span>---</h3>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ dataPk?.cases.new }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">New Cases Today</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ dataPk?.deaths.new }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Deaths Today</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ dataPk?.cases.critical.toLocaleString() }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Critical Cases</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ dataPk?.tests.total.toLocaleString() }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Total Tests</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>)) }
                </div>
            </section>
        </>
    )
}

export default Home

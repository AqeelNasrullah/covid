import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistories } from '../store/actions/ActionCreators';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const country = props.match.params.country;
    const dispatch = useDispatch();
    const histories = useSelector(state => state.histories);
    const current = `${ new Date().getFullYear() }-${ ((new Date().getMonth() + 1).toString()).length < 2 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1 }-${ new Date().getDate().toString().length < 2 ? '0' + new Date().getDate() : new Date().getDate() }`;
    const data = histories.histories.response?.filter(history => history.day === current)[0];

    // Data for graphs
    let xAxis = histories.histories.response?.slice(0, 14).map(({day}) => day);
    let newCases = histories.histories.response?.slice(0,14).map(({cases:{new: newCs}}) => Number(newCs));
    let newDeaths = histories.histories.response?.slice(0,14).map(({deaths:{new: newDts}}) => Number(newDts));

    useEffect(() => {
        document.title = `${country.replace(new RegExp('-', 'g'), ' ').replace(/\b\w/g, s => s.toUpperCase())} - COVID-19 Statistics`;
        dispatch(fetchHistories(country));
    }, [dispatch, country])

    return (
        <>
            {/* Statistics */}
            <section className="pb-5">
                <div className="container">
                    <h3 className="font-weight-bolder mb-3">Country: { data?.country.replace(new RegExp('-', 'g'), ' ') } <small>({ data?.continent.replace(new RegExp('-', 'g'), ' ') })</small> <small className="float-right"><Link className="text-success" to="/global"><i className="bi bi-arrow-left-short"></i> Go back to Global Statistics</Link></small></h3>
                    
                    { histories.loading ? <p className="text-center"><span className="spinner-grow"></span></p> : (histories.err ? <p className="text-center text-danger"><i className="bi bi-exclamation-circle"></i> {histories.err}</p> : (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="info">
                                    <CardHeader>
                                        <h1 className="font-weight-bolder text-center text-light"><i className="bi bi-thermometer-sun"></i></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bolder text-center text-light mb-0">{ data?.cases.total?.toLocaleString() }</h3>
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
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ data?.cases.active?.toLocaleString() }</h3>
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
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ data?.cases.recovered?.toLocaleString() }</h3>
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
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ data?.deaths.total?.toLocaleString() }</h3>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="mb-0 text-center text-light">Total Deaths</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="text-center">---<span className="text-success mr-3">Recovery Rate { Number(((data?.cases.recovered / data?.cases.total) * 100).toFixed(2)) }%</span>-<span className="text-danger ml-3">Death Rate: { Number(((data?.deaths.total / data?.cases.total) * 100).toFixed(2)) }%</span>---</h3>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ data?.cases.new }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">New Cases Today</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ data?.deaths.new }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Deaths Today</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ data?.cases.critical?.toLocaleString() }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Critical Cases</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ data?.tests.total?.toLocaleString() }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Total Tests</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h5 className="text-right">Last Updated at { new Intl.DateTimeFormat('en', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(new Date(data?.time)) }</h5>
                        </div>
                    </div>)) }
                </div>
            </section>

            {/* Graphs */}
            <section>
                <div className="container">
                    { histories.loading ? '' : histories.err ? <p className="text-center mb-0 text-danger"><i className="bi bi-exclamation-circle"></i> { histories.err }</p> : (
                        <div className="row">
                        <div className="col-12 col-md-6">
                            <Line data={{
                                labels: xAxis,
                                datasets: [
                                    {
                                        label: 'Confirmed Cases',
                                        data: newCases,
                                        borderColor: 'green'
                                    }
                                ]
                            }} />
                            <h6 className="text-center mt-3">Covid-19 Cases Situation in { data?.country.replace(new RegExp('-', 'g'), ' ') }</h6>
                        </div>
                        <div className="col-12 col-md-6">
                            <Line data={{
                                labels: xAxis,
                                datasets: [
                                    {
                                        label: 'Deaths',
                                        data: newDeaths,
                                        borderColor: 'red'
                                    }
                                ]
                            }} />
                            <h6 className="text-center mt-3">Covid-19 Deaths Situation in { data?.country.replace(new RegExp('-', 'g'), ' ') }</h6>
                        </div>
                    </div>
                    ) }
                </div>
            </section>
        </>
    )
}

export default Country
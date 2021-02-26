import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Table } from 'reactstrap';
import { fetchStats } from '../store/actions/ActionCreators';

const Global = () => {
    const dispatch = useDispatch();
    const statistics = useSelector(state => state.statistics);
    let stats = statistics.stats?.response?.filter(stat => stat.country !== 'All');
    stats = stats?.sort((a, b) => b.cases.total - a.cases.total);
    const total = statistics.stats.response?.filter(stat => stat.country === 'All')[0];
    let continents = stats?.map(({continent}) => continent);
    continents = [...new Set(continents)];
    continents = continents.sort((a,b) => (a < b) ? -1 : (b < a) ? 1 : 0 );

    useEffect(() => {
        document.title = 'Global - COVID-19 Statistics';
        dispatch(fetchStats());
    }, [dispatch])

    return (
        <>
            <section>
                <div className="container">
                    <h1>Global Statistics</h1>

                    { statistics.loading ? <p className="text-center"><span className="spinner-grow"></span></p> : (statistics.err ? <p className="text-center text-danger"><i className="bi bi-exclamation-circle"></i> {statistics.err}</p> : (
                    <div className="mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="info">
                                    <CardHeader>
                                        <h1 className="font-weight-bolder text-center text-light"><i className="bi bi-thermometer-sun"></i></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bolder text-center text-light mb-0">{ total?.cases.total.toLocaleString() }</h3>
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
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ total?.cases.active.toLocaleString() }</h3>
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
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ total?.cases.recovered.toLocaleString() }</h3>
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
                                        <h3 className="font-weight-bolder text-center mb-0 text-light">{ total?.deaths.total.toLocaleString() }</h3>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="mb-0 text-center text-light">Total Deaths</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        
                        <div className="mb-5">
                            <h3 className="text-center">---<span className="text-success mr-3">Global Recovery Rate { Number(((total?.cases.recovered / total?.cases.total) * 100).toFixed(2)) }%</span>-<span className="text-danger ml-3">Global Death Rate: { Number(((total?.deaths.total / total?.cases.total) * 100).toFixed(2)) }%</span>---</h3>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ total?.cases.new }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">New Cases Today</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ total?.deaths.new }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Deaths Today</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ total?.cases.critical.toLocaleString() }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Critical Cases</p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <Card color="secondary">
                                    <CardBody>
                                        <h1 className="text-center font-weight-bolder text-light">{ total?.tests.total?.toLocaleString() }</h1>
                                    </CardBody>
                                    <CardFooter>
                                        <p className="text-center mb-0 text-light">Total Tests</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>)) }

                    {
                        statistics.loading ? <p className="text-center">Loading...</p> :
                        statistics.err ? <p className="text-center text-danger"><i className="bi bi-exclamation-circle"></i> { statistics.err }</p> : 
                        continents?.map((continent, index_o) => {
                            let index = 0;
                            return <div key={index_o}>
                            <h3>{ continent?.replace(new RegExp('-', 'g'), ' ') }</h3>
                            <Table responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Country</th>
                                        <th>Total Cases</th>
                                        <th>New Cases</th>
                                        <th>Active Cases</th>
                                        <th>Total Deaths</th>
                                        <th>New Deaths</th>
                                        <th>Critical</th>
                                        <th>Total Tests</th>
                                        <th>Population</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { stats?.map((stat, index_i) => {
                                        if (stat.continent === continent) {
                                            index++;
                                            return <tr key={index_i}>
                                                <td>{ index }</td>
                                                <td><Link to={`/stats/country/${ stat.country.toLowerCase() }`}>{ stat.country.replace(new RegExp('-', 'g'), ' ') }</Link></td>
                                                <td>{ stat.cases.total.toLocaleString() }</td>
                                                <td>{ stat.cases.new }</td>
                                                <td>{ stat.cases.active?.toLocaleString() }</td>
                                                <td>{ stat.deaths.total?.toLocaleString() }</td>
                                                <td>{ stat.deaths.new }</td>
                                                <td>{ stat.cases.critical?.toLocaleString() }</td>
                                                <td>{ stat.tests.total?.toLocaleString() }</td>
                                                <td>{ stat.population?.toLocaleString() }</td>
                                            </tr>
                                        }
                                        return true;
                                    }) }
                                </tbody>
                            </Table>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Global

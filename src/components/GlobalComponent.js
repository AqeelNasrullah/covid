import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { fetchStats } from '../store/actions/ActionCreators';

const Global = () => {
    const dispatch = useDispatch();
    const statistics = useSelector(state => state.statistics);
    const stats = statistics.stats?.response?.filter(stat => stat.country !== 'All');
    const total = statistics.stats?.response?.filter(stat => stat.country === 'All')[0];

    useEffect(() => {
        document.title = 'Global - COVID-19 Statistics';
        dispatch(fetchStats());
    }, [dispatch])

    console.log(statistics);

    return (
        <>
            <section>
                <div className="container">
                    <h1>Global Statistics</h1>
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
                                <th>Recovered</th>
                                <th>Critical</th>
                                <th>Total Tests</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody>
                            { statistics.loading ? (
                                <tr>
                                    <td className="text-center" colSpan="11"><i className="spinner-grow spinner-grow-sm"></i></td>
                                </tr>
                            ) : statistics.err ? (
                                <tr>
                                    <td className="text-center text-danger" colSpan="11"><i className="bi bi-exclamation-circle"></i> { statistics.err }</td>
                                </tr>
                            ) : stats.map((stat, index) => {
                                return (<tr key={index}>
                                    <td>{ index + 1 }</td>
                                    <td><Link to={`/stats/country/${ stat.country.toLowerCase() }`}>{ stat.country.replace(new RegExp('-', 'g'), ' ') }</Link></td>
                                    <td>{ stat.cases.total.toLocaleString() }</td>
                                    <td>{ stat.cases.new }</td>
                                    <td>{ stat.cases.active?.toLocaleString() }</td>
                                    <td>{ stat.deaths.total?.toLocaleString() }</td>
                                    <td>{ stat.deaths.new }</td>
                                    <td>{ stat.cases.recovered?.toLocaleString() }</td>
                                    <td>{ stat.cases.critical?.toLocaleString() }</td>
                                    <td>{ stat.tests.total?.toLocaleString() }</td>
                                    <td>{ stat.population?.toLocaleString() }</td>
                                </tr>)
                            }) }
                            { statistics.loading ? (
                                <tr>
                                    <td className="text-center" colSpan="11"></td>
                                </tr>
                            ) : statistics.err ? (
                                <tr>
                                    <td className="text-center text-danger" colSpan="11"></td>
                                </tr>
                            ) : <tr className="bg-secondary text-light">
                                    <td></td>
                                    <td>World</td>
                                    <td>{ total.cases.total.toLocaleString() }</td>
                                    <td>{ total.cases.new }</td>
                                    <td>{ total.cases.active?.toLocaleString() }</td>
                                    <td>{ total.deaths.total?.toLocaleString() }</td>
                                    <td>{ total.deaths.new }</td>
                                    <td>{ total.cases.recovered?.toLocaleString() }</td>
                                    <td>{ total.cases.critical?.toLocaleString() }</td>
                                    <td>{ total.tests.total?.toLocaleString() }</td>
                                    <td>{ total.population?.toLocaleString() }</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    )
}

export default Global

import { useEffect, useState } from "react";

function Dashboard() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="mb-4 mt-2">Dashboard</h3>
                    <div className="col-lg-4">
                        <div className="card p-2 text-center shadow">
                            <h4>Total Topics</h4>
                            <p className="fs-5 fw-muted">4 Major Topics</p>
                            <button className="btn btn-link btn-sm">View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card p-2 text-center shadow">
                            <h4>Total Topics</h4>
                            <p className="fs-5 fw-muted">4 Major Topics</p>
                            <button className="btn btn-link btn-sm">View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card p-2 text-center shadow">
                            <h4>Total Topics</h4>
                            <p className="fs-5 fw-muted">4 Major Topics</p>
                            <button className="btn btn-link btn-sm">View More</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <h3>Total Students</h3>
                        <div className="card shadow mt-2">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Roll Number</th>
                                        <th scope="col">Section</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Tarun</td>
                                        <td>12</td>
                                        <td>45</td>
                                        <td>C</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Anuj</td>
                                        <td>12</td>
                                        <td>5</td>
                                        <td>B</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Abhishek</td>
                                        <td>11</td>
                                        <td>4</td>
                                        <td>A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
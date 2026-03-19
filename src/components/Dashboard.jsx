import { ImAddressBook } from "react-icons/im";
import Chart from "react-apexcharts";

function Dashboard() {
    const series = [
        {
            name: "Sales",
            data: [10, 40, 25, 50, 49, 60, 70]
        }
    ];

    const options = {
        chart: {
            id: "basic-line"
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }
    };

    // This data is for PIE Chart
    const pieSeries = [30, 50, 40];
    const pieOptions = {
        chart: {
            type: "pie",
        },
        labels: ["Fiction", "Non -Fiction", "Others"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="mb-4 mt-2">Dashboard</h3>
                    <div className="col-lg-4">
                        <div className="card p-2 text-center shadow">
                            <h4><ImAddressBook /> Total Topics</h4>
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
                <div className="row py-3">
                    <div className="col-lg-6">
                        <div className="card">
                            <Chart options={options} series={series} type="bar" width="480" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <Chart options={pieOptions} series={pieSeries} type="pie" height="312" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h3>Recent Activity</h3>
                        <div className="card">
                            <ul>
                                <li>Book issued to User A</li>
                                <li>Book return by User B</li>
                                <li>Book returen by User A</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>Quick Action</h3>
                        <div className="row">
                            <div className="col-lg-6 mb-2">
                                <div className="card p-2">
                                    <button className="btn btn-dark btn-sm w-75 ms-auto me-auto">Add Book</button>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="card p-2">
                                    <button className="btn btn-dark btn-sm w-75 ms-auto me-auto">Add Book</button>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="card p-2">
                                    <button className="btn btn-dark btn-sm w-75 ms-auto me-auto">Add Book</button>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="card p-2">
                                    <button className="btn btn-dark btn-sm w-75 ms-auto me-auto">Add Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
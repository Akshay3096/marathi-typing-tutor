import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Practice from "../Practice/Practice";

function Dashboard() {

    return (

        <div className="dashboard">

            <Statistics />

            <Practice />

            <section className="dashboard-section">
                <h2>Typing Box</h2>
            </section>

            <section className="dashboard-section">
                <h2>Keyboard</h2>
            </section>

            <section className="dashboard-section">
                <h2>Finger Guide</h2>
            </section>

        </div>

    );

}

export default Dashboard;
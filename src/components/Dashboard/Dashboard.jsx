import "./Dashboard.css";

import Statistics from "../Statistics/Statistics";
import Controls from "../Controls/Controls";
import Practice from "../Practice/Practice";
import TypingBox from "../TypingBox/TypingBox";

function Dashboard() {

    return (

        <div className="dashboard">

            <Statistics />

            <Controls />

            <Practice />

            <TypingBox />

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
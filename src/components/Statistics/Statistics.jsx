import "./Statistics.css";
import StatCard from "./StatCard/StatCard";

function Statistics() {

    const statistics = [
        {
            title: "WPM",
            value: 0
        },
        {
            title: "CPM",
            value: 0
        },
        {
            title: "Accuracy",
            value: "100%"
        },
        {
            title: "Mistakes",
            value: 0
        },
        {
            title: "Timer",
            value: "05:00"
        }
    ];

    return (

        <section className="statistics">

            {
                statistics.map((item) => (

                    <StatCard
                        key={item.title}
                        title={item.title}
                        value={item.value}
                    />

                ))
            }

        </section>

    );

}

export default Statistics;
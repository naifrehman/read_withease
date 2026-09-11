import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; 

ChartJS.register(ArcElement, Tooltip, Legend);

function Results() {
    const [accuracy, setAccuracy] = React.useState(0);
    const [timeData, setTimeData] = React.useState(0);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/results");
                setAccuracy(response.data.similarityPercentage);
                const randomDuration = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // random duration between 5 and 10 seconds
                setTimeTaken(randomDuration);
            } catch (error) {
                console.error("Error fetching results:", error);
            }
        };
        fetchData();
    }, []);

    const data = { // data for the doughnut chart
        labels: ['Correct', 'Incorrect'],
        datasets: [ 
            {
                data: [accuracy, 100 - accuracy], // accuracy and incorrect percentage
                backgroundColor: ['00FF00', 'FF0000'], // green for correct, and red for incorrect
                borderWidth: 0,
            },
        ],
    };

    const options = { // options for doughnut chart
        responsive: true,
        maintainAspectiveRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex items-start gap-8 mt-6">
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold">Accuracy: {accuracy}%</p>
                    <div className="w-[300px] h-[300px]">
                        <Doughnut data={data} options={options} />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold">Time Taken: {timeData} seconds </p>
                    <div className="w-[300px] h-[270px] flex flex-col items-center justify-content">
                        <FaClock size={250} className="text-gray-270" />
                    </div>
                </div>
            </div>

            <hr className="w-full border-t border-gray-300 my-6" />

            <p className="text-lg font-semibold">
                you got{" "}
                <span className="text-green-500 font-semibold text-lg inline-block px-2 py-5 rounded">{accuracy}%
                </span>{" "}
                out of words right! 
            </p>

            <p className="text-lg font-semibold">
                you took{" "}
                <span className="text-blue-500 font-semibold text-lg inline-block px-2 py-5 rounded">
                    {accuracy}
                </span>{" "}
                coins!
            </p>

            <hr className="w-full border-t border-gray-300 my-6" />
            <br />

            <Link to="/lesson">
                <button className="hover-rise bg-blue-500 text-white text-lg px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition colors">
                    Go Again!
                </button>
            </Link>

        </div>
    );

}

export default Results;
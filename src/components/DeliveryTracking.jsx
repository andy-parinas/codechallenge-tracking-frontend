import { useState } from "react";
import TrackingResult from "./TrackingResult";

const DeliveryTracking = () => {
    const [trackingNumber, setTrackingNumber] = useState("");
    const [trackingResultData, setTrackingResultData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const checkTracking = async () => {
        try {
            setError(false);
            setLoading(true);
            const res = await fetch(
                `http://localhost:8000/api/delivery-status/${trackingNumber}`
            );

            const data = await res.json();

            setTrackingResultData(data);
        } catch (error) {
            console.log("error", error);
            setError(true);
            setTrackingResultData(null);
        } finally {
            setLoading(false);
        }
    };

    const displayTrackinResult = () => {
        if (trackingResultData && !error) {
            return <TrackingResult result={trackingResultData} />;
        } else if (error) {
            return (
                <div className="text-red-500 font-bold">
                    {" "}
                    ooops something went wrong!{" "}
                </div>
            );
        } else {
            return "";
        }
    };

    return (
        <section className="py-4">
            <div className="container m-auto flex justify-center items-center gap-x-3 w-[600px]">
                <input
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="border border-indigo-500 py-2 px-1 flex-1 rounded-md"
                    type="text"
                />
                <button
                    onClick={checkTracking}
                    className="border bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg w-[100px]"
                >
                    {loading ? "Tracking" : "Track"}
                </button>
            </div>
            <div className="container m-auto w-[600px] mt-5">
                {displayTrackinResult()}
            </div>
        </section>
    );
};

export default DeliveryTracking;

import { useState } from "react";

const DeliveryTracking = () => {
    const [trackingNumber, setTrackingNumber] = useState("");
    const [trackingResult, setTrackingResult] = useState(null);

    const checkTracking = () => {
        console.log("Track", trackingNumber);
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
                    className="border bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg"
                >
                    Track
                </button>
            </div>
            <div className="container m-auto w-[600px] mt-5">
                Tracking Result Here
            </div>
        </section>
    );
};

export default DeliveryTracking;

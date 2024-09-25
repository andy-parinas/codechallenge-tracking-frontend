/* eslint-disable react/prop-types */

const statusColor = {
    ORDER_RECEIVED: "violet",
    SHIPPED: "blue",
    IN_TRANSIT: "orange",
    OUT_FOR_DELIVERY: "yellow",
    DELIVERED: "green",
};

const TrackingResult = ({ result }) => {
    return (
        <div className="flex flex-col gap-y-3 border border-solid border-indigo-200 bg-indigo-50 rounded-md shadow-md px-3 py-5">
            <div className="flex items-center gap-x-2">
                <span className="font-medium text-lg text-indigo-950">
                    Tracking Number:{" "}
                </span>
                <span className="text-base"> {result.trackingNumber} </span>
            </div>
            <div className="flex items-center gap-x-2">
                <span className="font-medium text-lg text-indigo-950">
                    Tracking Status:{" "}
                </span>
                <span
                    className={`bg-${
                        statusColor[result.status.key]
                    }-500 px-2 py-1 rounded-lg text-white`}
                >
                    {result.status.value}{" "}
                </span>
            </div>
            <div className="flex items-center gap-x-2">
                <span className="font-medium text-lg text-indigo-950">
                    Estimated Delivery Date:{" "}
                </span>
                <span>{result.estimatedDeliveryDate} </span>
            </div>
        </div>
    );
};

export default TrackingResult;

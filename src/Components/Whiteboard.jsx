

export default function Whiteboard({receivedData}) {


    return (
        <div className="whiteboard">
            {receivedData && (
                <div>
                    <h1>{receivedData.stands}</h1>
                    <h1>{receivedData.guards}</h1>
                </div>
            )}

            {/* <h1>{receivedData.guards}</h1> */}

            {/* <div className="name">
                dd
            </div>
            <div className="whiteBoardTimeStamps">
                m
                <div className="timeStamp">
                    12:00   
                </div>
            </div> */}
        </div>
    )
}
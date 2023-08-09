

export default function Whiteboard({receivedData}) {

    // define a number of stands

    // define a number of guards

    // create div based on the number of guards
    return (
        <div className="whiteboard">
            {receivedData && (
                <div>
                    <h1>{receivedData.stands}</h1>
                    <h1>{receivedData.guards}</h1>
                </div>
            )}
        
        </div>
    )
}
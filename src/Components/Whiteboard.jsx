

export default function Whiteboard({receivedData}) {

    // define a number of stands
    const stand = receivedData && receivedData.stands

    // define a number of guards

    // create div based on the number of guards

    // assign the guards a stand

    // create a timer to cue rotation

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
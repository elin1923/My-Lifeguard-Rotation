import { render } from "@testing-library/react";


export default function Whiteboard({receivedData}) {

    // define a number of stands
    const stand = receivedData && receivedData.stands

    // define a number of guards
    const guard = receivedData && receivedData.guards

    // create div based on the number of guards
    const renderTD = () => {
        if (stand) {
          const data = [];
          const row = stand + guard;
          for (let i = 0; i < row; i++) {
            data.push(
            <tr key={i}>
              <th><input></input></th>
            </tr>);          
          }
          return data;
        }
        return null;
      };

    // assign the guards a stand

    // create a timer to cue rotation

    return (
        <div className="whiteboard">
            <div>
              <h1>{stand}</h1>
            </div>
            <div>
              <h1>{guard}</h1>
            </div>

            <div>
              <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
                {renderTD()}
              </table>
            </div>

            {/* {renderDivs} */}
        </div>
    )
}
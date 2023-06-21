import React from 'react';

const OrderTable = () => {
  const jsonData = {
    "orders": [
      {
        "order": "Order1",
        "stages": [
          {
            "stage": "stage1",
            "machines": [
              {
                "machine": "stage1Mac1",
                "capacity": 20,
                "1 May":8000,
                "2 May":5000,
              },
              {
                "machine": "stage1Mac2",
                "capacity": 40,
                "1 May":8000,
                "2 May":5000,
              }
            ]
          },
          {
            "stage": "stage2",
            "machines": [
              {
                "machine": "stage2Mac1",
                "capacity": 10,
                "1 May":8000,
                "2 May":5000,
              },
              {
                "machine": "stage2Mac2",
                "capacity": 20,
                "1 May":8000,
                "2 May":5000,
              }
            ]
          }
        ]
      },
      {
        "order": "Order2",
        "stages": [
          {
            "stage": "stage1",
            "machines": [
              {
                "machine": "stage1Mac1",
                "capacity": 20,
                "1 May":8000,
                "2 May":5000,
              },
              {
                "machine": "stage1Mac2",
                "capacity": 40,
                "1 May":8000,
                "2 May":5000,
              }
            ]
          },
          {
            "stage": "stage2",
            "machines": [
              {
                "machine": "stage2Mac1",
                "capacity": 10,
                "1 May":8000,
                "2 May":5000,
              },
              {
                "machine": "stage2Mac2",
                "capacity": 20,
                "1 May":7000,
                "2 May":5000,
              }
            ]
          },
          {
            "stage": "stage3",
            "machines": [
              {
                "machine": "stage1Mac1",
                "capacity": 20,
                "1 May":8000,
                "2 May":5000,
              },
              // {
              //   "machine": "stage1Mac2",
              //   "capacity": 40
              // }
            ]
          },
        ]
      }
    ]
  }
  ;

    // Calculate the total number of machines
    const getTotalMachines = (orders) => {
      let totalMachines = 0;
        for (const stage of orders.stages) {
          totalMachines += stage.machines.length;
        }
      return totalMachines;
    };
  
  return (
    <table>
      <thead>
        <tr>
          <th>Order</th>
          <th>Stages</th>
          <th>Machines</th>
          <th>Capacity</th>
          <th>1 May</th>
          <th>2 May</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.orders.map((order, orderIndex) => (
          <React.Fragment key={orderIndex}>
            {order.stages.map((stage, stageIndex) => (     
              <React.Fragment key={stageIndex}>  
                {stage.machines.map((machine, machineIndex) => (
                  <tr key={machineIndex}>
                    { stageIndex === 0 && machineIndex === 0 && (
                      <td rowSpan={getTotalMachines(order)}>
                        {order.order}
                      </td>
                    ) }
                    { machineIndex === 0 && (
                      <td rowSpan={stage.machines.length}>{stage.stage}</td>
                    )}
                   {
                    Object.keys(machine).map((column, colIndex)=>(
                      <td>{machine[column]}</td>
                    ))
                   }
                     {/* <td>{machine.machine}</td>
                    <td>{machine.capacity}</td>
                    <td>{machine["1 May"]}</td> */}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </tbody>
      <style>
        {`
          table {
            border-collapse: collapse;
            width: 100%;
          }

          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        `}
      </style>
    </table>
  );
};

export default OrderTable;

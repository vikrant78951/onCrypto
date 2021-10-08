export default function (orders) {
  const tableHeader = [];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>icon</th>
            <th>name</th>
            <th>holding</th>
            <th>rate per coin</th>
            <th>Transaction fee </th>
            <th>Total Invested</th>
            <th>current market rate</th>
            <th>Current value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>
              <img src="" alt="coin" />
            </td>
            <td>Dash Coin</td>
            <td>1000</td>
            <td>5</td>
            <td>0.2</td>
            <td>5000</td>
            <td>7</td>
            <td>7000</td>
          </tr>
        </tbody>
        <tfooter>
          <p>paginations for table</p>
          <button> update button</button>
        </tfooter>
      </table>
    </>
  );
}

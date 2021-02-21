import axios from 'axios'

const All = ({data}) => {
 
  const keys = Object.keys(data);

  return(
    <div className="content">
      <table>
        <tbody>
        <tr>
          <th>Currency</th>
          <th>Low</th>
          <th>Current</th>
          <th>High</th>
        </tr>
        {keys.map(item => {
          return <tr>
            <td>{data[item].base_unit}</td>
            <td>{data[item].low}</td>
            <td>{data[item].last}</td>
            <td>{data[item].high}</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>

  )
}

export default All;
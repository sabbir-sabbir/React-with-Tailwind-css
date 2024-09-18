
function Table() {


    return (
      <>
        <table className='border-collapse border border-slate-500'>
          <thead>
            <tr>
              <th className='border-4 border-slate-600'>State</th>
              <th className='border-4 border-slate-600'>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-red-500'>America</td>
              <td className='border border-red-500' >New York</td>
            </tr>
            <tr>
              <td className='border border-slate-900' >Bangladesh</td>
              <td className='border border-slate-900' >Dhaka</td>
            </tr>
            <tr>
             <td className='border border-slate-900' >Indinesia</td>
             <td className='border border-slate-900' >Jakarta</td>
            </tr>
          </tbody>
  
        </table>
  
      </>
    )
  }
  export default Table;
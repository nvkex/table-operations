import React from 'react';
import './Stage2.css';

export default function Stage2() {
  return (
    <div className="stage2">
      <div>
        Select two tables
        <hr />
      </div>

      <table>
        <tr>
          <td>
            <input type="checkbox" value="Table1" />&nbsp;
            <label>Table1</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" value="Table2" />&nbsp;
            <label>Table2</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" value="Table3" />&nbsp;
            <label>Table3</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" value="Table3" />&nbsp;
            <label>Table3</label>
          </td>
        </tr>
      </table>

    </div>
  );
}

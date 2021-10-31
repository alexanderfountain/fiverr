import * as React from "react";

const Grid = ({ blok }) => (
  <div>
    <h2>Columns</h2>
    {console.log(blok.columns)}
    {blok.columns.map((column, index) => (
      <div>
        {console.log(column)}
        <h2>tester</h2>
      </div>
    ))}
  </div>
);

export default Grid;

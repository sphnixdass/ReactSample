import React, { Component } from 'react';
import DataTable from './DataTable';



// Decorate with Bootstrap CSS

class Form1 extends Component {


  render() {

    const headings = [
          'Product name',
          'SKU',
          'Stock quantity',
          'Wholesale cost',
          'Sale price',
          'Quantity sold',
          'Gross sales',
          'Net sales',
          'Notes',
        ];

        const rows = [
          [
            'Red and black plaid scarf with thin red stripes and thick black stripes',
            124689325,
            28,
            '$35.00',
            '$60.00',
            12,
            '$720.00',
            '$300.00',
            '',
          ],
          [
            'Yellow plaid scarf',
            124689389,
            0,
            '$35.00',
            '$60.00',
            20,
            '$1200.00',
            '$500.00',
            'Currently on back order by the supplier. Do not place another order to restock.',
          ],
          [
            'Blue plaid scarf',
            124689332,
            30,
            '$35.00',
            '$60.00',
            10,
            '$600.00',
            '$250.00',
            '',
          ],
          [
            'Pink plaid scarf',
            124689376,
            16,
            '$35.00',
            '$60.00',
            4,
            '$240.00',
            '$100.00',
            '',
          ],
    ];

    return (
      <div className="App">
      <DataTable headings={headings} rows={rows} />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default Form1;

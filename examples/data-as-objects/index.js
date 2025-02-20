import React from 'react';
import MUIDataTable from '../../src/';

class Example extends React.Component {
  state = {
    counter: 0,
    data: [
      {
        name: 'Gabby George',
        title: 'Business Analyst',
        location: 'Minneapolis',
        age: 30,
        salary: '$100,000',
        phone: { home: '867-5309', cell: '123-4567' },
      },
      {
        name: 'Aiden Lloyd',
        title: 'Business Consultant',
        location: 'Dallas',
        age: 55,
        salary: '$200,000',
        phone: { home: '867-5310', cell: '123-4568' },
      },
      {
        name: 'Jaden Collins',
        title: 'Attorney',
        location: 'Santa Ana',
        age: 27,
        salary: '$500,000',
        phone: { home: '867-5311', cell: '123-4569' },
      },
      {
        name: 'Franky Rees',
        title: 'Business Analyst',
        location: 'St. Petersburg',
        age: 22,
        salary: '$50,000',
        phone: { home: '867-5312', cell: '123-4569' },
      },
    ],
  };

  rerender = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const columns = [
      {
        name: 'name',
        label: 'Name',
        options: {
          filter: true,
          display: 'excluded',
        },
      },
      {
        name: 'title',
        label: 'Modified Title Label',
        options: {
          filter: true,
        },
      },
      {
        name: 'location',
        label: 'Location',
        options: {
          filter: false,
        },
      },
      {
        name: 'age',
        Label: 'Age',
        options: {
          filter: true,
        },
      },
      {
        name: 'salary',
        label: 'Salary',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'phone.home',
        label: 'Home Phone',
      },
      {
        name: 'phone.cell',
        label: 'Cell Phone #',
      },
      {
        name: 'phone2.home',
        label: 'Not An Attribute',
      },
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'vertical',
      enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
    };

    return (
      <React.Fragment>
        <button onClick={this.rerender}>Re-render - {this.state.counter}</button>
        <MUIDataTable title={'ACME Employee list'} data={this.state.data} columns={columns} options={options} />
      </React.Fragment>
    );
  }
}

export default Example;

import React from 'react';
import ReactDom from 'react-dom'
import DataProvider from './DataProvider';
import Table from './Table'
import Form from './Form'

const App = () => (
    <React.Fragment>
        <DataProvider endpoint='api/lead/'
            render={data => <Table data={data} />} />
        <Form endpoint="api/lead/" />
    </React.Fragment>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDom.render(<App />, wrapper) : null;
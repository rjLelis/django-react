import React from 'react';
import ReactDom from 'react-dom'
import DataProvider from './DataProvider';
import Table from './Table'

const App = () => (
    <DataProvider endpoint='api/lead'
        render={data => <Table data={data} />}/ >
)

const wrapper = document.getElementById('app');

wrapper ? ReactDom.render(<App />, wrapper) : null;
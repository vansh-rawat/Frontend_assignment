import React from 'react';
import AddFieldForm from '../components/AddFieldForm';
import DisplayFields from '../components/DisplayFields';
import AddedFields from '../components/AddedFields';

const App = () => {
    return (
        <div>
            <h1>Add Fields Dynamically</h1>
            <AddFieldForm />
            <DisplayFields />
            <AddedFields />
        </div>
    );
};

export default App;

import React from 'react';
import { connect } from 'react-redux';

const DisplayFields = ({ fields }) => {
    return (
        <div>
            {fields.map((field, index) => (
                <div key={index}>
                    <label>{field.fieldName}</label>
                    {/* Render input fields based on field type */}
                    {field.fieldType === 'Text Box' && <input type="text" maxLength={field.maxLength} required={field.mandatory} />}
                    {field.fieldType === 'Dropdown' && <select>{field.fieldData.split(',').map((option, index) => <option key={index}>{option}</option>)}</select>}
                    {field.fieldType === 'Date Picker' && <input type="date" />}
                </div>
            ))}
            <button>Submit</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    fields: state.fields // Assuming field data is stored in Redux state
});

export default connect(mapStateToProps)(DisplayFields);

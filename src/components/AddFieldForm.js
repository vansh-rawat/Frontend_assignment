import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addField } from '../actions/fieldActions';
import '../styles/AddFieldForm.css';

const AddFieldForm = ({ addField, fields }) => {
    const [fieldType, setFieldType] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldDataType, setFieldDataType] = useState('');
    const [fieldValidation, setFieldValidation] = useState('');
    const [fieldData, setFieldData] = useState('');
    const [maxLength, setMaxLength] = useState('');
    const [mandatory, setMandatory] = useState(false);

    const handleAddField = () => {
        // Validate input fields

        // Dispatch action to add field
        addField({
            fieldName,
            fieldType,
            fieldDataType,
            fieldValidation,
            fieldData,
            maxLength,
            mandatory
        });

        // Clear input fields
        setFieldName('');
        setFieldDataType('');
        setFieldValidation('');
        setFieldData('');
        setMaxLength('');
        setMandatory(false);
    };

    return (
        <div>
            <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
                <option value="">Select Field Type</option>
                <option value="Text Box">Text Box</option>
                <option value="Dropdown">Dropdown</option>
                <option value="Date Picker">Date Picker</option>
            </select>
            <input type="text" placeholder="Field Name" value={fieldName} onChange={(e) => setFieldName(e.target.value)} />
            <input type="text" placeholder="Field Data Type" value={fieldDataType} onChange={(e) => setFieldDataType(e.target.value)} />
            <input type="text" placeholder="Field Validation" value={fieldValidation} onChange={(e) => setFieldValidation(e.target.value)} />
            <input type="text" placeholder="Field Data" value={fieldData} onChange={(e) => setFieldData(e.target.value)} />
            <input type="number" placeholder="Max Length" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
            <label>
                Mandatory:
                <input type="checkbox" checked={mandatory} onChange={() => setMandatory(!mandatory)} />
            </label>
            <button onClick={handleAddField}>Add Field</button>

            <div>
                <h2>Fields Added</h2>
                <ul>
                    {fields.map((field, index) => (
                        <li key={index}>{field.fieldName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    fields: state.fields
});

export default connect(mapStateToProps, { addField })(AddFieldForm);

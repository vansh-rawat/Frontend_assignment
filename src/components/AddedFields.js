import React from 'react';
import { connect } from 'react-redux';

const AddedFields = ({ fields }) => {
    return (
        <div>
            <h2>Fields Added</h2>
            <ul>
                {fields.map((field, index) => (
                    <li key={index}>
                        <strong>Field Name:</strong> {field.fieldName}, <strong>Type:</strong> {field.fieldType}, <strong>Data Type:</strong> {field.fieldDataType}, <strong>Validation:</strong> {field.fieldValidation}, <strong>Data:</strong> {field.fieldData}, <strong>Max Length:</strong> {field.maxLength}, <strong>Mandatory:</strong> {field.mandatory ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    fields: state.fields
});

export default connect(mapStateToProps)(AddedFields);

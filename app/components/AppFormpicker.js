import React from 'react';
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function AppFormpicker({item, name, placeholder}) {
    const { errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
        <AppPicker
        items= {items}
        onSelect={(item)=> setFieldValue(name, item)}
        placeholder = {placeholder}
        selectedItem = {values[name]}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
      
        </>
    );
}

export default AppFormpicker;
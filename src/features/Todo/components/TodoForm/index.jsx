// import InputField from '../../../../components/FormControl/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControl/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

const schema = yup.object({
    title: yup.string()
    .required('lỗi rồi anh trai ơi')
    .min(5,'title too short')
  }).required();

function TodoForm(props) {

    const form = useForm({
        defaultValues: {
            title: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (data, e) =>{
        console.log("TODO FORM:", data);
        const { onSubmit } = props;
        if(onSubmit)
        {
            onSubmit(data);
        }
        e.target.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            Todo Form
            <InputField name='title' label='todo' form={form}  />      
        </form>
    );
}

export default TodoForm;
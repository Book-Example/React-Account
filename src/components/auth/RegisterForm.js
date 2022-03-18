import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeField, initializeForm } from "../../modules/auth";
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=> ({
        form: auth.register
    }));
    // input 변경 Event Handler
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    // Form 등록 Event Handler
    const onSubmit = e => {
        e.preventDefault();
        //TODO
    };

    // Component 가 처음 Rendering 될 떄 form 값을 initialize 함
    useEffect(()=> {
        dispatch(initializeForm('register'));
    },[dispatch]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Menu } from '../../components/Profile/Menu';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/actions/user';
import Input from '../../components/UI/Input/Input';
import { updateObject, checkValidity } from '../../utility/utility';
import Spinner from '../../components/UI/Spinner/Spinner';

export const EditProfile = props => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.auth.userId);
    const user = useSelector(state => state.user.user);

    React.useEffect(() => {
        if (userId) {
            return dispatch(userActions.fetchUser(userId));
        }
    }, [dispatch]);

    const [orderForm, setOrderForm] = React.useState({
        name: {
            elementType: 'input',
            label: 'First name',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        lastname: {
            elementType: 'input',
            label: 'Last name',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Lastname'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            label: 'E-mail',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            label: 'Password',
            hint: 'Password should have more than 5 symbols',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        }
    });
    const [formIsValid, setFormIsValid] = React.useState(false);

    const editProfileHandler = event => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const user = {
            userId: userId,
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            password: formData.password,
        }
        //CHECK IT
        dispatch(userActions.editUser(user));
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                orderForm[inputIdentifier].validation
            ),
            touched: true
        });
        const updatedOrderForm = updateObject(orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    };

    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }
    let form = (
        <form onSubmit={editProfileHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    label={formElement.config.label}
                    hint={formElement.config.hint}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={event => inputChangedHandler(event, formElement.id)}
                />
            ))}
            <div class="personal-data--tools">
                <button disabled={!formIsValid} class="bt">Save</button>
                <Link to="/account"><span class="link-cancel">Cancel</span></Link>
            </div>

        </form>
    );
    if (props.loading) {
        form = <Spinner />;
    }
    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <h1>Edit profile</h1>

                    <div class="cabinet">
                        <div class="cabinet-content">

                            <div class="personal-data">
                                <div class="personal-data--section">
                                    {form}
                                </div>
                            </div>

                        </div>
                        <Menu />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

//     const firstRender = React.useRef(true);
//     let history = useHistory();

//     const dispatch = useDispatch();

//     const userId = useSelector(state => state.auth.userId);
//     const user = useSelector(state => state.user.user);

//     const [editName, setEditName] = React.useState(user.name);
//     const [editNameError, setEditNameError] = React.useState(null);

//     const [editLastName, setEditLastName] = React.useState(user.lastname);

//     const [editEmail, setEditEmail] = React.useState(user.email);
//     const [editEmailError, setEditEmailError] = React.useState(null);

//     const [editPassword, setEditPassword] = React.useState(user.password);
//     const [editConfirmPassword, setEditConfirmPassword] = React.useState(user.password);
//     const [disable, setDisabled] = React.useState(true);

//     React.useEffect(() => {
//         if (firstRender.current) {
//             firstRender.current = false
//             return
//         }
//         setDisabled(formValidation())
//     }, [editName])


//     React.useEffect(() => {
//         if (userId) {
//             return dispatch(userActions.fetchUser(userId));
//         }
//     }, [dispatch]);




//     const formValidation = () => {
//         if (editName === "") {
//             setEditNameError('Name cant be blank!')
//             return true
//         } else {
//             setEditNameError(null)
//             return false
//         }
//     }

//     const handleEditUser = async () => {
//         await dispatch(userActions.editUser(userId, editName, editLastName, editEmail, editPassword, editConfirmPassword))
//         history.push('/account');
//     }


//     return (
//         <>
//             <Header onSearchProduct={null} />
//             <div class="page-body">
//                 <div class="container">
//                     <h1>Profile</h1>

//                     <div class="cabinet">
//                         <div class="cabinet-content">

//                             <div class="personal-data">

//                                 <div class="personal-data--section">
//                                     <div class="personal-data--item">
//                                         <div class="label">First name</div>
//                                         <span class="error">{editNameError ? editNameError : ''}</span>
//                                         <input type="text" onChange={e => setEditName(e.target.value)} value={editName} />
//                                     </div>
//                                     <div class="personal-data--item">
//                                         <div class="label">Last name</div>

//                                         <input type="text" onChange={e => setEditLastName(e.target.value)} value={editLastName} />
//                                     </div>
//                                     <div class="personal-data--item">
//                                         <div class="label">Email</div>
//                                         <span class="error">{editEmailError ? editEmailError : ''}</span>
//                                         <input type="text" onChange={e => setEditEmail(e.target.value)} value={editEmail} />
//                                     </div>
//                                 </div>

//                                 <div class="personal-data--section">
//                                     <div class="personal-data--item">
//                                         <div class="label">New password</div>
//                                         <input type="password" onChange={e => setEditPassword(e.target.value)} value={editPassword} />
//                                         <div class="hint">Password should have more than 5 symbols</div>
//                                     </div>
//                                     <div class="personal-data--item">
//                                         <div class="label">Confirm new password</div>
//                                         <input type="password" onChange={e => setEditConfirmPassword(e.target.value)} value={editConfirmPassword} />
//                                         <div class="hint">Password should have more than 5 symbols</div>
//                                     </div>
//                                 </div>

//                                 <div class="personal-data--tools">
//                                     <button disabled={disable} onClick={handleEditUser} class="bt">Save</button>
//                                     <Link to="/account"><span class="link-cancel">Cancel</span></Link>
//                                 </div>

//                             </div>

//                         </div>
//                         <Menu />
//                     </div>

//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }


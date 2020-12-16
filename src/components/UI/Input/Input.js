import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');

    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <span class="error">Please enter a valid value!</span>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                label={props.label}
                hint={props.hint}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                label={props.label}
                hint={props.hint}
                value={props.value}
                onChange={props.changed} />;
    }


    return (
        <div class="personal-data--item">

            <div class="label">{props.label}</div>

            {inputElement}
            {validationError}
            {props.hint ? <div class="hint">{props.hint}</div> : ''}

        </div>
    );

};

export default input;

export function validateUserName() {
    const { props, state } = this.current;
    console.log('validateUserName', state);
    if (state.value.length < 6) {
        this.current.setState({ error: props.name + ' min lenght should be 6.' });
    }
}


export class Formvalidations {

    validateUserName() {
        const { props, state } = this.current;
        console.log('validateUserName', state);
        if (state.value.length < 6) {
            this.current.setState({ error: props.name + ' min lenght should be 6.' });
        }
    }


    validatePassword(field: any) {
        const { props, state } = this.current;
        console.log('validateUserName', state);
        if (state.value.length < 6) {
            this.current.setState({ error: props.name + ' min lenght should be 6.' });
        }
    }
    checkPasswords(field1: any, field2: any) {
        if (field1.value === field2.value) {
            field1.error = field2.error = field1.name + 'and ' + field2.name + ' should be same.'
        }
    }

    validateEmail(field: any) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2-4}$/;
        if (!emailPattern.test(field.value))
            field.error = 'Not valid email.';

    }
}


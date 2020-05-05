import React, { Component, createRef } from 'react';
import { View } from 'react-native';
import Form from '../../components/form/form';
import { withDialog } from '../../base/hoc/dialog/dialog.component';
import { connect } from 'react-redux';
import RNTextInput from '../../components/input/textinput';
import { Formvalidations } from '../../util/validations';

const WithDialog = withDialog(View);
const validations = new Formvalidations();
class Login extends Component<any, any>{
    private userRef = createRef<RNTextInput>();
    private passwordRef = createRef<RNTextInput>();
    render() {
        return <WithDialog>
            <Form title='Form Title'>
                <RNTextInput
                    ref={this.userRef}
                    name='username'
                    validate={validations.validateUserName.bind(this.userRef)}
                    onBlur={() => console.log('On Blur')}
                    onFocus={() => console.log('On Blur')} />
                <RNTextInput
                    ref={this.passwordRef}
                    name='password'
                    validate={validations.validatePassword.bind(this.passwordRef)}
                    onBlur={() => console.log('On Blur')}
                    onFocus={() => console.log('On Blur')}
                    secureTextEntry />
            </Form>
        </WithDialog>
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDiapatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDiapatchToProps)(Login)
import React from 'react';
import Form from './../../components/form/form-container';
import Fieldset from './../../components/form/fieldset';
import Checkbox from './../../components/form/checkbox';
import Submit from './../../components/form/submit';
import Label from './../../components/form/label';
import Legend from './../../components/form/legend';

const Home = () => {
    return(
        <div>
            <h1>hello world!</h1>
            <Form>
                <Fieldset>      
                    <Legend text="Form legend" />
                    <Label for="checkbox" text="checkbox label" />              
                    <Checkbox id="checkbox" name="checkbox" value="checkbox" />
                    <Submit value="Send" />                
                </Fieldset>
            </Form>
        </div>
    );
}

export default Home;

import Form from '../form/Form'

const fields = [
    {name: 'university', type: 'text', label: 'University', placeholder: 'Enter your university'},
    {name: 'major', type: 'text', label: 'Major', placeholder: 'Enter your Major'},
    {name: 'gpa', type: 'number', label: 'GPA', placeholder: 'Enter your GPA'}
]

function Education () {
    return (
        <Form heading={{name: 'Education', icon: ''}} content={fields} />
    );
}

export default Education;
import Form from '../form/Form'

const fields = [
    {name: 'skillName', type: 'text', label: 'First Name', placeholder: 'Enter your first name'},   
    {name: 'yearsOfExperience', type: 'number', label: 'Years of Experience', placeholder: 'Enter your Years of Experience'},
    { name: 'description', type: 'textarea', label: 'Description', placeholder: 'Enter a brief description or additional details about the skill' }
]

function Skills () {
    return (
        <Form heading={{name: 'Skills', icon: ''}} content={fields} />
    );
}

export default Skills;
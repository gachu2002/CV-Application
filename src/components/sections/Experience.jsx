import Form from '../form/Form'

const fields = [
    {name: 'jobTitle', type: 'text', label: 'Job Title', placeholder: 'Enter your job title'},
    {name: 'company', type: 'text', label: 'Company', placeholder: 'Enter your company'},
    {name: 'duration', type: 'number', label: 'Duration', placeholder: 'Enter your worknig duration'}
]

function Experience () {
    return (
        <Form heading={{name: 'Experience', icon: ''}} content={fields} />
    );
}

export default Experience;
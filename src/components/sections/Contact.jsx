import Form from '../form/Form'

const fields = [
    {name: 'phone', type: 'tel', label: 'Phone Number', placeholder: 'Enter your phone number'},
    {name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email'},
    {name: 'linkedin', type: 'url', label: 'LinkedIn', placeholder: 'Enter your LinkedIn'},
    {name: 'github', type: 'url', label: 'Github', placeholder: 'Enter your Github'}
]


function Contact () {
    return (
        <Form heading={{name: 'Contact', icon: ''}} content={fields} />
    );
}

export default Contact;
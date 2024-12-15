import Form from '../form/Form'

const fields = [
    {name: 'firsNname', type: 'text', label: 'First Name', placeholder: 'Enter your first name'},
    {name: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Enter your last name'},
    {name: 'niche', type: 'text', label: 'Niche', placeholder: 'Enter your niche'},
    {name: 'bio', type: 'text', label: 'Bio', placeholder: 'Enter your bio'}
]


function Profile() {
    return (
        <Form heading={{name: 'Profile', icon: ''}} content={fields} />
    );
}

export default Profile;
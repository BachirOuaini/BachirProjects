import './stylesheet.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Submitform = () => {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const navigate = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();
        const Post = { Fname, Lname, Email, Message };
        fetch('http://localhost:8000/Post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Post)
        }).then(() => {
            navigate(-1);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='Body'>
            <title>form</title>
            <div className='InnerBody'>
                <h1>The Post</h1>
                <br />
                <form onSubmit={HandleSubmit}>
                    <div className='names1'>
                        <label htmlFor="Fname">First Name</label>
                        <input type="text" name="Fname" id="Fname" required value={Fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className='names2'>
                        <label htmlFor="Lname">Last Name</label>
                        <input type="text" name="Lname" id="Lname" required value={Lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <br />
                    <div className='mail'>
                        <label htmlFor="mail">Email Address</label>
                        <input type="email" name="mail" id="mail" required value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="Message">
                    <label htmlFor="Message" id="labe" className="labe">Message</label>
                    <textarea className="Message" id="Message" required value={Message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Submitform;

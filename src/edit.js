import './stylesheetedit.css'
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [data1, setData] = useState(null);
    const [values, setValues] = useState({ Fname: '', Lname: '', Email: '', Message: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/Post')
            .then(res => res.json())
            .then(data2 => setData(data2))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (id) {
            const postData = data1?.find(data => data.id === id);
            if (postData) {
                setValues({
                    Fname: postData.Fname,
                    Lname: postData.Lname,
                    Email: postData.Email,
                    Message: postData.Message
                });
            }
        }
    }, [id, data1]);

    const handleClick = (data3) => {
        fetch('http://localhost:8000/Post/' + data3.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then(() => {
            console.log('Update complete');
            navigate('/');
        }).catch(error => console.error('Error updating data:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick({ id });
    };

    return (
            <form onSubmit={handleSubmit}>
                <h1>EDIT</h1>                
                <div className="FName"><h2>FName</h2><input type="text" name="FName" className="formControl" value={values.Fname} onChange={e => setValues({ ...values, Fname: e.target.value })} />
                </div>
                <div className="LName"><h2>LName</h2><input type="text" name="LName" className="formControl" value={values.Lname} onChange={e => setValues({ ...values, Lname: e.target.value })} />
                </div>
                <div className="Email"><h2>Email</h2><input type="text" name="Email" className="formControl" value={values.Email} onChange={e => setValues({ ...values, Email: e.target.value })} />
                </div>
                <div className="Message"><h2>Message</h2><textarea name="Message" className="formControl" value={values.Message} onChange={e => setValues({ ...values, Message: e.target.value })} />
                </div>
                <button type="submit">Confirm</button>
            </form>
        
    ) 
};

export default Edit;

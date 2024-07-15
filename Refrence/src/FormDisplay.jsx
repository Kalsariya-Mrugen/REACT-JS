import React from 'react';

const FormDisplay = () => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"  />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"  />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age"  />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};

export default FormDisplay;
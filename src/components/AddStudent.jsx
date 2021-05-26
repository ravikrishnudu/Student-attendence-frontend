import React, { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [gender, setgender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col">
              <input
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Gender"
              />
            </div>
            <div className="col">
              <input
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Date of Birth"
              />
            </div>
            <div className="col">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;

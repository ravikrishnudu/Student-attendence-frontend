import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

async function getStudents() {
  const response = await axios.get("/students");
  return response.data;
}

function StudentList() {
  const [students, setStudents] = useState("");

  useEffect(() => {
    getStudents().then((res) => {
      setStudents(res);
    });
  }, []);

  console.log(students);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/student/${id}`);
      setStudents(
        students.filter((student) => {
          return student.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.dateOfBirth}</td>
                    <td>{student.email}</td>
                    <td>
                      <Link
                        to={`student/${student.id}/update`}
                        className="btn btn-warning"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;

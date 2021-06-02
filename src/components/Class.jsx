import React, { useState } from "react";
import axios from "axios";

import ClassList from "./ClassList";

export default function Class() {
  const [grade, setGrade] = useState("Grade");
  const [studentsCount] = useState("0");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/grade", {
        grade,
        students_count: studentsCount,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h1 className="font-weight-light display-1 text-center">Classes</h1>{" "}
      </div>

      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col mb-4">
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="custom-select my-1 mr-sm-2"
              >
                <option disabled>Grade</option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>

            <button className="btn btn-primary mb-4">Add</button>
          </div>
        </form>
        <ClassList />
      </div>
    </div>
  );
}

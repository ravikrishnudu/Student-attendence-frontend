import React from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

export default function Home() {
  return (
    <div className="container">
      <AddStudent />
      <StudentList />
    </div>
  );
}

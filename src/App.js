import "./App.css";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="container">
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;

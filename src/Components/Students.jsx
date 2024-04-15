import Student from './Student.jsx'

export default function Students({ filteredStudentList,
  cohortSymbols,
  handleAddNote }) {

  return(
    <ul className="student-list">
      {filteredStudentList.map(student => (
        <Student
          student={student}
          cohortSymbols={cohortSymbols}
          handleAddNote={handleAddNote}
          key={student.id} />
      ))}
    </ul>
  )
}
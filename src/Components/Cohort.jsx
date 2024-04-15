export default function Cohort({ cohortCode,
  selectedCohort,
  cohortSymbols,
  handleCohortSelect }) {
    const symbolDisplay = `${cohortSymbols[cohortCode.slice(0, -4)]}'${cohortCode.slice(-2)}`;
  
  return (
    <div className="cohort">
        <h3
          className="cohort-name"
          id={cohortCode}
          onClick={handleCohortSelect}
          style={cohortCode.replace("2", " 2") === selectedCohort ? {color: "green"} : null}
        >{cohortCode.replace("2", " 2")} <span className="cohort-symbol">{symbolDisplay}</span></h3>
        <hr />
    </div>
  )
}
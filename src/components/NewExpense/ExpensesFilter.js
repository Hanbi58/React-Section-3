import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const pickYear = (e) => {
    props.parentFunction(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={pickYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option selected value="All">
            All
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

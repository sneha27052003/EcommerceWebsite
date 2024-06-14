import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-c form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;

import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(firstName.length > 0){
    const formData = { firstName: firstName, lastName: lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
    }else{
      setErrors(["First name is required!"])
    }
  }
/* 
Whats going on here is we are taking the submittedData which is an empty array
and making a new array with that array, by setting its state to the old array 
and also adding the new data to the new array and then setting the state to the
old array.

take old empty array->create new array that has old array inside using spread
operator and also add the new data from the form->take the new array with all
that info inside it and using useState set it as the new value for the old array
*/

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
        {errors.length > 0
        ? errors.map((error, index) => (
          <p key={index} style={{color: 'red'}}>
            {error}
          </p>
        ))
       : null }
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;

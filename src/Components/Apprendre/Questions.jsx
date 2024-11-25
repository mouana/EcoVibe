import React,{useState} from "react";
export default function Questions(){
    const [selectedOption,setSelectedOption] = useState("");
    function handleChange(event){
        setSelectedOption(event.target.value);
    }
    return(
        <div className="uk-form-controls uk-form-controls-text m-5">
      <label>
        <input
          className="uk-radio"
          type="radio"
          name="radio1"
          value="Option 01"
          checked={selectedOption === "Option 01"}
          onChange={handleChange}
        />
        Option 01
      </label><br />
      <label>
        <input
          className="uk-radio"
          type="radio"
          name="radio1"
          value="Option 02"
          checked={selectedOption === "Option 02"}
          onChange={handleChange}
        />
        Option 02
      </label>
      </div>
    );
}
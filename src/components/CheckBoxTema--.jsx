import React from "react";

export default function CheckBoxForm (props) {
    const [checked, setChecked] = React.useState(false)
    return (
      <input type="checkbox" name="tema" value={checked} onChange={handleChange}/>
     ); setChecked={checked}
      }
import React, { useState } from 'react';

import './About.css';

function CheckBoxes(props) {
  const [isChecked, setIsChecked] = useState({});

  const { initialData, setGraphData, graphData, color} = props;

  // displays checkboxes
  const force = initialData.map(allForceCat => allForceCat.force_cat);
  const condensedForces = [...new Set(force)];

  function handleChange(event) {
    setGraphData({
      ...graphData,
      [event.target.name]: event.target.checked
    })
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  }

  return (
    <div className="checkboxes">
      {condensedForces.map((stateCheckBox) => {
        let borderColor = color[stateCheckBox] || 'pink';
        return (
        <label className="checkbox">
          <input
            type="checkbox"
            key={stateCheckBox}
            name={`${stateCheckBox}`}
            value={isChecked}
            onChange={handleChange}
          />
          <span style={{borderBottom: `2px solid ${borderColor}`, textTransform: 'capitalize', padding: '4%', fontSize: '1 rem'}}>{stateCheckBox ? stateCheckBox : 'Null'}</span>
        </label>)
      })}
    </div>
  );
}

export default CheckBoxes;

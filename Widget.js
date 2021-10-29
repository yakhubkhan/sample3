import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

function Widget(props) {
  const nodes = [
    {
      value: "mars",
      label: "Mars",
      showCheckbox: false,
      children: [
        {
          value: "phobos",
          label: "Phobos",
          showCheckbox: false,
          children: [
            { value: "jupiter", label: "jupiter", showCheckbox: false },
            { value: "Mars", label: "Mars", showCheckbox: false },
          ],
        },
        { value: "deimos", label: "Deimos", showCheckbox: false },
      ],
    },
  ];
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const onClick = (clicked) => {
    //console.log(props);
    props.content(clicked.value);
  };

  return (
    <CheckboxTree
      nodes={nodes}
      expanded={expanded}
      onClick={onClick}
      onCheck={setChecked}
      onExpand={setExpanded}
    />
  );
}

export default Widget;

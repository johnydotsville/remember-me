import { useState } from "react";
import { Select, MenuItem } from "@mui/material";


export function TaskDifficultySelector({ diffs, defaultValue, onDifficultySelect }) {
  const [diff, setDiff] = useState(defaultValue);

  const onChangeDifficulty = (event) => {
    setDiff(event.target.value);
    onDifficultySelect(event.target.value)
  }

  return (
    <Select value={diff} displayEmpty onChange={onChangeDifficulty} sx={{ minWidth: '12rem' }}>
      { diffs.map(d => <MenuItem key={d.code} value={d}>{ d.display }</MenuItem>) }
    </Select>
  )
}



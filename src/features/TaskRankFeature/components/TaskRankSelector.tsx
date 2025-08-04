import { useState } from "react";
import { Select, MenuItem } from "@mui/material";


export function TaskRankSelector({ ranks, defaultValue, onRankSelect }) {
  const [rank, setRank] = useState(defaultValue);

  const onChangeRank = (event) => {
    setRank(event.target.value);
    onRankSelect(event.target.value)
  }

  return (
    <Select value={rank} displayEmpty onChange={onChangeRank} sx={{ minWidth: '12rem' }}>
      { ranks.map(d => <MenuItem key={d.id} value={d}>{ d.title }</MenuItem>) }
    </Select>
  )
}



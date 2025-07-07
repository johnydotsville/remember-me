function refine(employees) {
  return employees.map(employee => {
    const [_, firstname, lastname, position, ...details] = employee;
    return {
      firstname,
      lastname,
      position,
      details
    };
  );
}
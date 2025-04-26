export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = selectNameFilter(state).toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};

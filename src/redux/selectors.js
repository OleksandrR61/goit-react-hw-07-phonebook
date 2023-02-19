export const selectContacts = ({contacts}) => contacts.items;
export const selectIsLoading = ({contacts}) => contacts.isLoading;
export const selectError = ({contacts}) => contacts.error;
export const selectIsUpdated = ({contacts}) => contacts.isUpdated;

export const selectFilter = ({filter}) => filter;
const saveToLocalStorage = (key, entry) => {
  let formattedEntry = entry;
  if (typeof entry === 'object') {
    formattedEntry = JSON.stringify(entry);
  }
  localStorage.setItem(key, formattedEntry);
};

export default saveToLocalStorage;

const saveToLocalStorage = (entry) => {
  let formattedEntry = entry;
  if (typeof entry === 'object') {
    formattedEntry = JSON.stringify(entry);
  }
  localStorage.setItem('userData', formattedEntry);
};

export default saveToLocalStorage;

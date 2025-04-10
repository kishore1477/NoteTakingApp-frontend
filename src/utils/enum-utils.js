export const getEnumNameByValue = (enumObj, value) => {
    // Find the key corresponding to the value
    const key = Object.keys(enumObj).find((key) => enumObj[key] === value);
    return key ? key.replace(/([a-z])([A-Z])/g, "$1 $2") : null; // Return formatted name or null if not found
  };
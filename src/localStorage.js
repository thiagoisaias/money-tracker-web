export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null || serializedState === undefined) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // TODO: handle read error
    console.warn(error);
  }
};

export const saveState = authState => {
  try {
    const serializedState = JSON.stringify({ auth: authState });
    localStorage.setItem("authState", serializedState);
  } catch (error) {
    // TODO: handle write error
    console.warn(error);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null || serializedState === undefined) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // TODO: handle read error
    console.warn(error);
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    // TODO: handle write error
    console.warn(error);
  }
};

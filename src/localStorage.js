export const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null || serializedState === undefined) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    // TODO: handle read error
    console.log(error);
  }
};

export const saveAuthState = authState => {
  try {
    const serializedState = JSON.stringify(authState);
    localStorage.setItem("authState", serializedState);
  } catch (error) {
    // TODO: handle write error
    console.log(error);
  }
};

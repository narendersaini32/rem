export const setDelay = (callback) => {
  setTimeout(() => {
    callback();
  }, 800);
};

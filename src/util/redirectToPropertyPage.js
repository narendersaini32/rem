export const redirectToPropertyPage = (id) => {
  if (id) {
    window.location.href = `/property/${id}`;
  }
};

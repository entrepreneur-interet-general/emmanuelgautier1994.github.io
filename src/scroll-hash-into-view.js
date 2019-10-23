export default () => {
  const hash = window.location.hash;
  const element_id = hash.slice(1);
  const element = document.getElementById(element_id);
  if (element) {
    element.scrollIntoView();
  }
}

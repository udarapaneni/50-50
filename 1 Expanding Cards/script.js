const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActivePanelList();
    panel.classList.add('active');
  });
});

function removeActivePanelList() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

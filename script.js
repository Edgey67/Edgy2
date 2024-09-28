document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
  const toggleMode = () => {
    document.body.classList.toggle('light-mode');
  };
  document.querySelector('#toggle-button').addEventListener('click', toggleMode);
  
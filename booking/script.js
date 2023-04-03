const choiceBoxes = document.querySelectorAll('.choice-box');

choiceBoxes.forEach(cbox => {
  cbox.addEventListener('mouseenter', () => {
    const iconContainer = cbox.querySelector('.icon-container');
    const icons = iconContainer.querySelectorAll('.person-icon');
    const title = cbox.querySelector('.choice-title');
    
    icons.forEach(icon => {
      icon.style.color = '#fff';
    })
    
    cbox.style.backgroundColor = '#171347';
    title.style.color = '#fff';
  });

  cbox.addEventListener('mouseleave', () => {
    if (!cbox.classList.contains('clicked')) {
      const iconContainer = cbox.querySelector('.icon-container');
      const icons = iconContainer.querySelectorAll('.person-icon');
      const title = cbox.querySelector('.choice-title');

      icons.forEach(icon => {
        icon.style.color = '';
      })

      cbox.style.backgroundColor = '';
      title.style.color = '';
    }
  });

  cbox.addEventListener('click', () => {
    choiceBoxes.forEach(otherBox => {
      if (otherBox !== cbox) {
        const icons = otherBox.querySelectorAll('.person-icon');
        const title = otherBox.querySelector('.choice-title');

        otherBox.classList.remove('clicked');

        icons.forEach(icon => {
          icon.style.color = '';
        })
        
        otherBox.style.backgroundColor = '';
        title.style.color = '';
      }
    });

    cbox.classList.add('clicked');
  });
});
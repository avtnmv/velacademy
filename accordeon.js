function toggleReview(button) {
    const reviewContainer = button.previousElementSibling;
    const hiddenText = reviewContainer.querySelector('.hidden-text');
    const ellipsis = reviewContainer.querySelector('.ellipsis'); 
    const arrow = button.querySelector('.arrow');

    const isExpanded = reviewContainer.classList.toggle('expanded');
    arrow.classList.toggle('expanded-arrow', isExpanded);

    hiddenText.style.display = isExpanded ? 'inline' : 'none';
    ellipsis.style.display = isExpanded ? 'none' : 'inline'; 
    button.childNodes[0].textContent = isExpanded ? 'Згорнути' : 'Читати далi';
}

const dropdown1 = `
<div class="dropdown-menu first">
  <ul class="dropdown-list">
    <li class="link link1"><img src="images/icon-todo.svg" />Todo List</li>
    <li class="link link2"><img src="images/icon-calendar.svg" />Calendar</li>
    <li class="link link3"><img src="images/icon-reminders.svg" />Reminders</li>
    <li class="link link4"><img src="images/icon-planning.svg" />Planning</li>
  </ul>
</div>
`;
const dropdown2 = `
<div class="dropdown-menu second">
  <ul class="dropdown-list">
    <li class="link link1">History</li>
    <li class="link link2">Our Team</li>
    <li class="link link3">Blog</li>
  </ul>
</div>
`;

const introNav = document.querySelector('.intro-nav');

// Handle dropdown menus function

const showHidedropdown = function (e) {
  const link = e.target.closest('a');
  const dropdown1El = document.querySelector('.dropdown-menu.first');
  const dropdown2El = document.querySelector('.dropdown-menu.second');

  // Hide dropdown menu 1 if exist
  if (
    dropdown1El &&
    e.target !== dropdown1El &&
    e.target !== document.querySelector('.dropdown-list') &&
    e.target !== document.querySelector('.link1') &&
    e.target !== document.querySelector('.link2') &&
    e.target !== document.querySelector('.link3') &&
    e.target !== document.querySelector('.link4')
  ) {
    dropdown1El.remove();
    document.querySelector('.drop1 img').src = 'images/icon-arrow-down.svg';
  }

  // Hide dropdown menu 2 if exist
  if (
    dropdown2El &&
    e.target !== dropdown2El &&
    e.target !== document.querySelector('.dropdown-list') &&
    e.target !== document.querySelector('.link1') &&
    e.target !== document.querySelector('.link2') &&
    e.target !== document.querySelector('.link3')
  ) {
    dropdown2El.remove();
    document.querySelector('.drop2 img').src = 'images/icon-arrow-down.svg';
  }

  // Finish the function if the clicked element not a navigation link
  if (!link) return;

  // Show dropdown menu 1 and 2
  if (link.parentElement.classList.contains('drop1')) {
    if (!dropdown1El) {
      link.parentElement.insertAdjacentHTML('beforeend', dropdown1);
      link.parentElement.querySelector('img').src = 'images/icon-arrow-up.svg';
    }
  }
  if (link.parentElement.classList.contains('drop2')) {
    if (!dropdown2El) {
      link.parentElement.insertAdjacentHTML('beforeend', dropdown2);
      link.parentElement.querySelector('img').src = 'images/icon-arrow-up.svg';
    }
  }
};

// Add click event to the whole page
document.addEventListener('click', showHidedropdown);

const dropdown1 = `
<div class="dropdown-menu first">
  <ul class="dropdown-list">
    <li class="link"><img src="images/icon-todo.svg" />Todo List</li>
    <li class="link"><img src="images/icon-calendar.svg" />Calendar</li>
    <li class="link"><img src="images/icon-reminders.svg" />Reminders</li>
    <li class="link"><img src="images/icon-planning.svg" />Planning</li>
  </ul>
</div>
`;
const dropdown2 = `
<div class="dropdown-menu second">
  <ul class="dropdown-list">
    <li class="link">History</li>
    <li class="link">Our Team</li>
    <li class="link">Blog</li>
  </ul>
</div>
`;

const introNav = document.querySelector('.intro-nav');

// Handle dropdown menus

const showHidedropdown = function (e) {
  const link = e.target.closest('a');
  const dropdown1El = document.querySelector('.dropdown-menu.first');
  const dropdown2El = document.querySelector('.dropdown-menu.second');

  if (
    dropdown1El &&
    e.target !== dropdown1El &&
    e.target !== document.querySelector('.link')
  ) {
    dropdown1El.remove();
    document.querySelector('.drop1 img').src = 'images/icon-arrow-down.svg';
  }
  if (
    dropdown2El &&
    e.target !== dropdown2El &&
    e.target !== document.querySelector('.link')
  ) {
    dropdown2El.remove();
    document.querySelector('.drop2 img').src = 'images/icon-arrow-down.svg';
  }

  if (!link) return;
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

document.addEventListener('click', showHidedropdown);

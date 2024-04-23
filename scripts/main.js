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
  const link = e.target.closest('.nav-link');
  let dropdown1El = document.querySelector('.dropdown-menu.first');
  let dropdown2El = document.querySelector('.dropdown-menu.second');

  if (!link) return;
  if (link.classList.contains('drop1')) {
    if (!dropdown1El) {
      link.insertAdjacentHTML('beforeend', dropdown1);
      link.querySelector('img').src = 'images/icon-arrow-up.svg';
    } else {
      link.removeChild(dropdown1El);
      link.querySelector('img').src = 'images/icon-arrow-down.svg';
    }
  }
  if (link.classList.contains('drop2')) {
    if (!dropdown2El) {
      link.insertAdjacentHTML('beforeend', dropdown2);
      link.querySelector('img').src = 'images/icon-arrow-up.svg';
    } else {
      link.removeChild(dropdown2El);
      link.querySelector('img').src = 'images/icon-arrow-down.svg';
    }
  }
};

document.addEventListener('click', showHidedropdown);

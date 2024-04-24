const dropdown1 = `
<div class="dropdown-menu first">
  <ul class="dropdown-list">
    <li class="link"><img src="images/icon-todo.svg" class="link-img" />Todo List</li>
    <li class="link"><img src="images/icon-calendar.svg" class="link-img" />Calendar</li>
    <li class="link"><img src="images/icon-reminders.svg" class="link-img" />Reminders</li>
    <li class="link"><img src="images/icon-planning.svg" class="link-img" />Planning</li>
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
const hamburgerBtn = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const navContaner = document.querySelector('.flex-container');

// Handle dropdown menus function

const showHidedropdown = function (e) {
  const link = e.target.closest('a');
  const dropdown1El = document.querySelector('.dropdown-menu.first');
  const dropdown2El = document.querySelector('.dropdown-menu.second');

  // Hide dropdown menu 1 if exist
  if (
    dropdown1El &&
    e.target !== dropdown1El &&
    !e.target.classList.contains('dropdown-list') &&
    !e.target.classList.contains('link') &&
    !e.target.classList.contains('link-img')
  ) {
    dropdown1El.remove();
    document.querySelector('.drop1 img').src = 'images/icon-arrow-down.svg';
  }

  // Hide dropdown menu 2 if exist
  if (
    dropdown2El &&
    e.target !== dropdown2El &&
    !e.target.classList.contains('dropdown-list') &&
    !e.target.classList.contains('link') &&
    !e.target.classList.contains('link-img')
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

// Handle shide menu

const showSideMenu = function () {
  hamburgerBtn.classList.toggle('fixed');
  if (
    hamburgerBtn.querySelector('img').getAttribute('src') ===
    'images/icon-menu.svg'
  ) {
    hamburgerBtn.querySelector('img').src = 'images/icon-close-menu.svg';
  } else {
    hamburgerBtn.querySelector('img').src = 'images/icon-menu.svg';
  }

  sideMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  navContaner.classList.toggle('hidden-750px');
};

// Add click event to the whole page
document.addEventListener('click', showHidedropdown);

// // Add click event to handle side menu
hamburgerBtn.addEventListener('click', showSideMenu);

// Close side menu when click on overlay
overlay.addEventListener('click', showSideMenu);

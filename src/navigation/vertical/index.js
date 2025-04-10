export default [
  {
    title: 'Dashboard',
    to: { name: 'dashboard' },
    icon: { icon: 'ri-bar-chart-2-line' },
  },
  { 
    heading: 'Access Setting' 
  },
  {
    title: 'Roles & Permissions',
    to: { name: 'roles' },
    icon: { icon: 'ri-lock-password-line' },
  },
  {
    title: 'Staffs',
    to: { name: 'staffs' },
    icon: { icon: 'ri-group-line' },
  },
  {
    heading: 'Management'
  },
  {
    title: 'Veterinarian',
    icon: { icon: 'ri-nurse-fill'},
    children: [
      {
        title: 'Register',
        to: 'dashboard',
        icon: {icon: 'ri-radio-button-line'}
      },
      {
        title: 'Lists',
        to: 'second-page',
        icon: {icon: 'ri-radio-button-line'}
      },
    ]
  },
  {
    title: 'Pets',
    icon: {icon: 'ri-skull-2-line'},
    children: [
      {
        title: 'Register',
        to: 'dashboard',
        icon: {icon: 'ri-radio-button-line'}
      },
      {
        title: 'Lists',
        to: 'second-page',
        icon: {icon: 'ri-radio-button-line'}
      }
    ]
  },
  {
    heading: 'Agenda'
  },
  {
    title: 'Medical Appointments',
    icon: {icon: 'ri-list-check-3'},
    children: [
      {
        title: 'Register',
        to: 'dashboard',
        icon: {icon: 'ri-computer-line'}
      },
      {
        title: 'Lists',
        to: 'second-page',
        icon: {icon: 'ri-bar-chart-line'}
      }
    ]
  },
  {
    title: 'Calendar',
    icon: {icon: 'ri-calendar-line'},
    to: 'second-page',
  },
  {
    title: 'Payments',
    icon: {icon: 'ri-coins-line'},
    to: 'second-page',
  },
  {
    title: 'Vaccines',
    icon: {icon: 'ri-syringe-line'},
    children: [
      {
        title: 'Register',
        to: 'dashboard',
        icon: {icon: 'ri-computer-line'}
      },
      {
        title: 'Lists',
        to: 'second-page',
        icon: {icon: 'ri-bar-chart-line'}
      }
    ]
  },
  {
    title: 'Surgical procedures',
    icon: {icon: 'ri-microscope-line'},
    children: [
      {
        title: 'Register',
        to: 'dashboard',
        icon: {icon: 'ri-computer-line'}
      },
      {
        title: 'Lists',
        to: 'second-page',
        icon: {icon: 'ri-bar-chart-line'}
      }
    ]
  },
  {
    title: 'Medical History',
    to: {name: 'second-page'},
    icon: {icon: 'ri-draft-line'}
  }
]

export const COOKIE_MAX_AGE_1_YEAR = 365 * 24 * 60 * 60


export const PERMISSIONS = [
    {
      name: 'Dashboard',
      permissions: [{
        name: 'Graphic',
        permission: 'show_report_graphic',
      }],
    },
    {
      name: 'Roles & Permissions',
      permissions: [
        {
            name: 'Register',
            permission: 'register_role'
        },
        {
            name: 'List',
            permission: 'list_role'
        },
        {
            name: 'Edit',
            permission: 'edit_role'
        },
        {
            name: 'Delete',
            permission: 'delete_role'
        }
      ]
    },
    {
      name: 'Staffs',
      permissions: [
        {
            name: 'Register',
            permission: 'register_staff'
        },
        {
            name: 'List',
            permission: 'list_staff'
        },
        {
            name: 'Edit',
            permission: 'edit_staff'
        },
        {
            name: 'Delete',
            permission: 'delete_staff'
        }
      ]
    },
    {
      name: 'Veterinarian',
      permissions: [
        {
            name: 'Register',
            permission: 'register_veterinary'
        },
        {
            name: 'List',
            permission: 'list_veterinary'
        },
        {
            name: 'Edit',
            permission: 'edit_veterinary'
        },
        {
            name: 'Delete',
            permission: 'delete_veterinary'
        },
        {
            name: 'Profile',
            permission: 'profile_veterinary'
        }
      ]
    },
    {
      name: 'Pets',
      permissions: [
        {
            name: 'Register',
            permission: 'register_pet'
        },
        {
            name: 'List',
            permission: 'list_pet'
        },
        {
            name: 'Edit',
            permission: 'edit_pet'
        },
        {
            name: 'Delete',
            permission: 'delete_pet'
        },
        {
            name: 'Profile',
            permission: 'profile_pet'
        }
      ]
    },
    {
      name: 'Medical Appointments',
      permissions: [
        {
            name: 'Register',
            permission: 'register_appointment'
        },
        {
            name: 'List',
            permission: 'list_appointment'
        },
        {
            name: 'Edit',
            permission: 'edit_appointment'
        },
        {
            name: 'Delete',
            permission: 'delete_appointment'
        },
      ]
    },
    {
      name: 'Calendar',
      permissions: [{
        name: 'Availability',
        permission: 'calendar',
      }],
    },
    {
      name: 'Payment',
      permissions: [
        {
            name: 'Show',
            permission: 'show_payment'
        },
        {
            name: 'Edit',
            permission: 'edit_payment'
        },
      ]
    },
    {
      name: 'Vaccines',
      permissions: [
        {
            name: 'Register',
            permission: 'register_vaccination'
        },
        {
            name: 'List',
            permission: 'list_vaccination'
        },
        {
            name: 'Edit',
            permission: 'edit_vaccination'
        },
        {
            name: 'Delete',
            permission: 'delete_vaccination'
        },
      ]
    },
    {
      name: 'Surgical Procedures',
      permissions: [
        {
            name: 'Register',
            permission: 'register_surgeries'
        },
        {
            name: 'List',
            permission: 'list_surgeries'
        },
        {
            name: 'Edit',
            permission: 'edit_surgeries'
        },
        {
            name: 'Delete',
            permission: 'delete_surgeries'
        },
      ]
    },
    {
      name: 'Medical History',
      permissions: [{
        name: 'Availability',
        permission: 'show_medical_records',
      }],
    },
]

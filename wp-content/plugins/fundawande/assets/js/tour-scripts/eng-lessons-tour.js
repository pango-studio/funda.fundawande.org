// English Lesssons Page Walkthrough

var tour = new Anno([{
    target: '#wrapper-navbar',
    position: 'bottom',
    content: "Click 'Open Menu' to see the different menu options.",
    buttons: [AnnoButton.NextButton]
  },
  {
    target: '#back-to-units',
    position: 'right',
    content: 'Click this button to go back to the units view',
    buttons: [AnnoButton.BackButton, AnnoButton.NextButton]
  },
  {
    target : '#sidebar-minimized',
    position: 'bottom',
    content : 'Click this button to view unit progress',
    buttons: [AnnoButton.BackButton, AnnoButton.NextButton]
  },
  {
    target : '#navigation-links',
    position: 'top',
    content : 'The navigation links help you to move between lessons within the course',
    buttons: [AnnoButton.DoneButton]
  }])
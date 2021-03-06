// Coach Dashboard Tour
var tour = new Anno([{
    target: '#view-tooltips',
    position: 'bottom',
    content: "Welcome to the coach progress dashboard. From here you can view the progress of all learners",
    buttons: [
      {
        text: "Next",
        className: "pulse",
        click: function() {
          return this.switchToChainNext();
        }
      }
    ],  },
  {
    target: '#review-dash-btn',
    position: 'bottom',
    content: "Click here to review learner assignments",
    buttons: [
      {
        text: "Back",
        className: "anno-btn-low-importance",
        click: function() {
          return this.switchToChainPrev();
        }
      },
      {
        text: "Next",
        className: "pulse",
        click: function() {
          return this.switchToChainNext();
        }
      }
    ],
  },
  {
    target: '#coach-progress-filters',
    position: 'bottom',
    content: "Select filters to view the course information",
    buttons: [
      {
        text: "Back",
        className: "anno-btn-low-importance",
        click: function() {
          return this.switchToChainPrev();
        }
      },
      {
        text: "Next",
        className: "pulse",
        click: function() {
          return this.switchToChainNext();
        }
      }
    ],
  },
  {
    target: '#courseSelect',
    position: 'right',
    content: "To get started, select a course",
    buttons: [
      {
        text: "Back",
        className: "anno-btn-low-importance",
        click: function() {
          return this.switchToChainPrev();
        }
      },
      {
        text: "Next",
        className: "pulse",
        click: function() {
          return this.switchToChainNext();
        }
      }
    ],
  },
  {
    target: '#coach-progress-filters-submit',
    position: 'right',
    content: "And click here to view the data table"
  }
])
// Initial Site Launch Page Load
var initial_tour = new Anno([{
    target: '#view-tooltips',
    position: 'bottom',
    content: "To see a walkthrough of the features for the page you are on, click the 'View Tooltips' button",
    buttons: [
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
    target: '#tawkchat-minified-box',
    position: 'top',
    content: "If you need any assistance, click here to chat to the Funda Wande team",
    buttons: [
      {
        text: "Done",
        className: "pulse",
        click: function() {
          return this.hide();
        }
      }
    ]
  }  
])

  //Show the tour as soon as the script loads.
  initial_tour.show();
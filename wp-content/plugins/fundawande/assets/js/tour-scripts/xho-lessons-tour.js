// Xhosa Lesssons Page Walkthrough
var tour = new Anno([{
  target: '#wrapper-navbar',
  position: 'right',
  content: "Cofa iqhosha 'Vula Imenyu' ukuze ubone iinketho ezahlukeneyo zemenyu.",
  onShow: function() {
    jQuery(document).ready( function($) {
      $('#main-menu-modal').modal('show');
    });
  },  
  onHide: function() {
    jQuery(document).ready( function($) {
      $('#main-menu-modal').modal('hide');
    });
  },
  position: {
    top: '3em',
    left: '15em'
  },
  buttons: [AnnoButton.NextButton]
},
{
  target: '#back-to-units',
  position: 'right',
  content: 'Cofa le iqhosha ukuba ubuyele kwiiyunithi zokujonga',
  buttons: [AnnoButton.BackButton, AnnoButton.NextButton]
},
{
  target : '#sidebar-minimized',
  position: 'bottom',
  content : 'Cofa le iqhosha ukujonga inkqubela phambili',
  buttons: [AnnoButton.BackButton, AnnoButton.NextButton]
},
{
  target : '#navigation-links',
  position: 'top',
  content : 'Izixhumanisi zokuhamba zikunceda ukuba uhambe phakathi kwezifundo ngaphakathi kwikhosi',
  buttons: [AnnoButton.DoneButton]
}])
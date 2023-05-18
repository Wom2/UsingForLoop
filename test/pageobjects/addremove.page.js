import Page from './page.js';

class Addremove extends Page {
   get addelement () {
    return $('//*[@id="content"]/div/button');
   }

   get remove () {
    return $('//*[@id="elements"]/button');
   }

   get children () {
    return $('#elements');
   }

   open () {
    return super.open('add_remove_elements/');
   } 
}

export default new Addremove();
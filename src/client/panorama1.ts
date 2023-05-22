import { create_icon } from './navigation_icon';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { infoicon2} from './panorama2';
import { create_info_icon } from './info_icon';
//import { invoDiv } from './info_div';
import { invoDivClean } from './info_div_clean';
import { teksty } from './teksty';
import { tytuly } from './tytuly'; 

//dodawanie panoramy
export const panorama1 = new panorama_form('./index.png').main;

//dodawanie ikony nawigacyjnej
export const navicon1 = new create_icon(40, 0, -30,'nav1');
setTimeout(() => {
    panorama1.add(navicon1.main);
  }, 1000)

//event-click ikony nawigacyjnej
navicon1.element.addEventListener('pointerdown', () => {
    panorama1.remove(navicon1.main)
    panorama1.remove(infoicon1.main)
    scene.remove(panorama1);
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon1.reset_size();
    panorama2.add(infoicon2.main)
    //panorama2.add(infoicon3.main)
    
   

})

//dodawanie ikony-obrazek
export const infoicon1 = new create_info_icon(10, -8, -30, 'imageInfo1')
setTimeout(() => {
  panorama1.add(infoicon1.main)
}, 1000)

//event-click ikony-obrazek
infoicon1.element.addEventListener('pointerdown', () => {
  console.log('pointer clicked');
  const infodiv1 = new invoDivClean("120px",tytuly[0], teksty[0]);
  document.body.appendChild(infodiv1.main)
  infodiv1.main.style.visibility = 'visible';
  infoicon2.element.style.visibility = 'hidden';


  infodiv1.offButton.addEventListener("click", function () {

      infodiv1.main.style.visibility = 'hidden';
      infoicon2.element.style.visibility = 'visible';
  })

})




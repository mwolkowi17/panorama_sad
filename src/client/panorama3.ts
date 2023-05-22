import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { infoicon6, panorama4, infoicon4,infoicon5,infoicon7  } from './panorama4';
import { panorama_form } from './panorama_create';
import { infoicon2 } from './panorama2';
import { navicon6 } from './panorama4';

//dodawanie panoramy
export const panorama3 = new panorama_form('./sad2.png').main;
panorama3.rotateY(-30*(Math.PI/180))

//dodawanie ikony nawigacyjnej
export const navicon4 = new create_icon(-22, -13, -30,'nav4');
export const navicon5 =  new create_icon(25, -13, 40,'nav5');
//panorama3.add(navicon4.main)

//event-click ikony nawigacyjnej
navicon4.element.addEventListener('pointerdown', () => {
    panorama3.remove(navicon4.main);
    panorama3.remove(navicon5.main)
    panorama3.remove(infoicon4.main)
    scene.remove(panorama3);
    scene.add(panorama4);
    //panorama2.add(navicon2.main);
    //panorama2.add(navicon3.main);
    // panorama2.add(infoicon2.main)
    // panorama2.add(infoicon3.main)
    panorama4.add(navicon6.main)
    panorama4.add(infoicon4.main)
    panorama4.add(infoicon5.main)
    panorama4.add(infoicon6.main)
    panorama4.add(infoicon7.main)
    navicon4.reset_size();
    console.log('nav4')
})

//event-click ikony nawigacyjnej
navicon5.element.addEventListener('pointerdown', () => {
    panorama3.remove(navicon4.main);
    panorama3.remove(infoicon4.main)
    panorama3.remove(navicon5.main)
    scene.remove(panorama3);
    scene.add(panorama2);
    panorama2.add(navicon2.main);
    panorama2.add(navicon3.main);
    navicon5.reset_size();
    panorama2.add(infoicon2.main)
  
    console.log('nav5')
})

//dodawanie ikony-obrazek

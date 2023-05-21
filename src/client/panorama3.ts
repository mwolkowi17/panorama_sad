import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { panorama4 } from './panorama4';
import { panorama_form } from './panorama_create';
import { infoicon2,infoicon3 } from './panorama2';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
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
    panorama2.add(infoicon3.main)
    console.log('nav5')
})

//dodawanie ikony-obrazek
export const infoicon4 = new create_info_icon(15, 12, -20, 'imageInfo4')
panorama3.add(infoicon4.main)

//event-click ikony-obrazek
infoicon4.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    const infodiv4 = new invoDiv('./picture3_przeciek.png');
    document.body.appendChild(infodiv4.main)
    infodiv4.main.style.visibility = 'visible';
    infoicon4.element.style.visibility = 'hidden';

    infodiv4.offButton.addEventListener("click", function () {
        infodiv4.main.style.visibility = 'hidden';
        infoicon4.element.style.visibility = 'visible';
    })

})


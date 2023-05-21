import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama2,navicon2,navicon3 } from './panorama2';
import { panorama_form } from './panorama_create';
import { infoicon2,infoicon3 } from './panorama2';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
import { panorama3,navicon4,navicon5 } from './panorama3';

//dodawanie panoramy
export const panorama4 = new panorama_form('./sad3.png').main;
panorama4.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon6 = new create_icon(0, -13, -20,'nav6');


//event-click ikony nawigacyjnej
navicon6.element.addEventListener('pointerdown', () => {
    panorama4.remove(navicon6.main);
    panorama4.remove(infoicon4.main)
    scene.remove(panorama4);
    scene.add(panorama3);
    panorama3.add(navicon4.main);
    panorama3.add(navicon5.main);
    //panorama2.add(infoicon2.main)
    //panorama2.add(infoicon3.main)
    navicon6.reset_size();
    console.log('nav6')
})

//dodawanie ikony-obrazek
export const infoicon4 = new create_info_icon(15, 12, -20, 'imageInfo4')
panorama4.add(infoicon4.main)

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


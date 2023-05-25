import { create_icon } from './navigation_icon';
import { create_icon_left } from './navigation_icon_left';
import { scene } from './client';
import { panorama1, navicon1, infoicon1 } from './panorama1';
import { panorama3, navicon4, navicon5 } from './panorama3';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
import { invoDivClean } from './info_div_clean';
import { teksty } from './teksty';
import { tytuly } from './tytuly';


//dodawanie panoramy
export const panorama2 = new panorama_form('./sad1.png').main
panorama2.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon2 = new create_icon(-20, -13, 40, 'nav2');
export const navicon3 = new create_icon(18, -20, -30, 'nav3');

//panorama2.add(navicon2.main);
//panorama2.add(navicon3.main);


//event-click ikony nawigacyjnej
navicon2.element.addEventListener('pointerdown', () => {
    console.log('navicon2')
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama3);
    panorama3.add(navicon4.main);
    panorama3.add(navicon5.main)
    navicon2.reset_size();
    navicon3.reset_size();
    infodiv2.main.style.visibility='hidden'
})

//event-click ikony nawigacyjnej
navicon3.element.addEventListener('pointerdown', () => {
    console.log("navicon3")
    infoicon2.element.style.visibility='visible'
    panorama2.remove(navicon2.main);
    panorama2.remove(navicon3.main);
    panorama2.remove(infoicon2.main)
    scene.remove(panorama2);
    scene.add(panorama1);
    panorama1.add(navicon1.main)
    panorama1.add(infoicon1.main)
    navicon1.reset_size();
    infodiv2.main.style.visibility='hidden'
})

//dodawanie obrazka
const infodiv2 = new invoDivClean("190px", tytuly[1], teksty[1]);

//dodawanie ikony-obrazek
export const infoicon2 = new create_info_icon(17, -7, -30, 'imageInfo1')

//panorama2.add(infoicon2.main)

//event-click ikony-obrazek
infoicon2.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    
    document.body.appendChild(infodiv2.main)
    infodiv2.main.style.visibility = 'visible';
    infoicon2.element.style.visibility = 'hidden';

    infodiv2.offButton.addEventListener("click", function () {
        infodiv2.main.style.visibility = 'hidden';
        infoicon2.element.style.visibility = 'visible';
    })

})



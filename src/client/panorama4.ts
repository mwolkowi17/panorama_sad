import { create_icon } from './navigation_icon';
import { scene } from './client';
import { panorama_form } from './panorama_create';
import { create_info_icon } from './info_icon';
import { invoDiv } from './info_div';
import { panorama3,navicon4,navicon5 } from './panorama3';
import { invoDivClean } from './info_div_clean';
import { tytuly } from './tytuly';
import { teksty } from './teksty';

//dodawanie panoramy
export const panorama4 = new panorama_form('./sad3.png').main;
panorama4.rotateY(Math.PI)

//dodawanie ikony nawigacyjnej
export const navicon6 = new create_icon(0, -13, -20,'nav6');


//event-click ikony nawigacyjnej
navicon6.element.addEventListener('pointerdown', () => {
    infoicon4.element.style.visibility = 'visible'
    infoicon5.element.style.visibility = 'visible'
    infoicon6.element.style.visibility = 'visible'
    infoicon7.element.style.visibility = 'visible'
    panorama4.remove(navicon6.main)
    panorama4.remove(infoicon4.main)
    panorama4.remove(infoicon5.main)
    panorama4.remove(infoicon6.main)
    panorama4.remove(infoicon7.main)
    scene.remove(panorama4)
    scene.add(panorama3)
    panorama3.add(navicon4.main)
    panorama3.add(navicon5.main)
    //panorama2.add(infoicon2.main)
    //panorama2.add(infoicon3.main)
    navicon6.reset_size()
    infodiv4.main.style.visibility = 'hidden'
    infodiv5.main.style.visibility = 'hidden'
    infodiv6.main.style.visibility = 'hidden'
    infodiv7.main.style.visibility = 'hidden'
    console.log('nav6')
})

//dodawanie obrazków
const infodiv4 = new invoDivClean("120px", tytuly[3], teksty[3]);
const infodiv5 = new invoDivClean("150px", tytuly[2], teksty[2]);
const infodiv6 = new invoDivClean("180px", tytuly[4], teksty[4]);
const infodiv7 = new invoDivClean("180px", tytuly[5], teksty[5]);

//dodawanie ikony-obrazek
export const infoicon4 = new create_info_icon(15, -3, 30, 'imageInfo4')

//event-click ikony-obrazek
infoicon4.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    
    document.body.appendChild(infodiv4.main)
    infodiv4.main.style.visibility = 'visible';
    infoicon4.element.style.visibility = 'hidden';
    infodiv5.main.style.visibility = 'hidden'
    infodiv6.main.style.visibility = 'hidden'
    infodiv7.main.style.visibility = 'hidden'
    infoicon5.element.style.visibility = 'visible';
    infoicon6.element.style.visibility = 'visible';
    infoicon7.element.style.visibility = 'visible';

    infodiv4.offButton.addEventListener("click", function () {
        infodiv4.main.style.visibility = 'hidden';
        infoicon4.element.style.visibility = 'visible';
    })
})

//dodawanie ikony-obrazek
export const infoicon5 = new create_info_icon(0, 2, 30, 'imageInfo5')
//panorama4.add(infoicon4.main)

//event-click ikony-obrazek
infoicon5.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
   
    document.body.appendChild(infodiv5.main)
    infodiv5.main.style.visibility = 'visible';
    infoicon5.element.style.visibility = 'hidden';
    infodiv4.main.style.visibility = 'hidden'
    infodiv6.main.style.visibility = 'hidden'
    infodiv7.main.style.visibility = 'hidden'
    infoicon4.element.style.visibility = 'visible';
    infoicon6.element.style.visibility = 'visible';
    infoicon7.element.style.visibility = 'visible';

    infodiv5.offButton.addEventListener("click", function () {
        infodiv5.main.style.visibility = 'hidden';
        infoicon5.element.style.visibility = 'visible';
    })
})

//dodawanie ikony-obrazek
export const infoicon6 = new create_info_icon(50, -10, 30, 'imageInfo6')

//event-click ikony-obrazek
infoicon6.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    document.body.appendChild(infodiv6.main)
    infodiv6.main.style.visibility = 'visible';
    infoicon6.element.style.visibility = 'hidden';
    infodiv5.main.style.visibility = 'hidden'
    infodiv4.main.style.visibility = 'hidden'
    infodiv7.main.style.visibility = 'hidden'
    infoicon5.element.style.visibility = 'visible';
    infoicon4.element.style.visibility = 'visible';
    infoicon7.element.style.visibility = 'visible';

    infodiv6.offButton.addEventListener("click", function () {
        infodiv6.main.style.visibility = 'hidden';
        infoicon6.element.style.visibility = 'visible';
    })
})

//dodawanie ikony-obrazek
export const infoicon7 = new create_info_icon(-50, -10, 30, 'imageInfo7')

//event-click ikony-obrazek
infoicon7.element.addEventListener('pointerdown', () => {
    console.log('pointer clicked');
    document.body.appendChild(infodiv7.main)
    infodiv7.main.style.visibility = 'visible';
    infoicon7.element.style.visibility = 'hidden';
    infodiv5.main.style.visibility = 'hidden'
    infodiv6.main.style.visibility = 'hidden'
    infodiv4.main.style.visibility = 'hidden'
    infoicon5.element.style.visibility = 'visible';
    infoicon6.element.style.visibility = 'visible';
    infoicon4.element.style.visibility = 'visible';

    infodiv7.offButton.addEventListener("click", function () {
        infodiv7.main.style.visibility = 'hidden';
        infoicon7.element.style.visibility = 'visible';
    })
})


import {proxy} from 'valtio'
const state = proxy({
    intro: true,//we are on homepage or not
    color:'#EFBD48',
    isLogoTexture: true,//logo texture is on or not
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
});
// just like react context whatever we define here can be used everywhere

export default state;
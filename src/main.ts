import {Statue} from './Statue.ts';
import { Artwork } from './interface.ts';

const newArtwork: Artwork[]=[];
let darabszamp=document.getElementById('darabszam');
let osszar=0;






const gomb=(document.getElementById('mentes') as HTMLButtonElement);
gomb.addEventListener('click',mentes);


function mentes()
{
  try{
  let cim=(document.getElementById('cim') as HTMLInputElement).value;
  let date=parseInt((document.getElementById('date') as HTMLInputElement).value);
  let price=parseInt((document.getElementById('ar') as HTMLInputElement).value);
  let magassag=parseInt((document.getElementById('magassag') as HTMLInputElement).value);
  const statue=new Statue(cim,date,price,magassag);
  


    newArtwork.push(statue);
    let darabszam=newArtwork.length;
    darabszamp!.textContent=darabszam.toString();
    
    newArtwork.forEach(element => {
      osszar+=element.price;
    });
    document.getElementById('osszar')!.textContent=osszar.toString();


    
  }
  catch(e)
  {
    if(e instanceof Error)
    {
      document.getElementById('error')!.textContent=e.message;
      document.getElementById('error')!.style.color='red';
    }
  }


}





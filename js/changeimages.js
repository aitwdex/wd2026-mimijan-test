
//画像を切り替えるための関数
export function changeimges (idname,number){
    const images =  document.getElementById(idname);

    if(number == 0 ){
        images.src = `images/hono.jpg`;
    }
    else if(number == 1 ){
        images.src = `images/london.jpeg`;
    }
    else if(number == 2 ){
        images.src = `images/kairo.jpg`;
    }
    else if(number == 3 ){
        images.src = `images/dc.jpeg`;
    }
    else if(number == 4 ){
        images.src = `images/ro-ma.jpg`;
    }
    else if(number == 5 ){
        images.src = `images/tokyo.jpeg`;
    }
    else if(number == 6 ){
        images.src = `images/beru.jpg`;
    }
    else{
        images.src = `images/nagoya.jpeg`;
    }
} 
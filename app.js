
let wakeTime;
let lunchTime;
let napTime;


const startTimer = () => {
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = hour>=12?'PM':'AM';
    hour=hour%12;
    sec = sec<10?'0'+sec:sec;
    min = min<10?'0'+min:min;
    hour = hour<10?'0'+hour:hour;
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('ampm').innerHTML=ampm;
    setTimeout(startTimer,1000);
}

const timeSetter = () => {
    let wake =parseInt(document.getElementById('wakebreak').value);
    let lunch =parseInt(document.getElementById('lunchbreak').value);
    let nap =parseInt(document.getElementById('napbreak').value);
    
    let temp;
    var end=0;
    let res="";
    if(wake<12){
        end=wake+1;
        res+="Wake Up Time: "+wake+" to "+(end)+" AM.<br>";
    }
    else if(wake>12){
        wake=wake%12;
        end=wake+1;
        res+="Wake Up Time: "+wake+" to "+(end)+" PM.<br>";
    }
    else{
        wake=wake%12;
        end=wake+1;
        res+="Wake Up Time: 12 to "+(end)+" PM.<br>";
    }

    if(lunch<12){
        end=lunch+1;
        res+="Lunch Time: "+lunch+" to "+(end)+" AM .<br>";
    }
    else if(lunch>12){
        lunch=lunch%12;
        end=lunch+1;
        res+="Lunch Time: "+lunch+" to "+(end)+" PM.<br>";
    }
    else{
        lunch=lunch%12;
        end=lunch+1;
        res+="Lunch Up Time: 12 to "+(end)+" PM.<br>";
    }

    if(nap<12){
        end=nap+1;
        res+="Nap Time: "+nap+" to "+(end)+" AM.<br>";
    }

    else if(nap>12){
        nap=nap%12;
        end=nap+1;
        res+="Nap Time: "+nap+" to "+(end)+" PM.<br>";
    }
    else{
        nap=nap%12;
        end=nap+1;
        res+="Nap Up Time: 12 to "+(end)+" PM.<br>";
    }
    document.getElementById('setter').innerHTML=res;

    wakeTime=parseInt(document.getElementById('wakebreak').value);
    lunchTime=parseInt(document.getElementById('lunchbreak').value);
    napTime=parseInt(document.getElementById('napbreak').value);

    imageSetter();

}

const imageSetter = () => {
    const img=document.getElementById('img1');
    let now = new Date(); 
    let hour = now.getHours();
    console.log(hour);
    if(hour>=wakeTime && hour<=wakeTime+1){
        img.src = 'images/wake.png';
        document.getElementById('greet').innerHTML="Good Morning!!";
    }

    else if(hour>=lunchTime && hour<=lunchTime+1){
        img.src = 'images/lunch_image.png';
        document.getElementById('greet').innerHTML="Good Afternoon!!";
    }
    else if(hour>=napTime && hour<=napTime+1){
        img.src = 'images/nap.png';
        document.getElementById('greet').innerHTML="Good Night!!";
    }
    else{
        img.src = 'images/—Pngtree—daylight saving time ends flat_5504802.png';
        document.getElementById('greet').innerHTML="Digital Clock";
    }
    setTimeout(imageSetter,2000);
}
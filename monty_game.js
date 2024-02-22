let carcurr;
let goat1curr;
let goat2curr;
let click1 = true;
let last_click = true;
let k;
let win_count = 0;
let tot_count = 0;
let final;
let goatContainer;
let simulationCount

window.onload=function(){
    setGame();
}

function setGame(){

    for(let i = 0; i<3; i++){

        let door = document.createElement("div");
        door.id = i.toString();
        door.addEventListener("click", set_click);
        document.getElementById("doors").appendChild(door);
    }

    document.getElementById("button").addEventListener('click', function() {
        // Action to perform on click
        win_count = 0;
        tot_count = 0;
        // Example action: Reset the Winning_rate content
        document.getElementById('Winning_rate').textContent = '0%'; // Or any other desired action

    
    });

    document.getElementById('simulationInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the Enter key was pressed
            simulationCount = this.value; // Get the input value
            document.getElementById('output').textContent = `The winning rate is ${sim(simulationCount)*100}%`; // Display output
            this.value = '';
        }
    });
    
    

}

function getRandomDoor(){

    let num = Math.floor(Math.random() * 3);
    return num.toString();
}

function getRandomNo(){

    let num = Math.floor(Math.random() * 2) + 1;
    return num.toString();
}

let car = document.createElement("img");
let goat1 = document.createElement("img");
let goat2 = document.createElement("img");

car.src = "./car.png";
goat1.src = "./goat1.png";
goat2.src = "./goat2.png";

let audio = document.createElement("audio");
audio.src = "./door_sound.mp4"; // Path to your audio file

let audio_win = document.createElement("audio");
audio_win.src = "./win.mp4";

function playSound() {
    audio.play();
}

function winSound() {
    audio_win.play();
}

let audio_loss = document.createElement("audio");
audio_loss.src = "./laugh.mp4";

function laughSound(){
    audio_loss.play();
}

function set_click(){

    if (click1 && last_click){

        playSound()
        let num = getRandomDoor();

        if (num == "0" && this.id=='0'){
            // it's goat, car, goat
            goat1curr = document.getElementById('0');
            carcurr = document.getElementById('1');
            goat2curr = document.getElementById('2');
            goat2curr.appendChild(goat2);
            k = 1;
        }

        else if (num == "0" && this.id=='1'){
            // it's goat, car, goat
            goat1curr = document.getElementById('0');
            carcurr = document.getElementById('1');
            goat2curr = document.getElementById('2');

            if (getRandomNo()=='1'){
                goat2curr.appendChild(goat2);
                k = 2;
            }

            else{
                goat1curr.appendChild(goat1);
                k = 3;
            }
        }

        else if (num == "0" && this.id=='2'){
            // it's goat, car, goat
            goat1curr = document.getElementById('0');
            carcurr = document.getElementById('1');
            goat2curr = document.getElementById('2');
            goat1curr.appendChild(goat1);
            k = 4;
        }
        
        else if (num == "1" && this.id=='0'){
            // it's car, goat, goat
            carcurr = document.getElementById('0');
            goat1curr = document.getElementById('1');
            goat2curr = document.getElementById('2');
            if (getRandomNo()=='1'){
                goat2curr.appendChild(goat2);
                k = 5;
            }

            else{
                goat1curr.appendChild(goat1);
                k = 6;
            }
        }

        else if (num == "1" && this.id=='1'){
            // it's car, goat, goat
            carcurr = document.getElementById('0');
            goat1curr = document.getElementById('1');
            goat2curr = document.getElementById('2');
            goat2curr.appendChild(goat2);
            k = 7;
        }

        else if (num == "1" && this.id=='2'){
            // it's car, goat, goat
            carcurr = document.getElementById('0');
            goat1curr = document.getElementById('1');
            goat2curr = document.getElementById('2');
            goat1curr.appendChild(goat1);
            k = 8;
        }

        else if (num == "2" && this.id=='0'){
            // it's goat, goat, car
            goat1curr = document.getElementById('0');
            goat2curr = document.getElementById('1');
            carcurr = document.getElementById('2');
            goat2curr.appendChild(goat2);
            k = 9;
        }

        else if (num == "2" && this.id=='1'){
            // it's goat, goat, car
            goat1curr = document.getElementById('0');
            goat2curr = document.getElementById('1');
            carcurr = document.getElementById('2');
            goat1curr.appendChild(goat1);
            k = 10;
        }

        else if (num == "2" && this.id=='2'){
            // it's goat, goat, car
            goat1curr = document.getElementById('0');
            goat2curr = document.getElementById('1');
            carcurr = document.getElementById('2');
            
            if (getRandomNo()=='1'){
                goat1curr.appendChild(goat1);
                k = 11;
            }

            else{
                goat2curr.appendChild(goat2);
                k = 12;
            }
        }

        click1 = false;

    }

    else if(click1 == false && last_click == true){
        
        click2.call(this);
        last_click = false;
    }

    else if (!last_click){
        goat1curr.innerHTML = "";
        goat2curr.innerHTML = "";
        carcurr.innerHTML = "";
        click1 = true;
        last_click = true;
        
    }
    
}

function click2(){

        goatContainer = document.querySelector('img[src="./goat1.png"]') ? goat1curr : document.querySelector('img[src="./goat2.png"]') ? goat2curr : undefined;
        if (this.id!=goatContainer.id){
            
            if(k == 1){
                if (this.id == '0' || this.id == '1'){
                    carcurr.appendChild(car)
                    goat1curr.appendChild(goat1)
                }
            }

            else if(k==2){

                if (this.id=='0'|| this.id == '1'){
                    goat1curr.appendChild(goat1);
                    carcurr.appendChild(car);
                }
            }

            else if(k==3){

                if (this.id=='1'|| this.id == '2'){
                    carcurr.appendChild(car);
                    goat2curr.appendChild(goat2);
                }
            }

            else if(k==4){

                if (this.id=='1'|| this.id == '2'){
                    goat2curr.appendChild(goat2);
                    carcurr.appendChild(car);
                }
            }

            else if(k==5){

                if (this.id == '0' || this.id == '1'){
                    carcurr.appendChild(car);
                    goat1curr.appendChild(goat1);
                }
            }

            else if(k==6){

                if (this.id == '0' || this.id == '2'){
                    carcurr.appendChild(car);
                    goat2curr.appendChild(goat2);
                }
            }

            else if(k==7){

                if (this.id == '0' || this.id == '1'){
                    goat1curr.appendChild(goat1);
                    carcurr.appendChild(car);
                }
            }

            else if (k==8){

                if (this.id == '0' || this.id == '2'){
                    goat2curr.appendChild(goat2);
                    carcurr.appendChild(car);
                }
            }

            else if (k==9){
                if (this.id == '0' || this.id == '2'){
                    goat1curr.appendChild(goat1);
                    carcurr.appendChild(car);
                }
            }

            else if (k==10){

                if (this.id == '1' || this.id == '2'){
                    goat2curr.appendChild(goat2);
                    carcurr.appendChild(car);
                }

            }

            else if (k==11){
                if (this.id == '1' || this.id == '2'){
                    goat2curr.appendChild(goat2);
                    carcurr.appendChild(car);
                }
            }

            else if (k==12){

                if (this.id == '0' || this.id == '2'){
                    goat1curr.appendChild(goat1);
                    carcurr.appendChild(car);
                }
            }

            if(this.id == carcurr.id && this.id!=goatContainer.id){
                tot_count+=1;
                win_count+=1;
                winSound();
            }

            if(this.id!=carcurr.id && this.id!=goatContainer.id){
                tot_count+=1;
                laughSound()
            }

            final = `${((win_count/tot_count).toFixed(2))*100}%`;
            document.getElementById("Winning_rate").textContent = final.toString();
            
        }
}

function sim(n){
    let win = 0;
    let loss = 0;
    z = n;
    let arr = ['door1', 'door2', 'door3'];
    for (let i = 0; i<n; i++){
        let arr = ['door1', 'door2', 'door3'];
        let x = Math.floor(Math.random()*3);
        switch(x){
            case 0:
                arr[0] = true;
                arr[1] = false;
                arr[2] = false;
                break;
            case 1:
                arr[1] = true;
                arr[0] = false;
                arr[2] = false;
                break;
            case 2:
                arr[2] = true;
                arr[0] = false;
                arr[1] = false;
                break;
        }
        let y = Math.floor(Math.random()*3);
        let guess = arr[y];
        switch(guess){
            case false:
                win+=1
                break;
            case true:
                loss+=1
                break;
        }
    }

    return win/n
}    







class Relogio {
    constructor() {
        console.log("aaaaaaaa");
        this.minutes = document.getElementById("minutes");
        this.seconds = document.getElementById("seconds");
        this.hours = document.getElementById("hours");
        this.day = document.getElementById("day");
        this.brow = document.querySelector("#brow");
        this.search = document.querySelector("#search");
        this.button =  document.querySelector("#button_search");
        this.timzeone = "America/Sao_paulo";
        this.initialize();
        
    }
    
    initialize() {
        this.initRelogio();
        this.setTimezonesInSelect();
        this.alterTimezone();
        
     }
    alterTimezone() {
       this.button.addEventListener("click", (event) => {
          this.timzeone = this.search.value;
           
        })
    }

    initRelogio() {
        setInterval(() => {
            const date = new Date();
            console.log(this.timzeone);
            this.day.innerHTML = date.toLocaleDateString("pt-BR", {
                month: 'long',
                day: '2-digit',
                year: 'numeric',
                timeZone: this.timzeone,
            });
            var timesString = date.toLocaleTimeString("pt-BR", {hour12: false, timeZone: this.timzeone});
             let array = timesString.split(":");
            
             this.hours.innerHTML = array[0];
             this.minutes.innerHTML = array[1];
             this.seconds.innerHTML = array[2];
          
           
       
            }, 100);
           }
           setTimezonesInSelect() {
               rows.forEach(element => {
                element.newRow.forEach(row => {
                    let option = document.createElement('option');
                    option.innerText = row.tz;
                    option.value = row.tz;

                 this.brow.appendChild(option);
                 if(row.tz = "America/Sao_paulo" ) {
                     this.search.value = row.tz;
                 }
                })

               });
           }
    }

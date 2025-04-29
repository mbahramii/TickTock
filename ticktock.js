    // toggle between page  
    function showPage(page) {   
        const pages = ['stopwatchpage' , 'clockpage' , 'timerrpage' , 'alarmpage']

        pages.forEach(id => {
            document.getElementById(id).style.display = (id === page + 'page') ? 'block' : 'none' ;  

        })}
    



       //  stopwatch section    
        let time = 0 ;
        let timer = null ; 

        const stopwatchElement = document.getElementById("stopwatch");

        const startStopButton =  document.getElementById('startstop');
        
        // formdata time  
        const formatdate = (seconds) => {

            hours = String(Math.floor(seconds / 3600 )).padStart(2, '0')
            minute = String(Math.floor((seconds % 3600 )/60)).padStart(2, '0')
            sec = String(Math.floor(seconds % 60 )).padStart(2, '0')

            return `${hours}:${minute}:${sec}`
        }

        //  Condition for start, stop, and continue
        const startTimer =()=> {

            if (timer) {
                clearInterval(timer)
                timer = null ;
                startStopButton.textContent = 'continue'
            }
            else {
                timer = setInterval (() =>{
                    time++
                    stopwatchElement.textContent = formatdate(time)
                } , 1000)
                startStopButton.textContent = 'stop'
            }
        }

        // reset stopwatch
        const resetTimer = () =>{
            clearInterval(timer)
            time  = 0 ;
            timer = null;
            stopwatchElement.textContent = formatdate(time)

            startStopButton.textContent = 'start'
        }

         //  timer section           
        let seconds = 86399 ; 

        // countinue & remove button 
        const crButton = document.getElementById('crButton')

        const stoptimer= document.getElementById('stoptimer')
        const timerElement = document.getElementById('timerr') 

        const formatdatetimer =(seconds)=>{
            const hours = String(Math.floor(seconds / 3600 )).padStart(2, '0')
            const minute = String(Math.floor((seconds % 3600 )/60)).padStart(2, '0')
            const sec = String(seconds % 60 ).padStart(2, '0')
            
            return `${hours}:${minute}:${sec}`
        }
        
        // function for start timer
        const startCountdown= () =>{  
    
            if(timer){
                clearInterval(timer)
                timer = null 
                stoptimer.textContent = 'countinue'
            } else {
                    timer = setInterval(() =>{
                    seconds--
                    stoptimer.textContent = 'stop'
                    timerElement.textContent = formatdatetimer(seconds) 

                },1000)};
            }

            // remove and add stop & continue buttons 
            document.getElementById('crButton').addEventListener('click' , function(){
                let buttonstarttimer = document.getElementById('crButton')
                let buttonsContaine = document.getElementById('timerrbuttons')
            if(buttonsContaine.style.display === 'none' || buttonsContaine.style.display === '' ){
            buttonsContaine.style.display = 'block';
            buttonstarttimer.style.display= 'none' ;
            }else {
            buttonsContaine.style.display = 'none'
            buttonstarttimer.style.display= 'block' ;
        }      
        })
        
        // remove and add remove button 
        const removetimer = () => {
            clearInterval(timer)
            seconds = 86399
            timer = null
            timerElement.textContent = formatdatetimer(seconds)
            crButton.textContent = 'start'

            let buttonstarttimer = document.getElementById('crButton')
            let buttonsContaine = document.getElementById('timerrbuttons')
            if(buttonsContaine.style.display === 'block' ){
            buttonsContaine.style.display = 'none';
            buttonstarttimer.style.display= 'block' ;
            }else {
            buttonsContaine.style.display = 'none'
            buttonstarttimer.style.display= 'block' ;
        }  
        }    



        // clock section 

        const updateClock = () => {
            const now = new Date() ; 

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`
        }

        // calling function 

        setInterval(updateClock , 1000);
        updateClock() ;
        

class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;

    }
    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error('Введите id звонка')
        }
        else if (this.alarmCollection.find((item)=>item.id === id)) {
            console.error(`Будильник с id = ${id} уже существует, измените значение`);
        }
        else this.alarmCollection.push({time,callback,id});
    }
    removeClock (id) {
       let index = this.alarmCollection.findIndex((item)=>item.id === id);
       if (index === -1) {
           return false
       }
       else this.alarmCollection.splice(index,1)
           return true
    }
    getCurrentFormattedTime () {
        let now = new Date().toLocaleTimeString().slice(0,-3);
        return `${now}`;
    }
    start () {
       
           if (this.timerId === null) {
            this.timerId = setInterval(()=>{this.alarmCollection.forEach((id)=>this.checkClock(id))}, 1000);
            console.log('Запуск таймера');
           }
    }
    checkClock (clock) {
        if (this.getCurrentFormattedTime ()  === clock.time) {
            return clock.callback()
        }
     }

    stop () {
         if (this.timerId !== null) {
            clearInterval(this.timerId);    
         }
         return this.timerId = null;
     }
    
    printAlarms () {
        this.alarmCollection.forEach((item)=>console.log(item.id + " "+ item.time))
    }
    clearAlarms () {
        this.stop ();
        this.alarmCollection = [];
    }
}



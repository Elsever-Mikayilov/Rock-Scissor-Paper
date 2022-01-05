const siyahi = ["kagiz.png" , "das.png" , "scissor.png"]

//DOM-Document Object Modul

const kagiz = document.getElementById('paper')
const das = document.getElementById('rock')
const scissor = document.getElementById('scissor')

const komputerinSecimi = document.getElementById('komputer-netice')
const neticeniYaz = document.getElementById('conclusion')

//clickleme hadisesi burda olunur

kagiz.onclick = seciminiEle
das.onclick = seciminiEle
scissor.onclick = seciminiEle

function seciminiEle(){
    const komputer = randomSecim()
    const menimSecimim = this.dataset.id 

    if(menimSecimim==0 && komputer ==0){
        netice = 'Try Again &#129313;'
    }
    else if(menimSecimim ==0 && komputer ==1){
        netice = 'You Win &#129297;'
    }
    else if(menimSecimim == 0 && komputer ==2){
        netice = 'You Lose &#128520;'
    }
    else if(menimSecimim ==1 && komputer == 0){
        netice = 'You Win &#129297;'
    }
    else if(menimSecimim ==1 && komputer ==1){
        netice ='Try Again &#129313;'
    }
    else if(menimSecimim ==1 && komputer ==2){
        netice = 'You Win &#129297;'   
    }
    else if(menimSecimim == 2 && komputer ==0){
        netice ='You Lose &#128520;'
    }
    else if(menimSecimim ==2 && komputer==1){
        netice = 'You Win &#129297;'
    }
    else if(menimSecimim ==2 && komputer ==2){
        netice = 'Try Again &#129313;'
    }
    else {
            netice = 'Try Again &#129313;'
        }
    neticeniYaz.innerHTML = netice
    }



function randomSecim(){
    const say = Math.round(Math.random()*2)
    komputerinSecimi.src = `img/${siyahi[say]}`   
    return say
}
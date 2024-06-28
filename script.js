const head = document.querySelector('.head')
const tbtn = document.querySelectorAll('.tbtn')
const bas = document.querySelector('#bas');
const sci = document.querySelector('#sci')
const elem = document.createElement('div')
elem.innerHTML = ` <div class="cont">
                <div class="row">
                    <button class="buttons">2nd</button>
                    <button class="buttons">(</button>
                    <button class="buttons">)</button>
                    <button class="buttons">10<sup>x</sup></button>
                </div>
                <div class="row">
                    <button class="buttons">1/x</button>
                    <button class="buttons">x<sup>2</sup></button>
                    <button class="buttons">x<sup>3</sup></button>
                    <button class="buttons">x<sup>y</sup></button>
                </div>
                <div class="row">
                    <button class="buttons">x!</button>
                    <button class="buttons">&radic;</button>
                    <button class="buttons"><sup>y</sup>&radic;x</button>
                    <button class="buttons">lg</button>
                </div>
                <div class="row">
                    <button class="buttons">sin</button>
                    <button class="buttons">cos</button>
                    <button class="buttons">tan</button>
                    <button class="buttons">ln</button>
                </div>
                <div class="row">
                    <button class="buttons">sin<sup>-1</sup></button>
                    <button class="buttons">cos<sup>-1</sup></button>
                    <button class="buttons">tan<sup>-1</sup></button>
                    <button class="buttons">e<sup>x</sup></button>
                </div>
                <div class="row">
                    <button class="buttons">Deg</button>
                    <button class="buttons">&pi;</button>
                    <button class="buttons">EE</button>
                    <button class="buttons">Rand</button>
                </div>
            </div>`
            
tbtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id == 'sci'){
            head.appendChild(elem)
            e.target.style.backgroundColor = 'rgb(96, 108, 108)'
            bas.style.backgroundColor =  'rgba(248, 44, 29, 0.895)'
        }
        if(e.target.id == 'bas'){
            head.removeChild(elem)
            e.target.style.backgroundColor = 'rgb(96, 108, 108)'
            sci.style.backgroundColor =  'rgba(248, 44, 29, 0.895)'
        }
        
    })
})

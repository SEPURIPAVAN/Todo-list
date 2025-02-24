//after u lern do taht s.no, thing
//add alert
//cursor from one input to other
//add key typingfeature
let btnadd=document.querySelector(".sub")
let ip=document.querySelector(".add")
let ip2=document.querySelector(".comp")
let tbody=document.querySelector("tbody")

btnadd.addEventListener("click",function(event){
    event.preventDefault();
    let addv=ip.value;
    let compl=ip2.value;
    if(addv){
        let tr=document.createElement("tr")
        let td0=document.createElement("td")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let bt=document.createElement("button")
        bt.classList.add("btndel")
        bt.innerHTML=`<i class="ri-close-large-line"></i>`
        td0.innerHTML=`<i class="ri-arrow-right-line"></i>`
        td1.textContent=addv;
        td2.textContent=compl;
        tr.append(td0,td1,td2,bt)
        tbody.append(tr)

        bt.addEventListener("click",function(){
            tr.remove();
            
        })
        document.querySelector(".add").value="";
        document.querySelector(".comp").value="";
    }
})




let btnm=document.querySelector(".sub1");
let ip1=document.querySelector(".mark");

btnm.addEventListener("click",function(event){
    let minfo=ip1.value;
    
    let rowv=[];
        for(let i=0;i<tbody.rows.length;i++){
            rowv[i]=tbody.rows[i].cells[1].innerText;
            if(minfo==rowv[i]){
                tbody.rows[i].cells[1].classList.add("change")
                tbody.rows[i].cells[2].classList.add("change")
            }  
        }
        
        document.querySelector(".mark").value="";
    })

    let btnum=document.querySelector(".sub2");
    btnum.addEventListener("click",function(event){
        let uminfo=ip1.value;
        let rowvv=[];
            for(let i=0;i<tbody.rows.length;i++){
                rowvv[i]=tbody.rows[i].cells[1].innerText;
                if(uminfo==rowvv[i]){
                    tbody.rows[i].cells[1].classList.add("change1")
                    tbody.rows[i].cells[2].classList.add("change1")
                }
            }
    
            document.querySelector(".mark").value="";
        })
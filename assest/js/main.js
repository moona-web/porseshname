let _input = document.querySelectorAll('.box>section:nth-of-type(1)>input')
// console.log(_input);

let _input1 = document.querySelectorAll('.box>section:nth-of-type(2)>input')


let _btn = document.getElementsByTagName('button')
// console.log(_btn);

let _sec = document.querySelectorAll('section')
// console.log(_sec);
let k = 0


let _circle = document.querySelectorAll('.box>div>div')
// console.log(_circle);

let _icon = document.querySelectorAll('.box>div>div>i')

let txtarea = document.querySelector('.box>section:nth-of-type(3)>.textareaa')
// console.log(txtarea);

_btn[0].addEventListener('click' , function(){

    
    if (k <= _sec.length - 1) {
        _sec[k].style.display = 'none'
        _sec[k - 1].style.display = 'block'
        _circle[k].style.borderBottom = '3px solid gray'
        _icon[k].style.background = 'gray'
        k--
        if(k == 0){
            _btn[0].style.display = 'none'
        }
       
    }
})



_btn[1].addEventListener('click' , function(){
//     if (_input[0].value.length < 4) {
//         alert("نام حداقل باید 4 کاراکتر داشته باشد");
//         _input[0].value=''
//         return false;
//     }

//     if (_input[1].value.length < 4) {
//         alert("نام خانوادگی حداقل باید 4 کاراکتر داشته باشد");
//         _input[1].value=''
//         return false;
//     }
    
//     var userEmail = _input[2].value;
//     var pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
//     var regexResult = pattern.test(userEmail);
//     if (!regexResult) {
//         alert("ایمیل وارد شده معتبر نمی باشد");
//         _input[2].value=''
//         return false;
//     }

//     var _phone = _input[3].value;
//     var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
//    var result = regex.test(_phone);
//    if (!result) {
//     alert("شماره را درست وارد کنید ");
//     _input[3].value=''
//     return false;

// }
   
//     if (_input[4].value.length < 4) {
//         alert("درست وارد کنید حداقل باید 4 کاراکتر داشته باشد");
//         _input[4].value=''
//         return false;
//     }




    let arr = []

        _input.forEach((val)=>{
            
            if(val.value == ''){
                val.style.borderBottom = '2px solid red'
                arr.push(val)
            }else{
                val.style.borderBottom = '2px solid green'
            }
        })

 

    if( 
        arr.length == 0 && k < _sec.length - 1 
    
    )
    {
        _sec[k].style.display = 'none'
        _sec[k + 1].style.display = 'block'
        _btn[0].style.display = 'block'
        _circle[k+1].style.borderBottom = '3px solid blue'
         _icon[k+1].style.background = 'blue'
        k++


    }
})







// _btn[1].addEventListener('click' , ()=>{
//   

//     if(arr.length == 0){
//         _sec[k].style.display = 'none'
//         _sec[k+1].style.display = 'block'
//         _btn[k].style.display = 'block'
//         _circle[k+1].style.borderBottom = '3px solid blue'
//         _icon[k+1].style.background = 'blue'
//     }else{
//         alert("Please fill all fields")
//     }

//     _input1.forEach(function(val){
//         if(val.checked){
//         _sec[k+1].style.display = 'none'
//         _sec[k+2].style.display = 'block'
//         _btn[k+1].style.display = 'block'
//         _circle[k+2].style.borderBottom = '3px solid blue'
//         _icon[k+2].style.background = 'blue'
//         }


//     })

//     if(txtarea.value != ''){
//         _sec[k+2].style.display = 'none'
//         _sec[k+3].style.display = 'block'
//         _btn[k+1].style.display = 'none'
//         _btn[k].style.display = 'none'
//         _circle[k+3].style.borderBottom = '3px solid blue'
//         _icon[k+3].style.background = 'blue'
//     }
    
    
// })
console.log(_sec.length);

// _btn[0].addEventListener('click' , function(){


// if(_sec[2]){
//     _sec[k].style.display = 'none'
//      _sec[k+1].style.display = 'block'
//      _sec[k+2].style.display = 'none'

// }

//     _sec[k].style.display = 'block'
//     _sec[k+1].style.display = 'none'
//     _btn[k].style.display = 'none'
//     _circle[k+1].style.borderBottom = '3px solid gray'
//     _icon[k+1].style.background = 'gray'

// })



// function _nextsection(){
// _sec[k].style.display = 'none'
// _sec[k+1].style.display = 'block'
// _btn[k].style.display = 'block'
//  _circle[k+1].style.borderBottom = '3px solid blue'
// _icon[k+1].style.background = 'blue'

// }



































































// let turn = 0

// _btn[1].addEventListener('click', function () {
//     turn++

//     _input.forEach(function (val, i) {
//         if (i < 5) {
//             if (val.value == '') {
//                 val.style.borderBottom = '2px solid red'
//             }
//         } else {
//             val.style.borderBottom = '2px solid black'

//         }

//     })

//     if (turn == 2) {

//         _sec[0].style.display = 'none'
//         _sec[1].style.display = 'block'
//         _btn[0].style.display = 'block'
//         _circle[1].style.borderBottom = '3px solid blue'
//         _icon[1].style.background = 'blue'
  
//     }

//     // for(let k=0 ; k<_radio.length ; k++){
//     //     if(_radio[k].checked){
//     //         console.log(_radio[k].value);
//     //     }else{
//     //         console.log('test');
//     //     }
        
//     // }
 

//     if (turn == 3 ) {
//         _sec[0].style.display = 'none'
//         _sec[1].style.display = 'none'
//         _sec[2].style.display = 'block'
//         // _btn[0].style.display = 'block'
//         _circle[2].style.borderBottom = '3px solid blue'
//         _icon[2].style.background = 'blue'

//     }

//     if (turn == 4) {
//         if(_textarea.Text == " "){
//             _textarea.innerHTML = 'plz fill'
//             _textarea.style.border = '2px solid red'
//         }else{


// _sec[0].style.display = 'none'
// _sec[1].style.display = 'none'
// _sec[2].style.display = 'none'
// _sec[3].style.display = 'block'

// // _btn[0].style.display = 'block'
// _circle[3].style.borderBottom = '3px solid blue'
// _icon[3].style.background = 'blue'
//         }
       
//     }

//     if (turn == 5) {
//         _sec[0].style.display = 'none'
//         _sec[1].style.display = 'none'
//         _sec[2].style.display = 'none'
//         _sec[3].style.display = 'none'
//         _sec[4].style.display = 'block'


//         // _btn[0].style.display = 'block'
//         _circle[4].style.borderBottom = '3px solid blue'
//         _icon[4].style.background = 'blue'
//     }

// })



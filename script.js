
document.getElementById('chatyicon').append('hello')
    // document.querySelector('chattray').style.display = "none";
    // if(document.querySelector('chattray').style.display = "none"){
    //     document.querySelector('chattray').style.display = "block"

    // };
    document.getElementById('chatyicon').addEventListener('click',function(){
        // document.getElementById('chatytray').style.display='none';
        if(document.getElementById('chatytray').style.display=='none'){
            document.getElementById('chatytray').style.display='block';
        }else{document.getElementById('chatytray').style.display='none'}
    });

    document.querySelectorAll('servicesitem').forEach(item=>(item.style.backgroundColor='white'))

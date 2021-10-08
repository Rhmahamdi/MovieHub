

$(".ico1").click(function (e) { 

    let ribbonOffset = $(".ribbon").offset().left;
    let ArrLink = Array.from($("ul li"))
    $(".line1").css({display : "block"});
  
    $(".sideBar").animate({left : `${-ribbonOffset}`},1000)

    if( $(this).hasClass("fa-times") ){
        $(this).removeClass("fa-times")
        $(this).addClass("fa-align-justify")
        ArrLink.forEach((link)=>{link.classList.add("animate__animated","animate__fadeOutDown")})
        ArrLink.forEach((link)=>{link.classList.remove("animate__fadeInUp")})
    

}
    else {
        $(this).addClass("fa-times")
        $(this).removeClass("fa-align-justify")
        console.log("else")
        ArrLink.forEach((link)=>{link.classList.add("animate__animated","animate__fadeInUp")})
        ArrLink.forEach((link)=>{link.classList.remove("animate__fadeOutDown")})
    }

    
});

//================= form regax =====================
$(".name").keyup(function checkname(){
    let val = $(this).val()
    let nameRegex =/^[a-zA-Z]+( [a-zA-Z]+)$/

    if (!nameRegex.test(val)|| val==""){
    $(this).next().removeClass("d-none")
    // $(this).next().addClass("d-block")
    // return 0;
    }else {
    // $(this).next().removeClass("d-block")
    $(this).next().addClass("d-none")
        // return 1;
    }

})

$(".email").keyup(function checkemail(){
    let val = $(this).val()
    let emailRegex =/^[a-zA-Z0-9_\-\.]+\@[a-z.]+(\.com){1}$/;


    if (!emailRegex.test(val)|| val==""){
        $(this).next().removeClass("d-none")
        // $(this).next().addClass("d-block")
        // return 0;
        }else {
        // $(this).next().removeClass("d-block")
        $(this).next().addClass("d-none")
        // return 1;
    }
        
})

$(".phone").keyup(function checkphone(){
    let val = $(this).val()
    let phoneRegex = /^(01)[2,5,1,0][0-9]{8}$/

    if (!phoneRegex.test(val)|| val==""){
        $(this).next().removeClass("d-none")
        // $(this).next().addClass("d-block")
        // return 0;
        }else {
        // $(this).next().removeClass("d-block")
        $(this).next().addClass("d-none")
        // return 1;
    }
})

$(".age").keyup(function checkage(){
    let val = $(this).val()

    let ageRegex =/^[1-7][0-9]|(80)$/
    if (!ageRegex.test(val)|| val==""){
        $(this).next().removeClass("d-none")
        // $(this).next().addClass("d-block")
        // return 0;
        }else {
        // $(this).next().removeClass("d-block")
        $(this).next().addClass("d-none")
        // return 1;
    }
    
})
$(".password").keyup(checkpass)
function checkpass (){
    let val = $(this).val()
    let passregex =/^[0-9]{8,12}$/
    if (!passregex.test(val)|| val==""){
        $(this).next().removeClass("d-none")

    }else {
        $(this).next().addclass("d-none")
    }

    // if($(".password").val()==$(".repassword").val()){

    //     $("rep").addClass("d-none")
    // }else{
    //     $("rep").removeClass("d-none")
    // }
}




if ($(".name")=="" || $(".email")=="" ||  $(".age")=="" || $(".phone")=="" ||  $(".password")=="" ||  $(".repassword")==""){
    $("#submitBtn").addClass(" disabled")
}else{
    $("#submitBtn").removeClass(" disabled")
}
//=============================================================

function displayMovies(poster,title,desc,rate,release){
    
    // let imgPath='https://image.tmdb.org/t/p/w500/'
    
       $(".row-main").append(`
               <div class="col-md-4 my-3 ">
               <div class="movie position-relative">
               <img class="img-fluid rounded-2" src=https://image.tmdb.org/t/p/original${poster} alt="">

               <div class="caption text-center">
                   <h2 class="pt-5">${title}</h2>
                   <p>${desc}</p>
                   <p><span>rate: </span> <span>${rate}</span></p>
                   <p>${release}</p>
               </div>
               </div>
           </div>      
       `)    
}

async function movies() {
    let myData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`);
     myData = await myData.json()

     let results = myData.results.length;

    for (let i=0;i<results;i++){  

        displayMovies(myData.results[i].poster_path,myData.results[i].original_title,myData.results[i].overview,myData.results[i].vote_average,myData.results[i].release_date)
    }
 

}

movies()


$("#allMovies").keyup(function(){
    let word=$(this).val();
    console.log(word)
})


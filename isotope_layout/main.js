window.addEventListener("load",()=>{
    const grid = new Isotope("section",{ //배치할 요소를 감싼 부모요소
        itemSelection: "article", //배치할 요소의 이름
        columnWidth: "article", //너비값을 구할 요소명,(사실은 높이값)
        transitionDuration: "0.5s" // 화면 재배치시 요소가 움직이는 속도
    });
    let btns = document.querySelectorAll("main ul li");

    for(let el of btns){
        el.addEventListener("click",(e)=>{
            e.preventDefault();
            
            //버튼 클릭시 a태그 안의 href속성안의 값을 변수로 담습니다
            let sort = e.currentTarget.querySelector("a").getAttribute("href");

            //grid를 호출해서 filter를 적용한 값들만 보여지게 합니다
            grid.arrange({
                filter: sort
            });

            for(let el of btns){
                el.classList.remove("on")
            }
            el.classList.add("on")
        })
    }
});

//버튼을 클릭했을때 sort 되게 하는 코드를 작성


// key : AIzaSyCuozbhwv2qSp0hiD1cu7p6Uf2bSXEALbg;

// list : PLpCsw49zIOW0BJ9HE4h2TzCna4EoxYRCy

let key = "AIzaSyCuozbhwv2qSp0hiD1cu7p6Uf2bSXEALbg";
let list = "PLpCsw49zIOW0BJ9HE4h2TzCna4EoxYRCy";
let num = 4;
let main = document.querySelector('main')
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${list}&maxResults=${num}`;

fetch(url)
    .then((data)=>{
        // console.log(data);
        return data.json();
    })
    .then((json)=>{
        console.log(json)
        let items = json.items;
        console.log(items)


        // a += c
        // a = a + c
        let result = "";

        items.map((el)=>{
            result += `
                <article>
                    <a href="${el.snippet.resourceId.videoId}">
                    <img src="${el.snippet.thumbnails.medium.url}">
                    </a>
                    <h1>${el.snippet.title}</h1>
                </article>
            `;
        });
        main.innerHTML = result;
    });

    main.addEventListener("click",(e)=>{
        e.preventDefault();
        
        //currentTarget을 쓰면 안됩니다 : main에 이벤트 위임으로 안의 article들에 클릭이벤트가 부여되록
        //하기 때문에 currentTarget은 main입니다. target은 article(클릭한 그대상)을 말합니다.
        let vidId = e.target.closest("article").querySelector("a").getAttribute("href");
        let pop = document.createElement("figure");
        pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${vidId}">
        `;
        main.append(pop);
        //node에 관련된 방법
    })


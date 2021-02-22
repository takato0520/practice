let boxes = document.getElementsByClassName('box')
var point = 0
document.getElementById('point').textContent = point


//STARTを押してからの処理
function gameStart() {

    //黄色をクリックしたら得点を＋１する,間違えたら−１するロジックを各Boxに追加する
    for (let index = 0; index < boxes.length; index++) {
        const target = boxes[index]

        let clickEventLogic = function () {
            if (target.className === 'box yellow') {
                target.classList.remove('yellow')
                point += 1
                document.getElementById('point').textContent = point
            } else if (point > 0) {
                point -= 1
                document.getElementById('point').textContent = point
            }

        }
        target.onclick = clickEventLogic
    }

    document.getElementById("startbtn").textContent = "STOP"
    document.getElementById("startbtn").onclick = gameEnd


    //１秒ごとに升目を黄色にする
    function getRandomBox() {
        var randomN = Math.floor(Math.random() * boxes.length)
        let boxPosition = boxes[randomN]
        console.log(randomN)
        boxPosition.classList.add('yellow')
    }

    let timelimit = setInterval(getRandomBox, 1000)

    //ゲーム終了時の処理
    function gameEnd() {
        clearInterval(timelimit)
        document.getElementById("startbtn").textContent = "START"

        for (let index = 0; index < boxes.length; index++) {
            const target = boxes[index]
            target.classList.remove('yellow')
            target.onclick = ""
        }
        document.getElementById("startbtn").onclick = gameStart
    }
    setTimeout(gameEnd, 10000)
}


document.getElementById("startbtn").onclick = gameStart
// Zadatak 1 kod ide ovdje
var leftPlayerIsSet = false;
var rightPlayerIsSet = false;
var wait = 0;

class GameSetup {
    winner = 0;
    playerLeft = null;
    leftPlayerID = null;

    playerRight = null;
    rightPlayerID = null;

    init() {
        document.getElementById("generateFight").addEventListener("click", (e) => {
            e.preventDefault();
            this._startFight();
        });
        
        document.getElementById("addFighter").addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./addFighter.php";

        });

        document.getElementById("generateFight").disabled = true;

        this._clickHandler();
    }

    _clickHandler() {
        const players = document.querySelectorAll(".fighter-box");


        document.getElementById("randomFight").addEventListener("click", (e) => {
            e.preventDefault();
            let leftPlayer = Math.floor(Math.random() * 6);
            let rightPlayer = Math.floor(Math.random() * 6);
            while (leftPlayer == rightPlayer) {
                rightPlayer = Math.floor(Math.random() * 6);
            }
            this._selectPlayer(players[leftPlayer], 0);
            this._selectPlayer(players[rightPlayer], 1);

            document.getElementsByClassName("featured-cat-fighter-image")[this.winner].style.border = "none";
            document.getElementsByClassName("featured-cat-fighter-image")[this.winner ? 0 : 1].style.border = "none";
            document.getElementById("message").innerHTML = "";
            this._enableFight();
        });

        for (const player of players) {
            player.addEventListener("click", (e) => {
                e.preventDefault();
                document.getElementsByClassName("featured-cat-fighter-image")[this.winner].style.border = "none";
                document.getElementsByClassName("featured-cat-fighter-image")[this.winner ? 0 : 1].style.border = "none";
                document.getElementById("message").innerHTML = "";
                if (player.classList.contains("left")) {
                    this._selectPlayer(player, 0);
                }
                else {
                    this._selectPlayer(player, 1);

                }
            });
        }

        // click listener Edit buttons
        const editButtons = document.querySelectorAll("#edit");

        console.log(editButtons);
        for (const button of editButtons) {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                //console.log(button);
                let pressedID = JSON.parse(button.dataset.info).id;
                console.log(pressedID);
                window.location.href = "./updateFighter.php" +'?id='+ pressedID;

            });
        }

    }

    _selectPlayer(player, side) {

        side ? this.playerRight = player : this.playerLeft = player;
        const info = JSON.parse(player.dataset.info);
        const image = player.children[0].getAttribute("src");
        console.log(player);

        document.getElementsByClassName("name")[side].innerHTML = info.name;
        document.getElementsByClassName("age")[side].innerHTML = info.age;
        document.getElementsByClassName("skills")[side].innerHTML = info.catInfo;
        document.getElementsByClassName("record")[side].getElementsByClassName("wins")[0].innerHTML = info.record.wins;
        document.getElementsByClassName("record")[side].getElementsByClassName("loss")[0].innerHTML = info.record.loss;
        document.getElementsByClassName("featured-cat-fighter-image")[side].setAttribute("src", image);

        if (side) {
            rightPlayerIsSet = true;
            this.rightPlayerID = info.id;
        }
        else {
            leftPlayerIsSet = true;
            this.leftPlayerID = info.id;
        }

        this._disableClick(side, info.id);
        this._enableFight();

    }

    _disableClick(side, id) {
        this._resetClicks(side);

        const players = document.querySelectorAll(".fighter-box");
        let size = players.length / 2;

        if (side) {
            players[parseInt(id) - 1].style.pointerEvents = "none";
            players[parseInt(id) - 1].style.opacity = "0.2";
            players[parseInt(id) - 1 + size].children[0].style.border = "thick solid #FFFF44";
        }
        else {
            players[parseInt(id) - 1 + size].style.pointerEvents = "none";
            players[parseInt(id) - 1 + size].style.opacity = "0.2";
            players[parseInt(id) - 1].children[0].style.border = "thick solid #FFFF44";

        }
    }

    _resetClicks(side) {
        const players = document.querySelectorAll(".fighter-box");
        let size = players.length / 2;
        if (side) {
            for (var i = 0; i < size; i++) {
                //console.log(players[i]);
                players[i].style.pointerEvents = "auto";
                players[i].style.opacity = "1";
                players[i + size].children[0].style.border = "none";
            }
        }
        else {
            for (var i = 0; i < size; i++) {
                players[i + size].style.pointerEvents = "auto";
                players[i + size].style.opacity = "1";
                players[i].children[0].style.border = "none";
            }
        }
    }

    _enableFight() {
        if (leftPlayerIsSet & rightPlayerIsSet) {
            document.getElementById("generateFight").disabled = false;
        }
    }

    _startFight() {
        this._disableAllButtons();
        this._countdown();
        this._winner();
        this.UpdateCats();
    }

    /// ----------------------------
    UpdateCats() {

    }

    _disableAllButtons() {
        document.getElementById("addFighter").disabled = true;
        document.getElementById("generateFight").disabled = true;
        document.getElementById("randomFight").disabled = true;
        const players = document.querySelectorAll(".fighter-box");
        for (const player of players) {
            player.style.pointerEvents = "none";
        }

        const editButtons = document.querySelectorAll("#edit");
        for (const button of editButtons) {
            button.disabled=true;
        }
    }

    _enableAllButtons() {
        document.getElementById("randomFight").disabled = false;
        document.getElementById("addFighter").disabled = false;
        const players = document.querySelectorAll(".fighter-box");
        for (const player of players) {
            player.style.pointerEvents = "auto";
        }

        const editButtons = document.querySelectorAll("#edit");
        for (const button of editButtons) {
            button.disabled=false;
        }
    }

    _countdown() {
        let clock = document.getElementById("clock");
        document.getElementById("gameinfo").innerHTML = "Wait, fight in progress.";
        var seconds = 3;
        clock.innerHTML = seconds;
        var counter = setInterval(() => {
            seconds -= 1;
            clock.innerHTML = seconds;
            if (seconds == 0) {
                clock.innerHTML = "";
                document.getElementsByClassName("featured-cat-fighter-image")[this.winner].style.border = "15px solid #33AA33";
                document.getElementsByClassName("featured-cat-fighter-image")[this.winner ? 0 : 1].style.border = "15px solid #DD4444";
                document.getElementById("message").innerHTML = "Winner is " + document.getElementsByClassName("name")[this.winner].innerHTML;
                this._enableAllButtons();

                let wins = parseInt(document.getElementsByClassName("record")[this.winner].getElementsByClassName("wins")[0].innerHTML) + 1;
                let winnerLoss = parseInt(document.getElementsByClassName("record")[this.winner].getElementsByClassName("loss")[0].innerHTML);

                let loss = parseInt(document.getElementsByClassName("record")[this.winner ? 0 : 1].getElementsByClassName("loss")[0].innerHTML) + 1;
                let losserWins = parseInt(document.getElementsByClassName("record")[this.winner ? 0 : 1].getElementsByClassName("wins")[0].innerHTML);
                document.getElementsByClassName("record")[this.winner].getElementsByClassName("wins")[0].innerHTML = wins;
                document.getElementsByClassName("record")[this.winner ? 0 : 1].getElementsByClassName("loss")[0].innerHTML = loss;


                const infoWinner = JSON.parse(this.winner ? this.playerRight.dataset.info : this.playerLeft.dataset.info);
                infoWinner.record.wins = wins;

                const infoLosser = JSON.parse(this.winner ? this.playerLeft.dataset.info : this.playerRight.dataset.info);
                infoLosser.record.loss = loss;

                let winerId = this.winner ? this.rightPlayerID : this.leftPlayerID;
                let loserId = this.winner ? this.leftPlayerID : this.rightPlayerID;

                let winerData = new FormData();
                winerData.append("id", winerId);
                winerData.append("wins", wins);
                winerData.append("loss", winnerLoss);
                fetch("controller/db/Update_wins&loss.php", {
                    method: "post",
                    body: winerData,
                }).then((res) => res.text());


                let loserData = new FormData();
                loserData.append("id", loserId);
                loserData.append("wins", losserWins);
                loserData.append("loss", loss);
                fetch("controller/db/Update_wins&loss.php", {
                    method: "post",
                    body: loserData,
                }).then((res) => res.text());

                const players = document.querySelectorAll(".fighter-box");
                for (const player of players) {
                    const oldInfo = JSON.parse(player.dataset.info);
                    if (oldInfo.name == infoWinner.name) {
                        //console.log(oldInfo.name + infoWinner.name);
                        //console.log(infoWinner);
                        player.setAttribute("data-info", JSON.stringify(infoWinner));
                    }
                    if (oldInfo.name == infoLosser.name) {
                        //console.log(oldInfo.name + infoLosser.name);
                        //console.log(infoLosser);
                        player.setAttribute("data-info", JSON.stringify(infoLosser));
                    }
                }
                document.getElementById("gameinfo").innerHTML = "Choose your cat";
                clearInterval(counter);
            }
        }, 1000);
    }

    _winner() {
        let wins = parseInt(document.getElementsByClassName("record")[0].getElementsByClassName("wins")[0].innerHTML);
        let loos = parseInt(document.getElementsByClassName("record")[0].getElementsByClassName("loss")[0].innerHTML);
        let percentageP1 = wins / (wins + loos);

        wins = parseInt(document.getElementsByClassName("record")[1].getElementsByClassName("wins")[0].innerHTML);
        loos = parseInt(document.getElementsByClassName("record")[1].getElementsByClassName("loss")[0].innerHTML);
        let percentageP2 = wins / (wins + loos);

        if (percentageP1 > percentageP2) {
            if (percentageP1 - percentageP2 > 0.1) {
                percentageP1 = 0.7;
                percentageP2 = 0.3;
            }
            else if (percentageP1 - percentageP2 < 0.1) {
                percentageP1 = 0.6;
                percentageP2 = 0.4;
            }
        }
        else {
            if (percentageP2 - percentageP1 > 0.1) {
                percentageP1 = 0.3;
                percentageP2 = 0.7;
            }
            else if (percentageP2 - percentageP1 < 0.1) {
                percentageP1 = 0.4;
                percentageP2 = 0.6;
            }
        }
        this.winner = Math.random() < percentageP1 ? 0 : 1;
    }

}

const gameSetupObj = new GameSetup();
gameSetupObj.init();

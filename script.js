//Reimu - Will of Shrine Maiden. Survive 1 fatal attack with 1 hp. Next turn will strike first and do HUGE damage. Bomb does HUGE damage. Guard evades damage for 1 turn and counter attacks. Cannot guard twice in a row.
//Marisa - Passive. Attack Boost. Marisa gains more attack as the battle continues. Bomb does huge damage based on attack. No guard. Final Spark triggers instantly if Marisa survives with <25% hp.
//Cirno - Freeze ability. When Cirno defends, reduces damage and freeze the opponent the next turn. Bomb freezes enemy for 3 turns and does some damage.
//Suika - Massive HP and high attack. Bomb doubles Suika's attack for 5 turns. Guard halves damage for 3 turns.

$(document).ready(function() {

audiovolume = document.getElementById("songplayer");;
audiovolume.volume=.7;

gameStart = false;
CirnoSelected = false;
ReimuSelected = false;
fightStart = false;
enemiesDefeated = 0;
lunatic = false;

playerStats = {}
defenderStats = {}

enemy1Stats = {no: 1}
enemy2Stats = {no: 2}
enemy3Stats = {no: 3}

var intervalID;

var switchCharacter = new Audio('audio/switchcharacter.mp3');
var switchCharacter2 = new Audio('audio/switchcharacter2.mp3');
var switchCharacter3 = new Audio('audio/switchcharacter3.mp3');
var switchCharacter4 = new Audio('audio/switchcharacter4.mp3');
var selectCirno = new Audio('audio/selectcirno.mp3');
var selectReimu = new Audio('audio/selectreimu.mp3');
var selectMarisa = new Audio('audio/selectmarisa.mp3');
var selectSuwako = new Audio('audio/selectsuwako.mp3');
var attackSound = new Audio('audio/ATTACK3.wav');
var deadSound = new Audio('audio/DEAD.wav');
var fightStartSoud = new Audio('audio/BONUS2.wav');

CirnoObj = {
    hp: 100,
    attack: 20,
    counter: 20,
    hero: 'cirno',
}

ReimuObj = {
    hp: 200,
    attack: 40,
    counter: 40,
    hero: 'reimu',
}

MarisaObj = {
    hp: 100,
    attack: 20,
    counter: 20,
    hero: 'marisa',
}

SuwakoObj = {
    hp: 300,
    attack: 1,
    counter: 1,
    hero: 'suwako',
}

$(".cirno").mouseenter(function(){
        $("#cirnoSelect").animate({left: '0px'});
        switchCharacter.play();
    });

$(".cirno").mouseleave(function(){
        $("#cirnoSelect").animate({left: '-1000px'});
    });

$(".reimu").mouseenter(function(){
        $("#reimuSelect").animate({left: '0px'});
        switchCharacter2.play();
    });

$(".reimu").mouseleave(function(){
        $("#reimuSelect").animate({left: '-1000px'});
    });

$(".marisa").mouseenter(function(){
        $("#marisaSelect").animate({left: '0px'});
        switchCharacter3.play();
    });

$(".marisa").mouseleave(function(){
        $("#marisaSelect").animate({left: '-1000px'});
    });

$(".suwako").mouseenter(function(){
        $("#suwakoSelect").animate({left: '0px'});
        switchCharacter4.play();
    });

$(".suwako").mouseleave(function(){
        $("#suwakoSelect").animate({left: '-1000px'});
    });

$('.cirno').on('click', function() {
    if (gameStart == false) {
        selectCirno.play();
        gameStart = true;
        $('#player').append('<div id="player1" class=""><img id="cirno" class="heroicons img-fluid" src="images/cirno.gif"></div>');
        $('#enemy1').append('<div id="enemy1" class=""><img id="reimu" class="flipH heroicons img-fluid" src="images/reimu.gif"></div>');
        $('#enemy2').append('<div id="enemy2" class=""><img id="marisa" class="flipH heroicons img-fluid" src="images/marisa.gif"></div>');
        $('#enemy3').append('<div id="enemy3" class=""><img id="suwako" class="flipH heroicons img-fluid" src="images/suwako.gif"></div>');
        $('#startingpage').hide();
        $('#gamepage').show();
        playerStats = CirnoObj;
        enemy1Stats = ReimuObj;
        enemy2Stats = MarisaObj;
        enemy3Stats = SuwakoObj;
        enemy1Stats.no = 1;
        enemy2Stats.no = 2;
        enemy3Stats.no = 3;
    }
});

$('.reimu').on('click', function() {
    if (gameStart == false) {
        selectReimu.play();
        gameStart = true;
        $('#enemy1').append('<div id="enemy1" class=""><img id="cirno" class="flipH heroicons img-fluid" src="images/cirno.gif"></div>');
        $('#player').append('<div id="player1" class=""><img id="reimu" class="heroicons img-fluid" src="images/reimu.gif"></div>');
        $('#enemy2').append('<div id="enemy2" class=""><img id="marisa" class="flipH heroicons img-fluid" src="images/marisa.gif"></div>');
        $('#enemy3').append('<div id="enemy3" class=""><img id="suwako" class="flipH heroicons img-fluid" src="images/suwako.gif"></div>');
        $('#startingpage').hide();
        $('#gamepage').show();
        enemy1Stats = CirnoObj;
        playerStats = ReimuObj;
        enemy2Stats = MarisaObj;
        enemy3Stats = SuwakoObj;
        enemy1Stats.no = 1;
        enemy2Stats.no = 2;
        enemy3Stats.no = 3;
    }
});

$('.marisa').on('click', function() {
    if (gameStart == false) {
        selectMarisa.play();
        gameStart = true;
        $('#enemy1').append('<div id="enemy1" class=""><img id="cirno" class="flipH heroicons img-fluid" src="images/cirno.gif"></div>');
        $('#enemy2').append('<div id="enemy2" class=""><img id="reimu" class="flipH heroicons img-fluid" src="images/reimu.gif"></div>');
        $('#player').append('<div id="player1" class=""><img id="marisa" class="heroicons img-fluid" src="images/marisa.gif"></div>');
        $('#enemy3').append('<div id="enemy3" class=""><img id="suwako" class="flipH heroicons img-fluid" src="images/suwako.gif"></div>');
        $('#startingpage').hide();
        $('#gamepage').show();
        enemy1Stats = CirnoObj;
        enemy2Stats = ReimuObj;
        playerStats = MarisaObj;
        enemy3Stats = SuwakoObj;
        enemy1Stats.no = 1;
        enemy2Stats.no = 2;
        enemy3Stats.no = 3;
    }
});

$('.suwako').on('click', function() {
    if (gameStart == false) {
        selectSuwako.play();
        gameStart = true;
        $('#enemy1').append('<div id="enemy1" class=""><img id="cirno" class="flipH heroicons img-fluid" src="images/cirno.gif"></div>');
        $('#enemy2').append('<div id="enemy2" class=""><img id="reimu" class="flipH heroicons img-fluid" src="images/reimu.gif"></div>');
        $('#enemy3').append('<div id="enemy3" class=""><img id="marisa" class="flipH heroicons img-fluid" src="images/marisa.gif"></div>');
        $('#player').append('<div id="player1" class=""><img id="suwako" class="heroicons img-fluid" src="images/suwako.gif"></div>');
        $('#startingpage').hide();
        $('#gamepage').show();
        enemy1Stats = CirnoObj;
        enemy2Stats = ReimuObj;
        enemy3Stats = MarisaObj;
        playerStats = SuwakoObj;
        enemy1Stats.no = 1;
        enemy2Stats.no = 2;
        enemy3Stats.no = 3;
    }
});

$('#enemy1').on('click', function() {
    if (gameStart && fightStart == false) {
        // fightStart = true;
        defenderStats = enemy1Stats;
        $('#gamepage').hide();
        $('#fightpage').show();
        $('#defender').append(this);
        $('#attacker').append($('#player1'));
        $('#attackerHP').empty();
        $('#defenderHP').empty();
        $('#attackerHP').append('HP: '+playerStats.hp);
        $('#defenderHP').append('HP: '+defenderStats.hp);
        $('#nextbutton').hide();
    }
    if(enemy1Stats.hero=='cirno'){
        selectCirno.play();
    }
    if(enemy1Stats.hero=='reimu'){
        selectReimu.play();
    }
    if(enemy1Stats.hero=='marisa'){
        selectMarisa.play();
    }
    if(enemy1Stats.hero=='suwako'){
        selectSuwako.play();
    }       
    $('#attackbutton').show();
});

$('#enemy2').on('click', function() {
    if (gameStart && fightStart == false) {
        // fightStart = true;
        defenderStats = enemy2Stats;
        $('#gamepage').hide();
        $('#fightpage').show();
        $('#defender').append(this);
        $('#attacker').append($('#player1'));
        $('#attackerHP').empty();
        $('#defenderHP').empty();
        $('#attackerHP').append('HP: '+playerStats.hp);
        $('#defenderHP').append('HP: '+defenderStats.hp);
        $('#nextbutton').hide();
    }
    if(enemy2Stats.hero=='cirno'){
        selectCirno.play();
    }
    if(enemy2Stats.hero=='reimu'){
        selectReimu.play();
    }
    if(enemy2Stats.hero=='marisa'){
        selectMarisa.play();
    }
    if(enemy2Stats.hero=='suwako'){
        selectSuwako.play();
    }    
    $('#attackbutton').show();
});

$('#enemy3').on('click', function() {
    if (gameStart && fightStart == false) {
        // fightStart = true;
        defenderStats = enemy3Stats;
        $('#gamepage').hide();
        $('#fightpage').show();
        $('#defender').append(this);
        $('#attacker').append($('#player1'));
        $('#attackerHP').empty();
        $('#defenderHP').empty();
        $('#attackerHP').append('HP: '+playerStats.hp);
        $('#defenderHP').append('HP: '+defenderStats.hp);
        $('#nextbutton').hide();
    }
    if(enemy3Stats.hero=='cirno'){
        selectCirno.play();
    }
    if(enemy3Stats.hero=='reimu'){
        selectReimu.play();
    }
    if(enemy3Stats.hero=='marisa'){
        selectMarisa.play();
    }
    if(enemy3Stats.hero=='suwako'){
        selectSuwako.play();
    }    
    $('#attackbutton').show();
});

$('#attackbutton').on('click', function() {
    fightStartSoud.play();
    fightStart = true;
    attackstart();
    var intervalID;

    function attackstart() {
        if (fightStart) {
            $('#'+playerStats.hero).attr('src', 'images/'+playerStats.hero+'-attack.gif');
            $('#'+enemy1Stats.hero).attr('src', 'images/'+enemy1Stats.hero+'-attack.gif');
            $('#'+enemy2Stats.hero).attr('src', 'images/'+enemy2Stats.hero+'-attack.gif');
            $('#'+enemy3Stats.hero).attr('src', 'images/'+enemy3Stats.hero+'-attack.gif');
            $('#attackbutton').hide();
            intervalID = setInterval(attackattackcalc, 2000);
        }
    }

    function attackattackcalc() {
        attackSound.play();
        //Adjust Suwako's damage if fighting Cirno
        if(playerStats.hero == 'suwako' && defenderStats.hero == 'cirno') {
        playerStats.attack = 1000000;
        }
        if(playerStats.hero == 'cirno' && defenderStats.hero == 'suwako') {
        defenderStats.counter = 1000000;
        }
        
        if(playerStats.hero == 'reimu' && defenderStats.hero == 'suwako' && enemiesDefeated<2) {
        defenderStats.counter = 50;
        }

        //First Strike for player
        defenderStats.hp = defenderStats.hp - playerStats.attack;
        $('#defenderHP').text('HP: '+defenderStats.hp);

        //Adjust Player Marisa's attack power after first attack
        if(playerStats.hero == 'marisa') {
        playerStats.attack *= 1.5;
        }

        //First enemy counter attack
        if (defenderStats.hp >0) {
            playerStats.hp = playerStats.hp - defenderStats.counter;
            $('#attackerHP').text('HP: '+playerStats.hp);
        }
        //Adjust Enemy Marisa's attack power after first enemy attack

        if(defenderStats.hero == 'marisa' && playerStats.hero !== 'cirno') {
        defenderStats.counter *= 1.5;
        }

        //Defeat up to 2 enemies
        if (defenderStats.hp <1 && enemiesDefeated <2) {
            deadSound.play();
            $('#'+playerStats.hero).attr('src', 'images/'+playerStats.hero+'.gif');
            $('#'+enemy1Stats.hero).attr('src', 'images/'+enemy1Stats.hero+'-dead.gif');
            $('#'+enemy2Stats.hero).attr('src', 'images/'+enemy2Stats.hero+'-dead.gif');
            $('#'+enemy3Stats.hero).attr('src', 'images/'+enemy3Stats.hero+'-dead.gif');
            clearInterval(intervalID);
            $('#nextbutton').show();
            $("#"+defenderStats.hero+"Defeat").addClass("flipH").animate({right: '0px'});
            fightStart=false;
            //adjust cirno's attack after defeating Marisa
            if(playerStats.hero == 'cirno' && defenderStats.hero =='marisa') {
                playerStats.attack = 300;
            }
        }

        //Victory
        if (defenderStats.hp <1 && enemiesDefeated ==2) {
            deadSound.play();
            $('#'+playerStats.hero).attr('src', 'images/'+playerStats.hero+'.gif');
            $('#'+enemy1Stats.hero).attr('src', 'images/'+enemy1Stats.hero+'-dead.gif');
            $('#'+enemy2Stats.hero).attr('src', 'images/'+enemy2Stats.hero+'-dead.gif');
            $('#'+enemy3Stats.hero).attr('src', 'images/'+enemy3Stats.hero+'-dead.gif');
            clearInterval(intervalID);
            $("#"+defenderStats.hero+"Defeat").addClass("flipH").animate({right: '0px'});
            fightStart=false;
            $('#resetbutton').show();
            $("#"+defenderStats.hero+"Defeat").animate({right: '0px'});
        }

        //Gameover
        if (playerStats.hp <1) {
            deadSound.play();
            $('#'+playerStats.hero).attr('src', 'images/'+playerStats.hero+'-dead.gif');
            $('#'+enemy1Stats.hero).attr('src', 'images/'+enemy1Stats.hero+'.gif');
            $('#'+enemy2Stats.hero).attr('src', 'images/'+enemy2Stats.hero+'.gif');
            $('#'+enemy3Stats.hero).attr('src', 'images/'+enemy3Stats.hero+'.gif');
            clearInterval(intervalID);
            fightStart=false;
            $('#gameoverbutton').show();
            $("#"+playerStats.hero+"PlayerDefeat").animate({left: '0px'});
        }        
    }

});

$('#nextbutton').click(function() {
            fightStartSoud.play();
            $("#"+defenderStats.hero+"Defeat").animate({right: '-500px'});
            $('#enemy'+defenderStats.no).detach();
            $('#player').append($('#player1'));
            $('#fightpage').hide();
            $('#gamepage').show();
            $('#'+playerStats.hero).attr('src', 'images/'+playerStats.hero+'.gif');
            $('#'+enemy1Stats.hero).attr('src', 'images/'+enemy1Stats.hero+'.gif');
            $('#'+enemy2Stats.hero).attr('src', 'images/'+enemy2Stats.hero+'.gif');
            $('#'+enemy3Stats.hero).attr('src', 'images/'+enemy3Stats.hero+'.gif');
            fightStart = false;
            enemiesDefeated++;
            
            
            console.log(enemiesDefeated);

});

// function attack() {
    
//     defenderStats.hp = defenderStats.hp - playerStats.attack;
//     // playerStats.hp = playerStats.hp - defenderStats.counter;
//     $('#defenderHP').text('HP: '+defenderStats.hp);
//     console.log(playerStats.hp);
//     console.log(defenderStats.hp);

//         if (defenderStats.hp >0) {
//             playerStats.hp = playerStats.hp - defenderStats.counter;
//             $('#attackerHP').text('HP: '+playerStats.hp);
//         }

//         if(CirnoSelected) {
//         playerStats.attack *= 1.5;
//         }

//         if(!CirnoSelected && defenderStats.hero == 'A') {
//         defenderStats.counter *= 1.5;
//         }

//         if(defenderStats.hp <1) {
            // deadSound.play();
            // // $('#enemy'+defenderStats.no).empty();
            // $('#enemy'+defenderStats.no).detach();
            // // $('#enemies').append($('#enemy'+defenderStats.no));
            // // $('#enemy'+defenderStats.no).hide();
            // $('#player').append($('#player1'));
            // $('#fightpage').hide();
            // $('#gamepage').show();
            // fightStart = false;
            // enemiesDefeated++;
            // console.log(enemiesDefeated);
//         }

//         if(enemiesDefeated ==1) {
//             console.log('victory');
//             $('#gamepage').hide();
//             $('#fightpage').hide();
//             $('#victory').show();
//             victoryCounter();
//         }
// }  

function victoryCounter() {
    if(typeof(Storage) !== "undefined" && heroASelected) {
        if (sessionStorage.victoriesA) {
            sessionStorage.victoriesA = Number(sessionStorage.victoriesA)+1;
        } else {
            sessionStorage.victoriesA = 1;
        }
        console.log('HeroA Victory: ' +sessionStorage.victoriesA);
        console.log('HeroB Victory: ' +sessionStorage.victoriesB);
        console.log('HeroC Victory: ' +sessionStorage.victoriesC);
        console.log('HeroD Victory: ' +sessionStorage.victoriesD);
    } 

    if(typeof(Storage) !== "undefined" && heroBSelected) {
        if (sessionStorage.victoriesB) {
            sessionStorage.victoriesB = Number(sessionStorage.victoriesB)+1;
        } else {
            sessionStorage.victoriesB = 1;
        }
        console.log('HeroA Victory: ' +sessionStorage.victoriesA);
        console.log('HeroB Victory: ' +sessionStorage.victoriesB);
        console.log('HeroC Victory: ' +sessionStorage.victoriesC);
        console.log('HeroD Victory: ' +sessionStorage.victoriesD);
    }

    if(typeof(Storage) !== "undefined" && heroCSelected) {
        if (sessionStorage.victoriesC) {
            sessionStorage.victoriesC = Number(sessionStorage.victoriesC)+1;
        } else {
            sessionStorage.victoriesC = 1;
        }
        console.log('HeroA Victory: ' +sessionStorage.victoriesA);
        console.log('HeroB Victory: ' +sessionStorage.victoriesB);
        console.log('HeroC Victory: ' +sessionStorage.victoriesC);
        console.log('HeroD Victory: ' +sessionStorage.victoriesD);
    } 

    // if(typeof(Storage) !== "undefined" && heroDSelected) {
    //     if (sessionStorage.victoriesD) {
    //         sessionStorage.victoriesD = Number(sessionStorage.victoriesD)+1;
    //     } else {
    //         sessionStorage.victoriesD = 1;
    //     }
    //     console.log('HeroA Victory: ' +sessionStorage.victoriesA);
    //     console.log('HeroB Victory: ' +sessionStorage.victoriesB);
    //     console.log('HeroC Victory: ' +sessionStorage.victoriesC);
    //     console.log('HeroD Victory: ' +sessionStorage.victoriesD);
    // }
}

$('#resetbutton').on('click', function() {
    reset();
});

$('#gameoverbutton').on('click', function() {
    reset();
});

function reset() {
    // gameStart = false;
    // heroASelected = false;
    // heroBSelected = false;
    // heroCSelected = false;
    // heroDSelected = false;
    // fightStart = false;
    // enemiesDefeated = 0;
    // playerStats = {};
    // defenderStats = {};
    // enemy1Stats = {no: 1};
    // enemy2Stats = {no: 2};
    // enemy3Stats = {no: 3};
    // $('#player').empty();
    // $('#enemies').append($('#enemy1'));
    // $('#enemies').append($('#enemy2'));
    // $('#enemies').append($('#enemy3'));
    // $('#startingpage').show();
    // $('#gamepage').hide();
    // $('#fightpage').hide();
    // $('#victory').hide();
    location.reload();
}

if (sessionStorage.victoriesA > 0 &&
    sessionStorage.victoriesB > 0 &&
    sessionStorage.victoriesC > 0) {
    lunatic = true;
    // init();
    // animate();
}



});


"use strict";
var Visualnovel;
(function (Visualnovel) {
    async function Chapter1() {
        console.log("Prolog");
        let protagName = "";
        let text = {
            game: {
                Hi: "I sense...",
                How: "a new presence",
                Are: "You must be a new player.",
                You: "It has been ages since my creator actually showed his face around here so I thought I was doomed to corrupt in this repository forever..",
                Doing: "Ah well, since I'm programmed this way and I cant go against it i might as well fufill my role.",
                Presence: "What do you want to call the protagonist of this story?",
                //Pname: "So " + characters.protagonist.name + " it is.",
                Confirmation: "Interesting. Very Interesting",
                Start: "Very well",
                Really: "Now then, enjoy the story......I guess"
            },
            Narrator: {
                L0001: "You slowly try to open your eyes.",
                L0002: "It's bright enough to hurt your eyes.",
                L0003: "After a while you begin to process the details of the room.",
                L0004: "Only now you notice a female figure is sitting by your bed.",
                L0005: "After a short while you finally regain conciousness completely",
                L0006: "",
                L0007: "",
                L0008: "",
                L0009: "",
                L0010: ""
            },
            protagonist: {
                P0000: "...",
                P0001: "Its so dark.",
                P0002: "...",
                P0003: "My head hurts.",
                P0004: "Where... am I?",
                P0005: "Is this...",
                P0006: "A hopital room?",
                P0007: "Why am I-",
                P0008: "Wait what? ...why was I...",
                P0009: "...ok.",
                P0010: "Yeah.",
                P0011: "!!!",
                P0012: "",
                P0013: ""
            },
            girl1: {
                G0001: "Oh thank god you managed to wake up!",
                G0002: "You were unconcious for a month. I was starting to get truely concerned.",
                G0003: "Take it easy you've just woken up after all.",
                G0004: "Feeling better now?",
                G0005: "I'm sure you're still very confused so let me give you a quick rundown.",
                G0006: "You were.... involved in a major traffic accident.",
                G0007: "I don't know the full details but it seems you and a couple of others fell victim to a drunk truck driver."
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Hi);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.How);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Are);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.You);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Doing);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Presence);
        protagName = await Visualnovel.ƒS.Speech.getInput();
        Visualnovel.dataForSave.nameProtagonist = protagName;
        Visualnovel.characters.protagonist.name = protagName;
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, "So " + protagName + " it is."); //didnt show the name if used from text
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Confirmation);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Start);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Really);
        Visualnovel.ƒS.Speech.clear();
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0001);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hRoomNightAlt);
        await Visualnovel.ƒS.update(Visualnovel.transition.gradient.duration, Visualnovel.transition.gradient.alpha, Visualnovel.transition.gradient.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0005);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hRoomNight);
        await Visualnovel.ƒS.update(Visualnovel.transition.gradient.duration, Visualnovel.transition.gradient.alpha, Visualnovel.transition.gradient.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        await Visualnovel.ƒS.Sound.play(Visualnovel.sound.chill, 0.3, true);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        let inquire = {
            Others: "There were others involved as well?",
            Self: "What was I doing there?"
        };
        let choice;
        choice = await Visualnovel.ƒS.Menu.getInput(inquire, "");
        switch (choice) {
            case inquire.Others:
                await Visualnovel.ƒS.Speech.tell("", "");
                break;
            case inquire.Self:
                await Visualnovel.ƒS.Speech.tell("", "");
                break;
        }
        return "Chapter2";
        //await ƒS.Location.show(locations.hRoomNightAlt);
        //ƒS.Speech.hide();
        //await ƒS.Location.show(locations.hRoomNight);
        //await ƒS.update(transition.symbol.duration, transition.symbol.alpha, transition.symbol.edge);
        //console.log("fuck");
        //await ƒS.update();
        //console.log("this");
        //await ƒS.update(transition.symbol.duration, transition.symbol.alpha, transition.symbol.edge);
    }
    Visualnovel.Chapter1 = Chapter1;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter2() {
        console.log("FudgeStory Template Scene starting");
        await Visualnovel.ƒS.Speech.tell("Pringles", "Chips");
    }
    Visualnovel.Chapter2 = Chapter2;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter3() {
        console.log("FudgeStory Template Scene starting");
    }
    Visualnovel.Chapter3 = Chapter3;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter4() {
        console.log("FudgeStory Template Scene starting");
    }
    Visualnovel.Chapter4 = Chapter4;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter5() {
        console.log("FudgeStory Template Scene starting");
    }
    Visualnovel.Chapter5 = Chapter5;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter6() {
        console.log("FudgeStory Template Scene starting");
    }
    Visualnovel.Chapter6 = Chapter6;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter7() {
        console.log("FudgeStory Template Scene starting");
    }
    Visualnovel.Chapter7 = Chapter7;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    Visualnovel.ƒ = FudgeCore;
    Visualnovel.ƒS = FudgeStory;
    console.log("Clearing the Vision");
    Visualnovel.transition = {
        symbol: {
            duration: 1,
            alpha: "Assets/Images/symbol.jpg",
            edge: 1
        },
        triangle: {
            duration: 1,
            alpha: "Assets/Images/triangle.jpg",
            edge: 1
        },
        gradient: {
            duration: 3,
            alpha: "Assets/Images/Transitions/middle.jpg",
            edge: 1
        }
    };
    Visualnovel.sound = {
        //themes
        pizza: "Assets/Sounds/Pizza.mp3",
        chill: "Assets/Sounds/perfect-beauty.mp3",
        dream: "Assets/Sounds/relaxing.mp3",
        //SFX
        drop: "Assets/Sounds/Drop.mp3",
        clue: ""
    };
    Visualnovel.locations = {
        beachDay: {
            name: "beachDay",
            background: "Assets/Images/Backgrounds/beachDay.png"
        },
        beachNight: {
            name: "",
            background: ""
        },
        test: {
            name: "test",
            background: "Assets/test.jpg"
        },
        dream: {
            name: "dream",
            background: "Assets/Images/Backgrounds/hazy.jpg"
        },
        hRoomNightAlt: {
            name: "hospital room night but darker",
            background: "Assets/Images/Backgrounds/hospital-room-night-alt.jpg"
        },
        hRoomNight: {
            name: "",
            background: "Assets/Images/Backgrounds/hospital-room-night.jpg"
        }
    };
    Visualnovel.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        girl1: {
            name: "Minne",
            origin: Visualnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Bildpfad",
                happy: "Bildpfad",
                upset: "Bildpfad"
            }
        },
        game: {
            name: "Clearvision"
        }
    };
    let menuButtons = {
        save: "save game",
        load: "load save",
        close: "close menu"
    };
    let menu;
    let mActive = false;
    // Savedate for Gameprogress
    Visualnovel.dataForSave = {
        nameProtagonist: "",
        curiosityCounter: 0,
        truthseeing: false
    };
    async function buttonFunctions(_option) {
        switch (_option) {
            case menuButtons.save:
                await Visualnovel.ƒS.Progress.save();
                break;
            case menuButtons.load:
                await Visualnovel.ƒS.Progress.load();
                break;
            case menuButtons.close:
                menu.close();
                mActive = false;
                break;
        }
    }
    document.addEventListener("keydown", keyPress);
    async function keyPress(_event) {
        switch (_event.code) {
            case Visualnovel.ƒ.KEYBOARD_CODE.F7:
                console.log("Quicksave");
                await Visualnovel.ƒS.Progress.save();
                break;
            case Visualnovel.ƒ.KEYBOARD_CODE.F8:
                console.log("Quickload");
                await Visualnovel.ƒS.Progress.load();
                break;
            case Visualnovel.ƒ.KEYBOARD_CODE.Q:
                if (mActive == false) {
                    console.log("Opening Inventory");
                    menu.open();
                    mActive = true;
                }
                else {
                    console.log("Closing Inventory");
                    menu.close();
                    mActive = false;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        menu = Visualnovel.ƒS.Menu.create(menuButtons, buttonFunctions, "menu");
        let scenes = [
            { scene: Visualnovel.Chapter1, name: "Scene", id: "Scene" },
            { scene: Visualnovel.Chapter2, name: "Scene2", id: "Scene2" },
            { scene: Visualnovel.Chapter3, name: "Scene3", id: "Scene3" },
            { scene: Visualnovel.Chapter4, name: "Scene4", id: "Scene4" },
            { scene: Visualnovel.Chapter5, name: "Scene5", id: "Scene5" },
            { scene: Visualnovel.Chapter6, name: "Scene6", id: "Scene6" },
            { scene: Visualnovel.Chapter7, name: "Scene7", id: "Scene7" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Visualnovel.dataForSave = Visualnovel.ƒS.Progress.setData(Visualnovel.dataForSave, uiElement);
        // start the sequence
        Visualnovel.ƒS.Progress.go(scenes);
    }
})(Visualnovel || (Visualnovel = {}));
//# sourceMappingURL=Clearvision.js.map
"use strict";
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
        }
    };
    Visualnovel.sound = {
        //themes
        pizza: "Assets/Sounds/Pizza.mp3",
        //SFX
        drop: "Assets/Sounds/Drop.mp3"
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
    // Savedate for Gameprogress
    Visualnovel.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Visualnovel.Scene, name: "Scene", id: "Scene" },
            { scene: Visualnovel.Scene2, name: "Scene2", id: "Scene2" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Visualnovel.dataForSave = Visualnovel.ƒS.Progress.setData(Visualnovel.dataForSave, uiElement);
        // start the sequence
        Visualnovel.ƒS.Progress.go(scenes);
    }
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Scene() {
        console.log("Prolog");
        let text = {
            game: {
                Hi: "I sense...",
                How: "a new presence",
                Are: "You must be a new player.",
                You: "It has been ages since my creator actually showed his face around here so I thought I was doomed to corrupt in this repository forever..",
                Doing: "Ah well, since I'm programmed this way and I cant go against it i might as well fufill my role.",
                Presence: ""
            },
            Narrator: {
                L0001: "You see a mostly white room",
                L0002: "Its so dark.",
                L0003: "...",
                L0004: "My head hurts.",
                L0005: "",
                L0006: "Where... am I?",
                L0007: "Looks like...",
                L0008: "A hopital room?",
                L0009: "Why am I-",
                L0010: "Wait what? Why was I..."
            },
            protagonist: {
                P0001: "Its so dark.",
                P0002: "...",
                P0003: "My head hurts.",
                P0004: "Where... am I?",
                P0005: "Looks like...",
                P0006: "A hopital room?",
                P0007: "Why am I-",
                P0008: ""
            },
            girl1: {
                G0001: "Oh thank god you managed to wake up!",
                G0002: "You were unconcious for a month. I was starting to get truely concerned.",
                G0003: "Take it easy you've just woken up after all.",
                G0004: "",
                G0005: "",
                G0006: ""
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Hi);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.How);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Are);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.You);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Doing);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Presence);
        Visualnovel.ƒS.Speech.hide();
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.beachDay);
        Visualnovel.ƒS.Sound.fade(Visualnovel.sound.pizza, 0.5, 2, true);
        console.log("fuck");
        await Visualnovel.ƒS.update();
        console.log("this");
        //await ƒS.update(transition.symbol.duration, transition.symbol.alpha, transition.symbol.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0010);
    }
    Visualnovel.Scene = Scene;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Scene2() {
        console.log("FudgeStory Template Scene starting");
    }
    Visualnovel.Scene2 = Scene2;
})(Visualnovel || (Visualnovel = {}));
//# sourceMappingURL=Clearvision.js.map
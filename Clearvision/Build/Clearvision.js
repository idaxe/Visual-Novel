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
            Narrator: {
                L0001: "...",
                L0002: "Its so dark.",
                L0003: "...",
                L0004: "My head hurts.",
                L0005: "",
                L0006: "Where... am I?",
                L0007: "Looks like...",
                L0008: "A hopital room?",
                L0009: "Why am I-",
                L0010: ""
            },
            protagonist: {
                P0001: "lovely",
                P0002: "tasty"
            }
        };
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
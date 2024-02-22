namespace Visualnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    console.log("Clearing the Vision");
  
    export let transition = {
      symbol: {
        duration: 1,
        alpha: "Assets/Images/symbol.jpg",
        edge: 1
      }
    };

    export let sound = {
      //themes
      pizza: "Assets/Sounds/Pizza.mp3",
      //SFX
      drop: "Assets/Sounds/Drop.mp3"
    };

    export let locations = {
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

    export let characters = {
      narrator: {
        name: ""
      },
      protagonist: {
        name: ""
      },
      girl1: {
        name: "Minne", //rememberance auf Schwedisch lol
        origin: ƒS.ORIGIN.BOTTOMCENTER,
        pose: {
          angry: "Bildpfad",
          happy: "Bildpfad",
          upset: "Bildpfad"
        }
      }
    };


    // Savedate for Gameprogress
    export let dataForSave = {
      nameProtagonist: ""
    };



    window.addEventListener("load", start);
    function start(_event: Event): void {
      let scenes: ƒS.Scenes = [
        { scene: Scene, name: "Scene" , id: "Scene"},
        { scene: Scene2, name: "Scene2", id: "Scene2"}
      ];

      let uiElement: HTMLElement = document.querySelector("[type=interface]");
      dataForSave = ƒS.Progress.setData(dataForSave, uiElement)
  
      // start the sequence
      ƒS.Progress.go(scenes);
    }
  }
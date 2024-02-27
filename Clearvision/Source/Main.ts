namespace Visualnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    console.log("Clearing the Vision");
  
    export let transition = {
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

    export let sound = {
      //themes
      pizza: "Assets/Sounds/Pizza.mp3",
      chill: "Assets/Sounds/perfect-beauty.mp3",
      dream: "Assets/Sounds/relaxing.mp3",
      //SFX
      drop: "Assets/Sounds/Drop.mp3",
      clue: ""
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

    let menu: ƒS.Menu;
    let mActive: boolean = false;

    // Savedate for Gameprogress
    export let dataForSave = {
      nameProtagonist: "",
      curiosityCounter: 0,
      truthseeing: false
    };

    async function buttonFunctions(_option:string): Promise<void> {
      switch(_option) {
        case menuButtons.save:
          await ƒS.Progress.save();
          break;
        case menuButtons.load:
          await ƒS.Progress.load();
          break;
        case menuButtons.close:
          menu.close();
          mActive = false;
          break;
      }
    }

    document.addEventListener("keydown", keyPress);

    async function keyPress(_event: KeyboardEvent): Promise<void> {
      switch(_event.code) {
        case ƒ.KEYBOARD_CODE.F7:
          console.log("Quicksave");
          await ƒS.Progress.save();
          break;
        case ƒ.KEYBOARD_CODE.F8:
          console.log("Quickload");
          await ƒS.Progress.load();
          break;
        case ƒ.KEYBOARD_CODE.Q:
          if (mActive == false){
            console.log("Opening Inventory");
            menu.open();
            mActive = true;
          } else {
            console.log("Closing Inventory");
            menu.close();
            mActive = false;
          }
          break;
      }
    }

    window.addEventListener("load", start);
    function start(_event: Event): void {
      menu = ƒS.Menu.create(menuButtons ,buttonFunctions , "menu");
      let scenes: ƒS.Scenes = [
        { scene: Chapter1, name: "Scene" , id: "Scene"},
        { scene: Chapter2, name: "Scene2", id: "Scene2"},
        { scene: Chapter3, name: "Scene3", id: "Scene3"},
        { scene: Chapter4, name: "Scene4", id: "Scene4"},
        { scene: Chapter5, name: "Scene5", id: "Scene5"},
        { scene: Chapter6, name: "Scene6", id: "Scene6"},
        { scene: Chapter7, name: "Scene7", id: "Scene7"}
      ];

      let uiElement: HTMLElement = document.querySelector("[type=interface]");
      dataForSave = ƒS.Progress.setData(dataForSave, uiElement)
  
      // start the sequence
      ƒS.Progress.go(scenes);
    }
  }
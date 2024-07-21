namespace Visualnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    console.log("Clearing the Vision");
  
    export let transition = {
      side: {
        duration: 1,
        alpha: "Assets/Images/Transitions/side2.png",
        edge: 1
      },
      slide: {
        duration: 3,
        alpha: "Assets/Images/Transitions/slide3.png",
        edge: 1
      },
      dreamEnter: {
        duration: 2,
        alpha: "Assets/Images/Transitions/point.png",
        edge: 1
      },
      dreamExit: {
        duration: 2,
        alpha: "Assets/Images/Transitions/point_inverse.png",
        edge: 1
      },
      clock: {
        duration: 1,
        alpha: "Assets/Images/Transitions/clock.png",
        edge: 1
      },
      star: {
        duration: 1.5,
        alpha: "Assets/Images/Transitions/star.png",
        edge: 1
      }
    };

    export let sound = {
      //themes
      day: "Assets/Sounds/summernight-lofi-vibes.mp3",
      chill: "Assets/Sounds/perfect-beauty.mp3",
      dream: "Assets/Sounds/relaxing.mp3",
      end: "Assets/Sounds/please-calm-my-mind.mp3",
      //SFX
      slap: "Assets/Sounds/Slap.mp3",
      rain: "Assets/Sounds/Rain.mp3"
    };

    export let locations = {
      beachDay: {
        name: "beachDay",
        background: "Assets/Images/Backgrounds/beachDay.png"
      },
      credits: {
        name: "credits",
        background: "Assets/Images/Backgrounds/Credits.png"
      },
      hospital: {
        name: "hospital",
        background: "Assets/Images/Backgrounds/hospital_outside.jpg"
      },
      dream: {
        name: "dream",
        background: "Assets/Images/Backgrounds/hazy.jpg"
      },
      hRoomNightAlt: {
        name: "hospital room night but darker",
        background: "Assets/Images/Backgrounds/hospital-room-night3alt.jpg"
      },
      hRoomNight: {
        name: "hospital room night",
        background: "Assets/Images/Backgrounds/hospital-room-night3.jpg"
      },
      homeDay: {
        name: "Bedroom",
        background: "Assets/Images/Backgrounds/Room3_new.jpg"
      },
      homeNight: {
        name: "Living room",
        background: "Assets/Images/Backgrounds/Room_Night1big.jpg"
      },
      lab: {
        name: "Underground lab",
        background: "Assets/Images/Backgrounds/Lab.jpg"
      },
      school: {
        name: "school",
        background: "Assets/Images/Backgrounds/school.jpg"
      },
      classroom: {
        name: "classroom",
        background: "Assets/Images/Backgrounds/Classroombig.jpg"
      },
      hallway: {
        name: "School hallway",
        background: "Assets/Images/Backgrounds/school_hallway.jpg"
      },
      town: {
        name: "Town day",
        background: "Assets/Images/Backgrounds/town.jpg"
      },
      festival: {
        name: "festival",
        background: "Assets/Images/Backgrounds/fare.jpg"
      },
      void: {
        name: "nothing",
        background: "Assets/Images/Backgrounds/black.png"
      },
      ending1: {
        name: "ending1",
        background: "Assets/Images/Backgrounds/Ending1.png"
      },
      ending2: {
        name: "ending2",
        background: "Assets/Images/Backgrounds/Ending2.png"
      },
      ending3: {
        name: "ending3",
        background: "Assets/Images/Backgrounds/Ending3.png"
      },
      ending4: {
        name: "ending4",
        background: "Assets/Images/Backgrounds/Ending4.png"
      },
      ending5: {
        name: "ending5",
        background: "Assets/Images/Backgrounds/Ending0-2.png"
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
          angry: "Assets/Images/Characters/aisaka_angry.png",
          happy: "Assets/Images/Characters/aisaka_happy.png",
          upset: "Assets/Images/Characters/aisaka_upset.png"
        }
      },
      girl2: {
        name: "Amai", //sweet auf japanisch
        origin: ƒS.ORIGIN.BOTTOMCENTER,
        pose: {
          angry: "Assets/Images/Characters/kohana_angry.png",
          happy: "Assets/Images/Characters/kohana_happy.png",
          upset: "Assets/Images/Characters/kohana_upset.png"
        }
      },
      game: {
        name: "Clearvision"
      },
      doctor: {
        name: "Doctor"
      },
      nurse: {
        name: "Nurse"
      },
      friend: {
        name: "Marty" //ähnlich zu dead auf polnisch
      }
    };

    export let customPositions = {
      slightleft: new FudgeStory.Position(-150, -540),
      farleft: new FudgeStory.Position(-1300, -540),
      slightright: new FudgeStory.Position(250, -540),
      farright: new FudgeStory.Position(1300, -540),
      backgroundleft: new FudgeStory.Position(-100, -200),
      slscare: new FudgeStory.Position(-150, -500),
      middleLeft: new FudgeStory.Position(-100, -300),
      middleRight: new FudgeStory.Position(100, -300)
    };

    export let animations = {
      outLeft: "outLeft",
      outRight: "outRight",
      inLeft: "inLeft",
      inRight: "inRight",
      goInLeft: "goInLeft",
      goInRight: "goInRight",
      scare: "scare",
      scareBack: "scareBack",
      smLeft: "smLeft",
      smRight: "smRight"
    }

    export function animate(_animation: string): ƒS.AnimationDefinition {
      switch (_animation) {
        case animations.outLeft:
          return {
            start: {translation: customPositions.slightleft},
            end: {translation: customPositions.farleft},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.outRight:
          return {
            start: {translation: customPositions.slightright},
            end: {translation: customPositions.farright},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.inLeft:
          return {
            start: {translation: customPositions.farleft},
            end: {translation: customPositions.slightleft},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.inRight:
          return {
            start: {translation: customPositions.farright},
            end: {translation: customPositions.slightright},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.goInLeft:
          return {
            start: {translation: customPositions.middleLeft, scaling: new ƒS.Position(0.5, 0.5)},
            end: {translation: customPositions.slightleft, scaling: new ƒS.Position(1, 1)},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.goInRight:
          return {
            start: {translation: customPositions.middleRight, scaling: new ƒS.Position(0.5, 0.5)},
            end: {translation: customPositions.slightright, scaling: new ƒS.Position(1, 1)},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
          case animations.smLeft:
          return {
            start: {translation: customPositions.farleft, scaling: new ƒS.Position(1, 1)},
            end: {translation: customPositions.middleLeft, scaling: new ƒS.Position(0.5, 0.5)},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
          case animations.smRight:
          return {
            start: {translation: customPositions.farright, scaling: new ƒS.Position(1, 1)},
            end: {translation: customPositions.middleRight, scaling: new ƒS.Position(0.5, 0.5)},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.scare:
          return {
            start: {translation: customPositions.slightleft},
            end: {translation: customPositions.slscare},
            duration: 0.1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
        case animations.scareBack:
          return {
            start: {translation: customPositions.slscare},
            end: {translation: customPositions.slightleft},
            duration: 0.1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          };
      }
    }

    let menuButtons = {
      save: "save game",
      load: "load save",
      close: "close menu"
    };

    let menu: ƒS.Menu;
    let mActive: boolean = false;

    export let item = {
      ticket: {
        name: "Ticket",
        description: "A entry ticket for an amusement park Amai gave you.",
        image: "Assets/Items/Ticket.png",
        static: true
      }
    };

    // Savedate for Gameprogress
    export let dataForSave = {
      nameProtagonist: "",
      curiosityCounter: 0,
      truthseeing: false,
      curChapter: 1,
      Ending: 0
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
            console.log("Opening Menu");
            menu.open();
            mActive = true;
          } else {
            console.log("Closing Menu");
            menu.close();
            mActive = false;
          }
          break;
        case ƒ.KEYBOARD_CODE.E:
          console.log("Opening Inventory");
          await ƒS.Inventory.open();
          break;
        case ƒ.KEYBOARD_CODE.ESC:
          console.log("Close Inventory");
          await ƒS.Inventory.open();
          ƒS.Inventory.close();
          break;
      }
    }

    window.addEventListener("load", start);
    function start(_event: Event): void {
      menu = ƒS.Menu.create(menuButtons ,buttonFunctions , "menu");
      let scenes: ƒS.Scenes = [
        { scene: Chapter1, name: "Chapter1" , id: "Chapter1"},
        { scene: Chapter2, name: "Chapter2", id: "Chapter2"},
        { scene: Chapter3, name: "Chapter3", id: "Chapter3"},
        { scene: Chapter4, name: "Chapter4", id: "Chapter4"},
        { scene: Chapter5, name: "Chapter5", id: "Chapter5"},
        { scene: Chapter6, name: "Chapter6", id: "Chapter6"},
        { scene: Chapter7, name: "Chapter7", id: "Chapter7"},
        { scene: Endings, name: "Ending", id: "Ending"}
      ];

      let uiElement: HTMLElement = document.querySelector("[type=interface]");
      dataForSave = ƒS.Progress.setData(dataForSave, uiElement)
  
      // start the sequence
      ƒS.Progress.go(scenes);
    }
  }
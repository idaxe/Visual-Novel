namespace Visualnovel {
    export async function Scene(): ƒS.SceneReturn {
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
      }


      await ƒS.Speech.tell(characters.game, text.game.Hi);
      await ƒS.Speech.tell(characters.game, text.game.How);
      await ƒS.Speech.tell(characters.game, text.game.Are);
      await ƒS.Speech.tell(characters.game, text.game.You);
      await ƒS.Speech.tell(characters.game, text.game.Doing);
      await ƒS.Speech.tell(characters.game, text.game.Presence);
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.beachDay);
      ƒS.Sound.fade(sound.pizza, 0.5, 2, true);
      console.log("fuck");
      await ƒS.update();
      console.log("this");
      //await ƒS.update(transition.symbol.duration, transition.symbol.alpha, transition.symbol.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0008);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0010);
    }
  }
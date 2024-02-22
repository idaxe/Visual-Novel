namespace Visualnovel {
    export async function Scene(): ƒS.SceneReturn {
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
        }
      }

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
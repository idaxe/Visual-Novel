namespace Visualnovel {
    export async function Chapter5(): ƒS.SceneReturn {
      console.log("Chapter 5 - Searching");
      
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "You gotten so used to the headaches that they appear that they have gotten lighter.",
          N0002: "With a light uneasy feeling in the ear you went to school.",
          N0003: ""
        },
        protagonist: {
          P0000: "...",
          P0001: "Looks like its clouding over for the day.",
          P0002: "Anyways, gotta be sure to ask them about some stuff today.",
          P0003: "...morning.",
          P0004: "Ah no it's nothing. Let's just go to school."
        },
        girl1: {
          G0001: "Gooood morniiing.",
          G0002: "Hmmm? You seem down. Everything alright.",
          G0003: "Huh, ok then. Lets go."
        },
        girl2: {

        }
      }

      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      //await ƒS.Speech.tell(characters.girl1, text.girl1);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
    }
  }
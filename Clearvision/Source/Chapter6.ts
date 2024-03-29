namespace Visualnovel {
    export async function Chapter6(): ƒS.SceneReturn {
      console.log("Chapter 6 - Crashing down");
      
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "It's morning again.",
          N0002: "You might be getting some real answers today.",
          N0003: "After quickly getting ready, you walk to school together.",
          N0004: "After class.",

        },
        protagonist: {
          P0000: "...",
          P0001: "It's cloudy today.",
          P0002: "Ok before all that do you know why " + characters.girl2.name + " wasn't at school today?",
          P0003: "I didn't think it'd be that bad but I'll apologize later.",
          P0004: "Now then for the topic at hand."
        },
        girl1: {
          G0001: "I think she is just not in the best state of mind to look at you.",
          G0002: "That would be for the best.",
          G0003: "I did promise you the day before after all."
        }
      }
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
    }
  }
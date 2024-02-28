namespace Visualnovel {
    export async function Chapter2(): ƒS.SceneReturn {
      console.log("Chapter 2 - Daily life");
      await ƒS.Speech.tell("Pringles", "Chips");

      let text = {
        Narrator: {
          N0001: "After a bizzare dream you notice the weather",
          N0002: "After eating breakfast you decide to go to school.",
          N0003: "Only to be greeted by your friend the second you leave the house.",
          N0004: characters.girl1.name + " looks around slightly flustered",
          N0005: "After quite a bit of running you and " + characters.girl1.name + " arrive at the school exhausted.",
          N0006: "Classes were as boring as ever."
        },
        protagonist: {
          P0001: "Its a nice day outside.",
          P0002: "Birds are singing, flowers are blooming",
          P0003: "Perfect weather to back to school... ugh.",
          P0004: "Ehm, good morning to you too" + characters.girl1.name,
          P0005: "No i'm fine. Its just that my house is not on your way to school now is it?",
          P0006: "I wouldn't say i'm over it but I feel perfectly fine.",
          P0007: "Oi, I didn't mean-",
          P0008: "Ugh whatever, you're on.",
          P0009: "I could live without it but... eh."
        },
        girl1: {
          G0001: "Good morning " + characters.protagonist.name,
          G0002: "Is something the matter? You seem confused.",
          G0003: "Ehehehe...",
          G0004: "Geee, i came here worried that your body might not be at its fullest but looks like i was worried for nothing.",
          G0005: "In that case, lets race to the school.",
          G0006: "Last one there is a rotten egg."
        },
        girl2: {
          G2001: ""
        }
      }

      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      

    }
  }
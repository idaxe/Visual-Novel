namespace Visualnovel {
    export async function Chapter7(): ƒS.SceneReturn {
      console.log("Chapter 7 - Moving foreward");
      
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "Alright, today is the day.",
          N0002: "It's very foggy today.",
          N0003: "You quickly eat breakfast and go to school with " + characters.girl1.name + ".",
          N0004: "You couldn't concentrate at all.",
          N0005: "You two head to " + characters.girl2.name + "s place.",
          N0006: "After you were able to make up and had some fun, you and " + characters.girl1.name + " decide to head to the hospital.",
          N0007: "The fog hasn't subsided yet."
        },
        protagonist: {
          P0000: "...",
          P0001: "I feel like whatever was happening in my dreams was somehow pushing me to do this stuff.",
          P0002: "Now then, no time to waste.",
          P0003: "Well it was fine, only one day can't be that bad.",
          P0004: "Now then, I believe you have to take the lead now.",
          P0005: "Oh, really?",
          P0006: "Ah, thats true.",
          P0007: "Well, let's be off then.",
          P0008: "I've made my choice.",
          P0009: "I want to know what happened.",
          P1001: "",
          P2001: "Wha-What is this?",
          P2002: "But then all those dreams and my curiosity.",
          P2003: "Were they truely mine?",
          P2004: "Or were they...",
          P2005: "So that means...",
          P2006: "!!!",
          P2007: "*A sharp paint is rushung through my head!*",
          P2008: "*I can only hear the faint voices of " + characters.girl1.name + " and a doctor before I lose conciousness...*"
        },
        girl1: {
          G0000: "...",
          G0001: "Wait till they bring up this class' stuff in the next test.",
          G0002: "Yeah, i'm aware.",
          G0003: "However, we must wait till evening because during the day they would be too busy.",
          G0004: "Yeah. Until then, let's go and visit" + characters.girl2.name + ".",
          G0005: "There are still thing you have to set right you know~",
          G0006: "I think I already know your answer but i will ask you one last time.",
          G0007: "Are you sure you want to know everything?",
          G0008: "You can still walk away from this you know?",
          G1001: "You should"
        },
        friend: {
          F0001: "That's right.",
          F0002: "They were mine.",
          F0003: "Or rather a Spectre of what you though what was me.",
          F0004: "I'm the residue of his consience.",
          F0005: "And now I've gotten you exactly where I want to have you.",
          F0006: "You see, I simply did not do this just to help you.",
          F0007: "We may are now one in body but in soul we are apart.",
          F0008: "Because of your subconciousness, my attitude became more positive and my thought more blurred.",
          F0009: "But because you got so involved into uncovering the mystery you set me free.",
          F0010: "I'm dead now and I want my soul to rest.",
          F0011: "But that can't happen with this little piece of me which exists within you.",
          F0012: "So I'll simply make sure you never wake up.",
          F0013: "You won't die but you wont live either.",
          F0014: "I'm sorry for being selfish but I never really was the clever one anyways.",
          F0015: "Sleep now my friend."
        }
      }
      let safetychoice = {
        Proceed: "I want to know the truth.",
        Divert: "On second thought."
      };

      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
    }
  }
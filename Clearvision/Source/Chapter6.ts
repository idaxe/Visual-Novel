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
          N0005: characters.girl1.name + " Ran off singnaling you to catch up with her.",
          N0006: "She just grins at you from afar.",
          N0007: "You overtake her and rush ahead.",
          N0008: "You spend the rest of the day blissfully with your friends."
        },
        protagonist: {
          P0000: "...",
          P0001: "It's cloudy today.",
          P0002: "Ok before all that do you know why " + characters.girl2.name + " wasn't at school today?",
          P0003: "I didn't think it'd be that bad but I'll apologize later.",
          P0004: "Now then for the topic at hand.",
          P1001: "Uhm, alright then.",
          P1002: "You never change do you?",
          P1003: "Well, let's see who will get the best deal.",
          P1004: "The loser has to pay for dinner."
        },
        girl1: {
          G0000: "...",
          G0001: "I think she is just not in the best state of mind to look at you.",
          G0002: "That would be for the best.",
          G0003: "I did promise you the day before after all.",
          G0101: "Is this really what you want though?",
          G0102: "I did notice you questioning your current circumstances.",
          G0103: "However whats so wrong with enjoying your life as it is at the moment.",
          G0104: "It hasn't been that different and i'm sure you will get used to it in time.",
          G0105: "Glad to see you are also seeing it that way.",
          G0106: "Now come, there is a limited time offer down at the downtown flea market.",
          G0107: "Let's grab " + characters.girl2.name + " and go check it out.",
          G0108: "Come on, it's the ideal moment so hurry up!",
          G0109: "Hmmmhm, you're on!",
          G0201: "Okay, let's get this over with then.",
          
        }
      }
      let thoughts = {
        C1: "You have a point.",
        C2: "How could I accept this!"
      };
      let tempscore = 0;
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
      if(dataForSave.curiosityCounter >= 4){    //statcheck

      } else {
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0000);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0101);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0102);
        let impchoice = await ƒS.Menu.getInput(thoughts, "Confrontation");
        switch (impchoice) {
          case thoughts.C1:
            await ƒS.Speech.tell("???", "So thats the life you chose.");
            await ƒS.Speech.tell("???", "Just continuing on in blissfull ignorance.");
            await ƒS.Speech.tell("???", "How disappointing.");
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "However...");
            await ƒS.Speech.tell("???", "This might work out in the end.");
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "As long as you will continue walking on this path.");
            dataForSave.Ending = 1;
            break;
            return "Ending";
          case thoughts.C2:
            await ƒS.Speech.tell("???", "So thats the life you chose.");
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "A interesting outcome.");
            await ƒS.Speech.tell("???", "Looking so desperately for a truth always just an armslength away.");
            await ƒS.Speech.tell("???", "Discarding everything for just that one clue which would reveal it all.");
            await ƒS.Speech.tell("???", "Will this path lead you towards joy or ruin I wonder.");
            await ƒS.Speech.tell("???", "Regardless, I shall follow this path along with you.");
            await ƒS.Speech.tell("???", "After all, I'm already a part of you now.");
            await ƒS.Speech.tell(characters.narrator, "You hear a gentle laugh before everything fades away.");
            break;
        }
      }
    }
  }
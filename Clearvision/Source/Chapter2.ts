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
          N0006: "Classes were as boring as ever.",
          N0007: "Since you just got out of the hospital you decide to take it easy and go home for the day.",
          N0008: "Just when you were about to exit the school you run into some familiar faces.",
          N0009: "The other girl standing with " + characters.girl1.name + " was also part of our friend group.",
          N0010: "From what i remember she was rather close to our other male member.",
          N0011: "The three of us enjoyed a lively conversation.",
          N0012: "...",
          N0013: "You two walked home together",
          N0014: "After arriving home you wave " + characters.girl1.name + " goodbye as she walks off.",
          N0015: "Since you returned from the hospital not long ago you decide to buy groceries and clean for the day.",
          N0016: "A couple hours have passed but the place looks like someone lives in it again.",
          N0017: "With that done you decide to go to sleep." //start dream dialogue
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
          P0009: "I could live without it but... eh.",  //missing
          P0010: "Yes it's nice to see you two too.",
          P0011: "While I got you two here let me ask.",
          P0012: "Did either of you see " + characters.friend.name + " around?",
          P0013: "I haven't seen him all day so I thought you two might know something.",
          P0014: "Now then, i should get going.",
          P0015: "*She is still worried huh.*",
          P0016: "Ok sure thing.",
          P0017: "Although i have to say I'm feeling way less exhausted than usual.",
          P0018: "Alright, see you tomorrow.",
          P0019: "!!",
          PD001: "First off my friend came to walk with me to school today.",
          PD002: "I made myself some eggs for breakfast.",
          PD003: "I was running to school this morning.",
          PD004: "First off I noticed the nice weather.",
          PD005: "First off I was in a great mood upon waking up.",
          PD006: "",
          PD007: "",
          PD008: "",
          PD009: "",
          PD010: "",
          PD011: "",
          PD012: ""
        },
        girl1: {
          G0001: "Good morning " + characters.protagonist.name,
          G0002: "Is something the matter? You seem confused.",
          G0003: "Ehehehe...",
          G0004: "Geee, i came here worried that your body might not be at its fullest but looks like i was worried for nothing.",
          G0005: "In that case, lets race to the school.",
          G0006: "Last one there is a rotten egg.",
          G0007: "Hey, looks like the rotten egg is deciding to go home early.",
          G0008: "...",
          G0009: "About that he-",
          G0010: "Wasn't that your role?",
          G0011: "You two always hung out together whenever we saw you before so it's natural to think that.",
          G0012: "Alright, let me accompany you.",
          G0013: "Heh, now your imagening things.",
          G0014: "Have a good rest."
        },
        girl2: {
          G2001: "Look at who decided to finally come back to the living.",
          G2002: "...",
          G2003: "H-He's just went home earlier than usual.",
          G2004: "What an idiot, it's not like he could've given us a heads up.",
          G2005: "Then again that meathead never thought ahead anyways.",
          G2006: "H-Huh, what are you talking about!",
          G2007: "Shut up, we didn't do that all the time."
        }
      }
      let tempscore = 0;
      let thoughts = {
        C1: "Visit",
        N1: "Breakfast",
        N2: "Running",
        N3: "Weather",
        N4: "Mood"
      };
      let thoughts2 = {
        C1: "Reunition",
        N1: "Friends",
        N2: "Class",
        N3: "Behavior"
      };
      let thoughts3 = {
        C1: "Dust",
        N1: "Exhaustion",
        N2: "Worry"
      };

      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
      await ƒS.Speech.tell(characters.narrator, "...");
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0007);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0013);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0008);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0009);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2003);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2004);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0010);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0011);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0011);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0014);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0015);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0016);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0017);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0013);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0018);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0015);



      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0016);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0017);
            //initiate dream
      await ƒS.Speech.tell("???", "So, we meet again already.");
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
      await ƒS.Speech.tell("???", "Now now, no need for hostility.");
      await ƒS.Speech.tell("???", "I'm a fabrication which is born from your mind.");
      await ƒS.Speech.tell("???", "You can't hurt me anyways so it's pointless.");
      await ƒS.Speech.tell("???", "But now to business.");
      await ƒS.Speech.tell("???", "Tell me, how would you describe the day.");
      let choice = await ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
      switch (choice){
        case thoughts.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
          tempscore = tempscore + 10;
          break;
        case thoughts.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
          break;
        case thoughts.N2:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
          break;
        case thoughts.N3:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
          break;
        case thoughts.N4:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
          break;
      }
      let choice2 = await ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
      switch (choice2){
        case thoughts2.C1:
          await ƒS.Speech.tell(characters.protagonist, "");
          break;
        case thoughts2.N1:
          await ƒS.Speech.tell(characters.protagonist, "");
          break;
        case thoughts2.N2:
          await ƒS.Speech.tell(characters.protagonist, "");
          break;
        case thoughts2.N3:
          await ƒS.Speech.tell(characters.protagonist, "So, we meet again already.");
          tempscore = tempscore + 10;
          break;
      }
      let choice3 = await ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
      switch (choice3){
        case thoughts3.C1:
          await ƒS.Speech.tell(characters.protagonist, "So, we meet again already.");
          break;
        case thoughts3.N1:
          await ƒS.Speech.tell(characters.protagonist, "So, we meet again already.");
          tempscore = tempscore + 10;
          break;
        case thoughts3.N2:
          await ƒS.Speech.tell(characters.protagonist, "So, we meet again already.");
          break;
      }
      await ƒS.Speech.tell("???", "So thats how it is.");
      if (tempscore >= 20){
        await ƒS.Speech.tell("???", "Quite pleasing.");
        //increase global truth score
      } else {
        await ƒS.Speech.tell("???", "Quite... unremarkable...");
      }
      await ƒS.Speech.tell("???", "One shall not avert their eyes looking for the path.");
      await ƒS.Speech.tell("???", "Now then.");
      await ƒS.Speech.tell("???", "Sleep well.");
    }
  }
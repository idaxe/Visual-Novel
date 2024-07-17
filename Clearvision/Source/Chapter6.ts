namespace Visualnovel {
    export async function Chapter6(): ƒS.SceneReturn {
      console.log("Chapter 6 - Crashing down");
      characters.protagonist.name = dataForSave.nameProtagonist;
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
          N0008: "You spend the rest of the day blissfully with your friends.",
          N0009: "She pulls out her phone and starts calling someone.",
          N0010: "After a while she finally hangs up.",
          N1001: "And so the next days went ahead in happiness",
          N1002: "The earie feeling of those dreams still lingered in your mind.",
          N1003: "But over time those too faded away.",
          N1004: "You and your friends together walk towards a happy future.",
          N3001: "And so you wandered off that day.",
          N3002: "With clear feelings in your mind you decided to dedicate more time to finding answers.",
          N3003: "But at what cost?",
          N3004: "Over time your curiosity began festering into obsession.",
          N3005: "Distancing yourself from your friends just to get that one more clue.",
          N3006: "A distance which seemed to become unrepairable.",
          N3007: "The one place all the answers lie, denied you each time.",
          N3008: "Clues were few and leads even fewer.",
          N3009: "A life of searching for an answer that never arrives."
        },
        protagonist: {
          P0000: "...",
          P0001: "It's cloudy today.",
          P0001a: "Gonna make myself some meatballs later",
          P0002: "Ok before all that do you know why " + characters.girl2.name + " wasn't at school today?",
          P0003: "I didn't think it'd be that bad but I'll apologize later.",
          P0004: "Now then for the topic at hand.",
          P1000: "I think I see what you mean now.",
          P1001: "Uhm, alright then.",
          P1002: "You never change do you?",
          P1003: "Well, let's see who will get the best deal.",
          P1004: "The loser has to pay for dinner.",
          P2001: "Here as I'll ever be.",
          P2002: "What do you mean by that?",
          P2003: "I kinda had a feeling but overall a change that huge would be impossible not to notice.",
          P2004: "But here I am, having found out practically nothing.",
          P2005: "Alright, so let's go.",
          P2006: "...fine.",
          P2007: "Always!",
          P3000: "I'm sorry but I can't let this go.",
          P3001: "B-but you said you would-",
          P3002: "Alright fine.",
          P3003: "If you wont help me I will find this out on my own!",
          P3004: "Leave me be, you've already done enough for today."
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
          G0202: "That said",
          G0203: "Give me a minute.",
          G0204: "Alright, you with me?",
          G0205: "Ok then.",
          G0206: "To start things off, you are right. There is something unusual going on around, or rather with you.",
          G0207: "What if I told you you really aren't yourself anymore.",
          G0208: "That you've gone through a huge change without realising it.",
          G0209: "The call I made just now was with the hospital you are staying at.",
          G0210: "Once we've gone there again every question should be answered.",
          G0211: "Appointments don't work THAT fast you know.",
          G0212: "Wait for tomorrow, ok?",
          G0213: "Just remember, deep down your always you. Ok?",
          G0214: "Well thats relieving to hear.",
          G0215: "But for now I got some work left to do.",
          G0216: "Cya tomorrow you dunderhead~",
          G0301: "You know what?",
          G0302: "After thinking about it some more I refuse!",
          G0303: "Everything seemed so fine these last couple of days.",
          G0304: "I'm not letting this get ruined.",
          G0305: "No I've changed my mind.",
          G0306: "Hey let's just-"
        }
      }
      let thoughts = {
        C1: "You have a point.",
        C2: "How could I accept this!"
      };
      //let tempscore = 0;
      await ƒS.Location.show(locations.homeDay);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001a);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      //fade
      await ƒS.Location.show(locations.hallway);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.happy, customPositions.slightleft);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);

      if(dataForSave.curiosityCounter >= 60 && dataForSave.truthseeing == true){    //statcheck
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0201);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0202);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0203);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0204);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2001);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0205);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0206);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2002);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0207);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0208);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2003);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2004);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0209);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0210);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2005);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0211);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0212);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2006);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0213);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2007);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0214);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0215);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0216);
        //animate char away
        await ƒS.Character.animate(characters.girl1, characters.girl1.pose.happy, animate("outLeft"));
        await ƒS.Character.hide(characters.girl1);
        //initiate dream
        await ƒS.Location.show(locations.void);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Location.show(locations.dream);
        await ƒS.update(transition.dreamEnter.duration, transition.dreamEnter.alpha, transition.dreamEnter.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000); 
        await ƒS.Speech.tell("???", "One more day."); 
        await ƒS.Speech.tell("???", "Just one more day.");
        await ƒS.Speech.tell("???", "Then this will all find it's end.");
        await ƒS.Speech.tell("???", "I'll let you go question free this time.");
        await ƒS.Speech.tell("???", "Enjoy your rest for today.");
        return "Chapter7";
      } else {
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0000);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0101);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0102);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0103);
        let impchoice = await ƒS.Menu.getInput(thoughts, "Confrontation");

        switch (impchoice) {          //choose your good or bad ending, stats wont matter here... maybe truthseeing does
          case thoughts.C1:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1000);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0104);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0105);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0106);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1001);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0107);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0108);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1002);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1003);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1004);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0109);
            await ƒS.Location.show(locations.void);
            await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N1001);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N1002);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N1003);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N1004);
            await ƒS.Location.show(locations.dream);
            await ƒS.update(transition.dreamEnter.duration, transition.dreamEnter.alpha, transition.dreamEnter.edge);
            //fade
            await ƒS.Speech.tell("???", "So thats the life you chose.");
            await ƒS.Speech.tell("???", "Just continuing on in blissfull ignorance.");
            await ƒS.Speech.tell("???", "How disappointing.");
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "However...");
            await ƒS.Speech.tell("???", "This might work out in the end.");
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "As long as you will continue walking on this path.");
            await ƒS.Speech.tell("???", "Because I will always be here. Lurking, waiting.");
            dataForSave.Ending = 1;
            //break;
            return "Ending";
          case thoughts.C2:
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3000);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0000);
            //angry char here
            await ƒS.Character.show(characters.girl1, characters.girl1.pose.angry, customPositions.slightleft);
            await ƒS.Character.hide(characters.girl1);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0301);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0302);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0303);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0304);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3001);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0305);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3002);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3003);
            //sad char here
            await ƒS.Character.show(characters.girl1, characters.girl1.pose.upset, customPositions.slightleft);
            await ƒS.Character.hide(characters.girl1);
            await ƒS.Speech.tell(characters.girl1, text.girl1.G0306);
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3004);
            await ƒS.Location.show(locations.void);
            await ƒS.Character.hide(characters.girl1);
            await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3001);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3002);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3003);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3004);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3005);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3006);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3007);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3008);
            await ƒS.Speech.tell(characters.narrator, text.Narrator.N3009);
            await ƒS.Location.show(locations.dream);
            await ƒS.update(transition.dreamEnter.duration, transition.dreamEnter.alpha, transition.dreamEnter.edge);
            //fade
            await ƒS.Speech.tell("???", "So thats the life you chose.");
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "A interesting outcome.");
            await ƒS.Speech.tell("???", "Looking so desperately for a truth always just an armslength away.");
            await ƒS.Speech.tell("???", "Discarding everything for just that one clue which would reveal it all.");
            await ƒS.Speech.tell("???", "Will this path lead you towards joy or ruin I wonder.");
            await ƒS.Speech.tell("???", "Regardless, I shall follow this path along with you.");
            await ƒS.Speech.tell("???", "After all, I'm already a part of you now.");
            await ƒS.Speech.tell(characters.narrator, "You hear a gentle laugh before everything fades away.");
            dataForSave.Ending = 2;
            //break;
            return "Ending";
          default:
            await ƒS.Speech.tell("???", "...");
            await ƒS.Speech.tell("???", "You are not supposed to be here.");
            dataForSave.Ending = 5;
            return "Ending";  
        }
      }
    }
  }
namespace Visualnovel {
    export async function Chapter4(): ƒS.SceneReturn {
      console.log("Chapter 4 - A enlightening trip");
      characters.protagonist.name = dataForSave.nameProtagonist;
      if (dataForSave.curChapter != 4) {
        return "Chapter5";
      }
      
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "Another one today.",
          N0002: "At this point you already got used to the pain.",
          N0003: "However the consistency with these dreams and the way they leave you thinking combined with how accurately the are to remember really leave you suspicious now.",
          N0004: "Even with your limited knowledge about dreams you know that something like this is now too rare to be a coincidence.",
          N0005: "You ready yourself for the day before you.",
          N0006: "Since you can't stop her anyways you embraced "+ characters.girl1.name +" coming to your place now.",
          N0007: "You talked about various topics on the way to school.",
          N0008: "Nothing interesting happened in class today.",
          N0009: "You decide to immediately meet up with your friends and to the amusement park.",
          N0010: "After going on some rides your group decides to take a break.",
          N0011: "Seeing a empty table near to some food stands, your group decided to take a lunch break.",
          N0012: "After " + characters.girl1.name + " left you turn your attention to " + characters.girl2.name + ".",
          N0013: "She flashes you a big grin",
          N0014: "At that moment " + characters.girl1.name + " comes back with all our orders in her hands.",
          N0015: characters.girl2.name + " suddenly got up and covered " + characters.girl1.name + "s mouth.",
          N0016: "You enjoyed a lively break before using the rest of the afternoon to have some more fun.",
          N0017: "It's evening now.",
          N0018: "You bid your friends goodbye before heading home.",
          N0019: "You feel exhausted, but there still something to do."
        },
        protagonist: {
          P0000: "...",
          P0001: "*Something definitly happened to my brain when I was unconscious.*",
          P0002: "*But what can even happen to ones brain when it is in a comatose state?*",
          P0003: "*I should inform myself about this stuff this evening.*",
          P0004: "*Gotta make myself ready now.*",
          P0005: "*Alrighty. 3... 2... 1... aaaand.*",
          P0006: "Aye, good mornin to you too.",
          P0007: "How about you cling to her arm next time around, yeah?",
          P0008: "Cotton ca-, wait no a crêpe please.",
          P0009: "You know I was a little sceptical about this at first but I feel suprisingly refreshed.",
          P0010: "Plus it was fun. Thank you for organizing it " + characters.girl2.name + ".",
          P0011: "*Come to think of it, why was I about to say I want cotton candy?*",
          P0012: "*I hated that stuff ever since that birthday fiasco 8 years ago.*",
          P0013: "*However it was always the favorite sweet of him.*",
          P0014: "*Just what is going on.*",
          P0015: "Was I really giving off that impression?",
          P0016: "...but you were the one getting up.",
          P0017: "Nothing!",
          P0018: "Right. Now time to research.",
          P0019: "Ok, I was right on the money when it comes to the repeating dreams.",
          P0020: "These habit changes though...",
          P0021: "It says these mostly happen this sudden only in cases with brain tumors or severe head trauma.",
          P0022: "From what I remember the doctor saying though, both of these were not mentioned in my case.",
          P0023: "Something definitly happened though.",
          P0024: "Looks like there is some questioning in order tomorrow.",
          P0025: "For now I'll go to sleep though.",
          PD001: "The dreams have been pretty consistent. I still can't remember the contents of them after I wake up somehow.",
          PD002: "It's like I was never gone. I feel stronger but when I look inside the mirror I just see my usual stickfigure self.",
          PD003: "I had a real good time with my friends at the park today. I just wished we could've had the whole group.",
          PD004: "All these recent events seem to keep me in my thoughts even in these times where I should just forget about it.",
          PD005: "I tried to order something I absolutely despise. Like it was a force of habit.",
          PD006: "I found out quite a bit about the machinations of dreams today.",
          PD007: "The events around me sure make everything more mysterious but I think I'm beginning to see a pattern."
        },
        girl1: {
          G0001: "Top of the morning to ya lad.",
          G0002: "Haha, you should've seen your face " + characters.girl2.name + ".",
          G0003: "Alright I'm gonna get stuff for everyone. Any wishes?",
          G0004: "Okay. I'll be right back.",
          G0005: "Hey, stay with us today.",
          G0006: "No spacing out allowed.",
          G0007: "We still have a whole lot of fun waiting for us at the end of the road.",
          G0008: "Of course!",
          G0009: "You haven't even noticed that " + characters.girl2.name + " has-"
        },
        girl2: {
          G2001: "Oh shut it you, you know I'm not good with that stuff.",
          G2002: "Uuuuu, don't remind me you idiot.",
          G2003: "Caramelised almonds for me!",
          G2004: "I told you don't mention it.",
          G2005: "...but.",
          G2006: "You're welcome.",
          G2007: "Oh I really thank you for getting this for us.",
          G2008: "I was really starving, so let's all sit down and enjoy our stuff.",
          G2009: "What was that?"
        }
      }
      //let listen = false;
      let tempscore = 0;
      let thoughts = {
        C1: "Consistency",
        N1: "Coma aftereffects"
      };
      let thoughts2 = {
        C1: "Fun",
        N1: "Spacing out",
        N2: "Habits"
      };
      let thoughts3 = {
        C1: "Research",
        N1: "Own Events"
      };
      await ƒS.Location.show(locations.homeDay);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
      //fade black & back
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.happy, customPositions.farright);
      await ƒS.update();
      await ƒS.Character.animate(characters.girl1, characters.girl1.pose.happy, animate("inRight"));
      await ƒS.update();
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Location.show(locations.town);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      await ƒS.Location.show(locations.classroom);
      await ƒS.Character.hide(characters.girl1);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
      //fade to amusemetn park
      await ƒS.Location.show(locations.festival);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.happy, customPositions.slightright);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.happy, customPositions.slightleft);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      //await ƒS.update();
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.upset, customPositions.slightleft);
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0011);
      //double blackfade
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Character.animate(characters.girl1, characters.girl1.pose.happy, animate("outRight"));
      await ƒS.update();
      //await ƒS.Animation();
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2004);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2005);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2006);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.happy, customPositions.slightleft);
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0014);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Character.animate(characters.girl1, characters.girl1.pose.happy, animate("inRight"));
      await ƒS.update();
      //await ƒS.Animation();
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0015);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0008);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0009);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.happy, customPositions.slightleft);
      await ƒS.Character.hide(characters.girl2);
      await ƒS.Character.animate(characters.girl2, characters.girl2.pose.happy, animate("scare"));
      await ƒS.update();
      await ƒS.Character.animate(characters.girl2, characters.girl2.pose.happy, animate("scareBack"));
      await ƒS.update();
      //await ƒS.Animation();
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0015);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2007);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0016);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.happy, customPositions.slightleft);
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0017);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0016);
      await ƒS.Character.hide(characters.girl1);
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      //fade
      await ƒS.Location.show(locations.homeNight);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0017);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0018);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0019);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0018);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0020);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0021);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0022);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0023);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0024);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0025);
      //start dream
      await ƒS.Location.show(locations.void);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Location.show(locations.dream);
      await ƒS.update(transition.dreamEnter.duration, transition.dreamEnter.alpha, transition.dreamEnter.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000); 
      await ƒS.Speech.tell("???", "Hmm, I can tell even without you telling me things that today was a good day for you."); 
      await ƒS.Speech.tell("???", "Even without contact to everything you experienced some feelings that even managed to reach me.");
      await ƒS.Speech.tell("???", "Or maybe I'm just more and more becoming a part of you. He he he~");
      await ƒS.Speech.tell("???", "Well regardless, you know what I wanna hear.");
      let choice = await ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
      switch (choice){
        case thoughts.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD001);
          tempscore = tempscore + 5;
          break;
        case thoughts.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD002);
          tempscore = tempscore + 5;
          break;
      }
      let choice2 = await ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
      switch (choice2){
        case thoughts2.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD003);
          break;
        case thoughts2.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD004);
          tempscore = tempscore + 5;
          break;
        case thoughts2.N2:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD005);
          tempscore = tempscore + 5;
          break;
      }
      let choice3 = await ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
      switch (choice3){
        case thoughts3.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD006);
          tempscore = tempscore + 5;
          break;
        case thoughts3.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD007);
          tempscore = tempscore + 5;
          break;
      }

      await ƒS.Speech.tell("???", "Looks like you had quite the good time today.");
      if (tempscore > 12){
        await ƒS.Speech.tell("???", "Well well well.");
        await ƒS.Speech.tell("???", "Even though you have the options of ignorance you stray from it and move further towards the knowledge hidden in the dark.");
        //increase global truth score
      } else {
        await ƒS.Speech.tell("???", "Very well then.");
        await ƒS.Speech.tell("???", "I'll let you off with just this today.");
      }
      await ƒS.Speech.tell("???", "One way or another you should be aware of your actions.");
      await ƒS.Speech.tell("???", "What you think and do is not just a concern for yourself anymore.");
      await ƒS.Speech.tell("???", "Will you accidentally cause actions with recoil strong enough that it might destroy what you have left?");
      await ƒS.Speech.tell("???", "Maybe your subconsciousness is already getting affected through me?");
      await ƒS.Speech.tell("???", "Hehe~. Let's see how time plays out.");
      await ƒS.Location.show(locations.void);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      dataForSave.curChapter = 5;
      dataForSave.curiosityCounter = dataForSave.curiosityCounter + tempscore;
      return "Chapter5";
    }
  }
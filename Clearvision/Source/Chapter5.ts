namespace Visualnovel {
    export async function Chapter5(): ƒS.SceneReturn {
      console.log("Chapter 5 - Searching");
      characters.protagonist.name = dataForSave.nameProtagonist;
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "You've gotten so used to the headaches that they appear to be have gotten lighter.",
          N0002: "With a light uneasy feeling in the air you went to school.",
          N0003: "After class.",
          N0004: "After you fetched both the girls you decide to question them.",
          N0005: "Both of them just stare at me in silence.",
          N0006: "*slap*",
          N0007: "After that " + characters.girl2.name + " ran away with tears forming in her eyes.",
          N0008: "After that *scene* you decide to just walk home."
        },
        protagonist: {
          P0000: "...",
          P0001: "Looks like it's clouding over for the day.",
          P0002: "Anyways, gotta be sure to ask them about some stuff today.",
          P0003: "...morning.",
          P0004: "Ah no it's nothing. Let's just go to school.",
          P0005: "Ok, time to look for them.",
          P0006: "Like hell I'll do that.",
          P0007: "Ok, for real though I've noticed some strange things lately.",
          P0008: "Ok first off there are the facts that I suddenly don't feel much fatigue anymore.",
          P0009: "I wasn't particulary fit or athletic beforehand, ",
          P0010: "so I shouldn't be able to feel this fit especially after a one month comatose state.",
          P0011: "Also, from the things I do remember, " + characters.girl2.name + " was never this much around me.",
          P0012: "Not quite.",
          P0013: "We were always a bit more distant. Especially after you and " + characters.friend.name + " started going out.",
          P0014: "It feels like you're using his absence to get close to me or something around that.",
          P0015: "Which brings me to my next point.",
          P0016: "I know he isn't here due to some absence/illness, whatever it's not important.",
          P0017: "Important is that when I tried to call his home no one picked up.",
          P0018: "Since I know him like my back pocket I just know something is up.",
          P0019: "And my gut is telling me you two know something.",
          P0020: "Just quit it with the silence. I know you two know something!",
          P0021: characters.girl2.name + ", you especially you should be gushing and fawning over him like you usually do.",
          P0022: "If anything you should-",
          P0023: "Yeah, looks like I got a bit too worked up there.",
          P0024: "?",
          P0025: "Well, there were some other things.",
          P0026: "The way others were looking at me.",
          P0027: "It was a familiar yet confused look.",
          P0028: "I looked perfectly normal in the mirror though.",
          P0029: "*I feel like I kinda messed up.*",
          P0030: "Of course it suddenly had to start raining.",
          P0031: "Ok, tomorrow I might actually get some answers.",
          P0032: "Do I really want to though...",
          P0033: "Ignorance is bliss as they say.",
          P0034: "Argh... I should sleep now.",
          P0035: "Not for now.",
          PD001: "It was very cloudy today.",
          PD002: "Seems like all these thoughts and theories got me in a down mood.",
          PD003: "I got into an argument with my friends at school.",
          PD004: "I might finally get some answers tomorrow.",
          PD005: "I feel like these two girls know something I don't.",
          PD006: "I still don't get why " + characters.girl2.name + " especially seems so attached to me all of a sudden.",
          PD007: "Maybe I should've left the topic alone and just move on."
        },
        girl1: {
          G0001: "Gooood morniiing.",
          G0002: "Hmmm? You seem down. Everything alright?",
          G0003: "Huh, ok then. Let's go.",
          G0004: "So, why did you need to get the both of us for?",
          G0005: "Strange how?",
          G0006: "...",
          G0007: "You got your sanity back?",
          G0008: "Well that and...",
          G0009: "Any other things you noticed then?",
          G0010: "I see...",
          G0011: "For now let me just say this.",
          G0012: "You are still yourself but also you appear not to be.",
          G0013: "I understand where you're coming from though.",
          G0014: "You will have many questions i'm sure but today is a bit difficult to talk about it.",
          G0015: "Now I have to get going."
        },
        girl2: {
          G2001: "He's probably just gonna tell us he became part of some moron movement.",
          G2002: "W-What are you talking about. We were always close you moron.",
          G2003: "!!",
          G2004: "Shut up! What the hell do you know.",
          G2005: "You're the worst."
        }
      }
      let tempscore = 0;
      let thoughts = {
        C1: "Weather",
        N1: "Uneasiness"
      };
      let thoughts2 = {
        C1: "Argument",
        N1: "Answers",
        N2: "Secrecy"
      };
      let thoughts3 = {
        C1: "Confusion",
        N1: "Regret"
      };
      await ƒS.Location.show(locations.homeDay);
      await ƒS.Sound.play(sound.day, 0.3, true);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.happy, customPositions.farright); //happy
      await ƒS.Character.animate(characters.girl1, characters.girl1.pose.happy, animate("inRight"));
      await ƒS.update();
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.upset, customPositions.slightright); //sad
      await ƒS.Character.hide(characters.girl1);
      await ƒS.update();
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Location.show(locations.classroom);
      await ƒS.Character.hide(characters.girl1);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Location.show(locations.hallway);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.happy, customPositions.slightleft);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.happy, customPositions.slightright);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.angry, customPositions.slightright); //sad
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0014);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2003);
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.upset, customPositions.slightleft); //maybe g1 sadface & g2 upset
      await ƒS.Character.hide(characters.girl1);
      await ƒS.update();
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0015);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0016);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0017);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0018);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0020);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0021);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0022);
      //maybe small blackscreen for effect here
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2004);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2005);
      await ƒS.Character.animate(characters.girl2, characters.girl2.pose.angry, animate("outRight"));
      await ƒS.update();
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0023);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0024);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0009);
      if(dataForSave.curiosityCounter > 40){
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0025);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0026);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0027);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0028);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0010);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0011);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0012);
        dataForSave.truthseeing = true;
      } else{
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0035);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0010);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G0013);
      }
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0014);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0015);
      await ƒS.Character.animate(characters.girl1, characters.girl1.pose.upset, animate("outLeft"));
      await ƒS.Character.hide(characters.girl1);
      await ƒS.update();
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0029);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Location.show(locations.homeNight);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      //muffled rain sfx
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0030);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0031);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0032);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0033);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0034);
      await ƒS.Sound.fade(sound.day, 0, 0, true);
      ƒS.Speech.hide();
      //initiate dream
      await ƒS.Location.show(locations.void);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Sound.play(sound.dream, 0.3, true);
      await ƒS.Location.show(locations.dream);
      await ƒS.update(transition.dreamEnter.duration, transition.dreamEnter.alpha, transition.dreamEnter.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000); 
      await ƒS.Speech.tell("???", "Just as I suspected."); 
      await ƒS.Speech.tell("???", "The ripples seem to already make waves.");
      await ƒS.Speech.tell("???", "Well then, you know the drill.");
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
      await ƒS.Speech.tell("???", "Once again I appreciate your input.");
      if (tempscore > 12){
        await ƒS.Speech.tell("???", "It's not far now.");
        await ƒS.Speech.tell("???", "You are doing very well.");
      } else {
        await ƒS.Speech.tell("???", "Huh.");
        await ƒS.Speech.tell("???", "Oh well.");
      }
      await ƒS.Speech.tell("???", "It's getting close now.");
      await ƒS.Speech.tell("???", "Soon you will be ready for a real eye opener.");
      await ƒS.Speech.tell("???", "Can your- or rather our fragile mind take it?");
      await ƒS.Speech.tell("???", "The future is the means by which all is revealed.");
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.void);
      await ƒS.Sound.fade(sound.dream, 0, 0,  true);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      dataForSave.curChapter = 6;
      dataForSave.curiosityCounter = dataForSave.curiosityCounter + tempscore;
      return "Chapter6";
    }
  }
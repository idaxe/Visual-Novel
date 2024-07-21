namespace Visualnovel {
    export async function Chapter3(): ƒS.SceneReturn {
      console.log("Chapter 3 - Oddities");
      characters.protagonist.name = dataForSave.nameProtagonist;
      if (dataForSave.curChapter != 3) {
        return "Chapter4";
      }

      let text = {
        Narrator: {
          N0000: "...",
          N0001: "Another day, another headache",
          N0002: "You ponder why the same kind of dream appeared yet again.",
          N0003: "As you complete your morning routine and head out the door, a familiar face was awaiting you again.",
          N0004: "Just like the day before she is here yet again.",
          N0005: "You and " + characters.girl1.name + " walked to school without many interruptions.",
          N0006: "During class",
          N0007: "After class",
          N0008: "After some walking around you spot " + characters.girl2.name + ".",
          N0009: "With a usual notion " + characters.girl2.name + " sticks out her tounge in a annoyed fashion.",
          N0010: characters.girl2.name + " hands you a ticket of some sort.",
          N0011: "After saying these words, " + characters.girl2.name + " storms off.",
          N0012: "You put away the ticket and started going home.",
          N0013: "After arriving at your home you tried to phone " + characters.friend.name + ".",
          N0014: "To your surprise no one answered.",
          N0015: "After some pondering you decided to go to sleep."
        },
        protagonist: {
          P0000: "...",
          P0001: "*Why is it repeating itself?*",
          P0002: "*Aren't dreams pretty rare in the first place?*",
          P0003: "*On top of that it's a continuous one as well.*",
          P0004: "Here again huh?",
          P0005: "Still, i don't think you need to show up EVERY morning now do you?",
          P0006: "Geez, with this amount of thoughtfullness you could rival my mother if she was still around.",
          P0007: "Ok, ok sorry.",
          P0008: "*Ugh, why did he start rambeling about the japanese gods of creation.*",
          P0009: "*We get it you love mythology but this is an economics class.*",
          P0010: "...?",
          P0011: "*Are some of my classmates gazing at me funny?*",
          P0012: "Nah, I probably should just listen to the 'lecture'.",
          P0013: "Ok, now hold on.",
          P0014: "I know I've been abscent for some time but there is something else.",
          P0015: "Their gazes feel off.",
          P0016: "Like I'm... not supposed to be here.",
          P0017: "Very strange. Could it be that I look that different from before?",
          P0018: "I should get a haircut.",
          P0019: "Man that teacher really needs to keep his hobbies private.",
          P0020: "Ok. Time to look for my friends.",
          P0021: "Hey " + characters.girl2.name + " what's up?",
          P0022: "Is " + characters.girl1.name + " not with you today?",
          P0023: "Please don't tell me you're gonna make these nicknames commonplace.",
          P0024: "Yeah yeah, I got it.",
          P0025: "People always place such high expectations on her.",
          P0026: "She should really get herself a break sometime. She even started coming to my house to walk to school each morning since I got out.",
          P0027: "What was that?",
          P0028: "Oh wow. Thank you very much.",
          P0029: "I gotta ask though, was this your idea?",
          P0030: "You didn't seem the type to host these kind of events before. Unless it was for him that is.",
          P0031: "*Maybe I'm just thinking about all of this too much.*",
          P0032: "*Unusual or not, a surprise is a suprise.*",
          P0033: "*And it was definitly a positive one.*",
          P0034: "Strange, even when he was ill before he always had time to answer.",
          P0035: "Damn, if only I had a number of some relative.",
          PD001: "I've only noticed today but I've been getting headaches every time I wake up now.",
          PD002: characters.girl1.name + " showed up at my house again. I think it's a bit much but I've always apprechiated the care she had for me.",
          PD003: "Aside from my Headaches every morning i get the feeling that there came some strange dreams right before them. I feel like there is a coincedence",
          PD004: "Seems like my friends want to distract me from all the hospital shenanigans with a trip to the amusement park, which is coincedently in town again.",
          PD005: "As always our teachers have some unique preferences they want to imprint upon us.",
          PD005A: "Come to think of it, I noticed some strange gazes during the class though.",
          PD005B: "Nah, I choose to ignore these gazes.",
          PD006: "I was too distracted to notice but all that hospital time made my hair longer than I want to. I should get rid of it soon.",
          PD007: "I couldn't get in touch with " + characters.friend.name + ". I wonder what's going on on his end.",
          PD008: "I can't wait to do fun stuff with my friends again. I missed it a lot."
        },
        girl1: {
          G0001: "Good morning " + characters.protagonist.name,
          G0002: "Aww come ooooon, don't make it sound like it's a bad thing.",
          G0003: "Maybe not, however I'm still concerned about your health.",
          G0004: "The doctors may told you you're fine but I'm still not convinced.",
          G0005: "C'moon, don't make jokes about that. I'm serious here!",
          G0006: "Ok now that you're with me again we can go to school now can we?"
        },
        girl2: {
          G2001: "Oh hey it's the zombie.",
          G2002: "I can still say worse things you idiot, you got that?",
          G2003: "Anyways, " + characters.girl1.name + " said she still has some things to take care of so she left early.",
          G2004: "...considering your bodily reactions I should be the one doing that...",
          G2005: "Nothing you moron! *bleegh*",
          G2006: "I almost don't wanna do this anymore but here.",
          G2006_2: "It's a ticket for the local amusement park which is in town right now.",
          G2006_3: "Sure has been a while since us fo-... uhm our group has been out together so I siezed the oppertunity.",
          G2007: "As a way to properly celebrate you getting out of the hospital you know.",
          G2008: "Why would you ask that?",
          G2009: "Oh shut it you! It's not like I do this exclusively for you you know.",
          G2010: "I talked this over with " + characters.girl1.name + ", so don't think anything special because of it. OK!"
        }
      }
      let listen = false;
      let tempscore = 0;
      let thoughts = {
        C1: "Headaches",
        N1: "Overprotectiveness",
        N2: "Dreams"
      };
      let thoughts2 = {
        C1: "Ticket",
        N1: "Odd lesson",
        N2: "Haircut"
      };
      let thoughts3 = {
        C1: "Old friend",
        N1: "Anticipation"
      };

      await ƒS.Location.show(locations.homeDay);
      await ƒS.Sound.play(sound.day, 0.3, true);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      await ƒS.Location.show(locations.town); //street bgm
      await ƒS.Character.show(characters.girl1, characters.girl1.pose.happy, customPositions.slightleft);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
      //transition
      await ƒS.Location.show(locations.classroom);
      await ƒS.Character.hide(characters.girl1);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Speech.tell("Male Teacher", "...and thats why when Izanagi gazed upon his wife in yomi he...");  //its shorter to just make this one custom text for this one line he says
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      let choice: String;
      let classThoughts = {
        Think: "Think about the gazes.",
        Ignore: "Just listen to the lecture."
      };
      choice = await ƒS.Menu.getInput(classThoughts, "decisionHospital");
      switch (choice){
        case classThoughts.Think:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0013);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0014);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0015);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0016);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0017);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0018);
          listen = true;
          //add some clue points here
          break;
        case classThoughts.Ignore:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
          break;
      }
      //fade
      await ƒS.Location.show(locations.hallway);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.happy, customPositions.slightleft);
      //await ƒS.Animation.();
      //await ƒS.update();
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0020);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0021);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0022);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0023);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0024);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0025);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0026);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0027);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2006);
      //await ƒS.Animation(); //maybe a short foreward step animation
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
      //maybe ticket into a inventory slot which skips chapter 4 if discarded
      //await ƒS.Animation();//maybe a short back step animation
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0028);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0029);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0030);
      await ƒS.Character.show(characters.girl2, characters.girl2.pose.angry, customPositions.slightleft); //angy face
      await ƒS.Character.hide(characters.girl2);
      await ƒS.update();
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2009);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2010);
      await ƒS.Character.animate(characters.girl2, characters.girl2.pose.angry, animate("outLeft")); //char gone
      await ƒS.update();
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0011);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0031);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0032);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0033);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0012);
      await ƒS.Character.hide(characters.girl1);
      await ƒS.Character.hide(characters.girl2);
      //fade
      await ƒS.Location.show(locations.homeNight);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0013);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0014);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0034);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0035);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0015);
      await ƒS.Sound.fade(sound.day, 0, 0, true);
      ƒS.Speech.hide();
      //initiate dream
      await ƒS.Location.show(locations.void);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Sound.play(sound.dream, 0.3, true);
      await ƒS.Location.show(locations.dream);
      await ƒS.update(transition.dreamEnter.duration, transition.dreamEnter.alpha, transition.dreamEnter.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000); 
      await ƒS.Speech.tell("???", "Suprise suprise!"); 
      await ƒS.Speech.tell("???", "Your favorite hauting voice is back.");
      await ƒS.Speech.tell("???", "Just like the last times I'm gonna need some insights.");
      await ƒS.Speech.tell("???", "Let me into your life.");
      let choice2 = await ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
      switch (choice2){
        case thoughts.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD001);
          tempscore = tempscore + 5;
          break;
        case thoughts.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD002);
          break;
        case thoughts.N2:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD003);
          tempscore = tempscore + 5;
          break;
      }
      let choice3 = await ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
      switch (choice3){
        case thoughts2.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD004);
          break;
        case thoughts2.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD005);
          if (listen == true){
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD005A);
            tempscore = tempscore + 10;
          } else {
            await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD005B);
          }
          break;
        case thoughts2.N2:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD006);
          break;
      }
      let choice4 = await ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
      switch (choice4){
        case thoughts3.C1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD007);
          tempscore = tempscore + 5;
          break;
        case thoughts3.N1:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.PD008);
          break;
      }

      await ƒS.Speech.tell("???", "I see...");
      if (tempscore > 7){
        await ƒS.Speech.tell("???", "I am most impressed.");
        await ƒS.Speech.tell("???", "Your finding shall lead you to the origin.");
        //increase global truth score
      } else {
        await ƒS.Speech.tell("???", "You seem to be making progress.");
        await ƒS.Speech.tell("???", "But a word of advice. You should pay a bit more attention on the things happening around you.");
      }
      await ƒS.Speech.tell("???", "That may give too much away though.");
      await ƒS.Speech.tell("???", "Do with these informations as you please.");
      await ƒS.Speech.tell("???", "Hope you can remember these interactions better outside of your subconciousness soon.");
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.void);
      await ƒS.Sound.fade(sound.dream, 0, 0,  true);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      dataForSave.curChapter = 4;
      dataForSave.curiosityCounter = dataForSave.curiosityCounter + tempscore;
      return "Chapter4";
    }
  }
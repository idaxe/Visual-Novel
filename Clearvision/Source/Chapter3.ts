namespace Visualnovel {
    export async function Chapter3(): ƒS.SceneReturn {
      console.log("Chapter 3 - Oddities");
      
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "Another day another headache",
          N0002: "You ponder why the same kind of dream appeared yet again",
          N0003: "As you complete your morning routine and head out the door a familiar face was awaiting you again.",
          N0004: "Just like the day before she is here yet again.",
          N0005: "You and" + characters.girl1.name + " walked to school without many interruptions.",
          N0006: "During class",
          N0007: "After class",
          N0008: "After some walking around you spot " + characters.girl2.name + ".",
          N0009: "With a usual notion " + characters.girl2.name + " sticks out her tounge in a annoyed fashion.",
          N0010: characters.girl2.name + " hands you a ticket of some sort.",
          N0011: "After saying these words, " + characters.girl2.name + " storms off.",
          N0012: "You put away the ticket "
        },
        protagonist: {
          P0000: "...",
          P0001: "*Why is it repeating itself*",
          P0002: "*Aren't dreams rare in itself?*",
          P0003: "*On top of that its a continuous one as well.*",
          P0004: "Here again huh?",
          P0005: "Still, i don't think you need to show up EVERY morning now do you?",
          P0006: "Geez. with this amount of thoughtfullness you could rival my mother if she was still around.",
          P0007: "Ok, ok sorry.",
          P0008: "*Ugh, why did he start rambeling about the japanese gods of creation.*",
          P0009: "*We get it you love mythology but this is an economics class.*",
          P0010: "...?",
          P0011: "*Are some of my classmates gazing at me funny?*",
          P0012: "Nah, i probably should just listen to the 'lecture'.",
          P0013: "Ok, now hold on.",
          P0014: "I know i've been abscent for some time but there is something else.",
          P0015: "Their gazes feel off.",
          P0016: "Like I'm... not supposed to be here.",
          P0017: "Very strange. Could it be that I look that different from before?",
          P0018: "I should get a haircut.",
          P0019: "Man that teacher really needs to keep his hobbies private.",
          P0020: "Ok. Time to look for my friends.",
          P0021: "Hey " + characters.girl2.name + " whats up?",
          P0022: "Is " + characters.girl1.name + " not with you today?",
          P0023: "Please don't tell me you're gonna make these nicknames commonplace.",
          P0024: "Yeah yeah, i got it.",
          P0025: "People always place such high expectations on her.",
          P0026: "She should really get herself a break sometime. She even started coming to my house to walk to school each morning since i got out.",
          P0027: "What was that?",
          P0028: "Oh wow. Thank you very much.",
          P0029: "I gotta ask though, was this your idea?",
          P0030: "You didn't seem the typ to host these type of events before. Unless it was for him that is.",
          P0031: "*Maybe I'm just thinking about all of this too much.*",
          P0032: "*Unusual or not, a surprise is suprise.*",
          P0033: "And the was definitly a positive one."
        },
        girl1: {
          G0001: "Good morning " + characters.protagonist.name,
          G0002: "Aww come ooooon, don't make it sound like its a bad thing.",
          G0003: "Maybe not, however im still concerned about your health.",
          G0004: "The doctors may told you you're fine but i'm still not convinced.",
          G0005: "C'moon, don't make jokes about that. I'm serious here!",
          G0006: "Ok now that you're with me again we can go to school now can we?"
        },
        girl2: {
          G2001: "Oh hey it's the zombie.",
          G2002: "I can still say worse things you idiot, you got that?",
          G2003: "Anyways, " + characters.girl1.name + " said she still has some things to take care of so she left early.",
          G2004: "...considering your bodily reactions I should be the one doing that...",
          G2005: "Nothing you moron! *bleegh*",
          G2006: "I almost don't wanna do this anmore but here",
          G2006_2: "It's a ticket for the local amusement park which is in town right now.",
          G2006_3: "Sure has been a while since us fo-... uhm our group has been out together so I siezed the oppertunity.",
          G2007: "As a way to propperly celebrate you getting out of the hospital you know.",
          G2008: "Why would you ask that?",
          G2009: "Oh shut it you! It's not like I do this exclusively for you you know.",
          G2010: "I talked this over with " + characters.girl1.name + ", so don't think anything special because of it. OK!"
        }
      }

      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl2, text.girl1.G0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Speech.tell(characters.girl2, text.girl1.G0003);
      await ƒS.Speech.tell(characters.girl2, text.girl1.G0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.girl2, text.girl1.G0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.girl2, text.girl1.G0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
      //transition
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Speech.tell("Male Teacher", "...and thats why when izanagi gazep upon his wife in yomi he...");  //its shorter to just make this one custom text for this one line he says
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
          //add some clue points here
          break;
        case classThoughts.Ignore:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
          break;
      }
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0020);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0021);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0022);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2001);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0023);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0024);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0025);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0026);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0027);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2007);
      //initiate dream
    }
  }
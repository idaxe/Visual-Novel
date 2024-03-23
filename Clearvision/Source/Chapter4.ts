namespace Visualnovel {
    export async function Chapter4(): ƒS.SceneReturn {
      console.log("Chapter 4 - A enlightening trip");
      
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "Another one today.",
          N0002: "At this point you already got used to the pain.",
          N0003: "However the consistency with these dreams and the way they leave you thinking combined with how accurately the are to remember really leave you susspicious now.",
          N0004: "Even with your limited knowledge about dreams you know that something like this is now too rare to be a coincedence.",
          N0005: "You ready yourself for the day before you.",
          N0006: "Since you can't stop her anyways you embraced "+ characters.girl1.name +" coming to your place now.",
          N0007: "You talked about various topics on the way to school.",
          N0008: "Nothing interesting happened in class today.",
          N0009: "You decide to immideatly meet up with your friends and to to the amusement park.",
          N0010: "After going on some rides your group decides to take a break.",
          N0011: "Seeing a empty table near to some food stands, your group decided to take a lunch break.",
          N0012: "After " + characters.girl1.name + " left you turn your attention to " + characters.girl2.name + ".",
          N0013: "She flashes you a big grin",
          N0014: "At that moment " + characters.girl1.name + " comes back with all our orders in her hands.",
          N0015: characters.girl2.name + " suddenly got up and covered " + characters.girl1.name + "s mouth.",
          N0016: "You enjoyed a lively break before using the rest of the afternoon to have some more fun.",
          N0017: "It's Evening now.",
          N0018: "You bid your friends goodbye before heading home.",
          N0019: "You feel exhausted, but there still something to do."
        },
        protagonist: {
          P0000: "...",
          P0001: "*Something definitly happened to my brain when I was unconcious*",
          P0002: "*But what can even happen to ones brain when it is in a comatose state?*",
          P0003: "*I should inform myself about this stuff this evening.*",
          P0004: "*Gotta make myself ready now.*",
          P0005: "*Alrighty. 3... 2... 1... aaaand.*",
          P0006: "Aye, good mornin to you too.",
          P0007: "How about you cling to her arm next time around, yeah?",
          P0008: "Cotton ca-, wait no a crépe please",
          P0009: "You know I was a little sceptical about this at first but I feel suprisingly refreshed.",
          P0010: "Plus it was fun. Thank you for organizing it " + characters.girl2.name + ".",
          P0011: "*Come to think of it, why was I about to say I want cotton candy?*",
          P0012: "*I hated that stuff ever since that birthday fiasko 8 years ago.*",
          P0013: "*However it was always the favorite sweet of him.*",
          P0014: "*Just what is going on.*",
          P0015: "Was I really giving off that impression?",
          P0016: "...but you were the one getting up.",
          P0017: "Nothing!",
          P0018: "Right. Now time to research.",
          P0019: "Ok I was right on the money when it comes to the repeating dreams.",
          P0020: "These habbit changes though...",
          P0021: "It says these mostly happen this sudden only in cases with brain tumors or severe head trauma.",
          P0022: "From what I remember the doctor saying though both of these were not mentioned.",
          P0023: "Something definitly happened though.",
          P0024: "Looks like there is some questioning in order tomorrow.",
          P0025: "For now I'll go to sleep though."
        },
        girl1: {
          G0001: "Top of the morning to ya lad.",
          G0002: "Haha, you should've seen your face " + characters.girl2.name,
          G0003: "Alright I'm gonna get stuff for everyone. Any wishes?",
          G0004: "Okay. I'll be right back.",
          G0005: "Hey, stay with us today.",
          G0006: "No spacing out allowed.",
          G0007: "We still have a whole lot of fun waiting for us at the end of the road.",
          G0008: "Of course!",
          G0009: "You haven't even noticed that " + characters.girl2.name + " has-"
        },
        girl2: {
          G2001: "Oh shut it you, you know i'm not good with that stuff.",
          G2002: "Uuuuu, don't remind me you idiot.",
          G2003: "Caramelised almonds for me!",
          G2004: "I told you don't mention it.",
          G2005: "...but.",
          G2006: "You're welcome.",
          G2007: "Oh I really thank you for getting this for us.",
          G2008: "I was really starving, so lets all sit down and enjoy our stuff.",
          G2009: "What was that?"
        }
      }
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
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0011);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2004);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2005);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0014);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0014);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0015);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0008);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0015);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2007);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0016);
      await ƒS.Speech.tell(characters.girl2, text.girl2.G2009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0017);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0016);
      //fade
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
    }
  }
// ============================================================
// DEAD GORGEOUS — STORY & DIALOGUE CONTENT
// Client dialogue trees, Café/location scenes, Quartett opponent
// lines, calendar/event text, achievements, and other narrative
// content. Loaded after data-cards.js (some content, like Quartett
// opponent pools, references DECK) and before the main engine script.
// ============================================================

const CAFE_SNIPPETS = [
  "Two regulars in the corner are arguing about whether a courier they know really has a shortcut through tunnels that don't exist anymore.",
  "Someone at the next table insists they once attended one of the Afterking's banquets — the details change every time they tell it.",
  "A tiny woman dressed entirely in black hems a stranger's sleeve without being asked, then vanishes before anyone can thank her.",
  "A scratched-out invitation sits abandoned on the counter. The name that used to be there might have been royal.",
  "Someone's watering a plant that has no business blooming this far from the sun. They don't explain, and nobody asks.",
];

const CLIENTS = [
  {
    name: "Margo", color: "#3a3a3a", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_margo.png",
    greeting: "“You're the replacement.”", // [bible] her opening line, verbatim
    preferences: [
      pref("color", "Black"), pref("color", "Red"), pref("style", "Elegant"),
      pref("style", "Classic"), pref("fit", "Fitted"), pref("style", "Bold"),
    ],
    combo: { colors: ["Black", "Red"], bonus: 8 },
    briefs: [
      {
        dialogue: [
          { who: "MARGO", t: "Black. Fitted. Nothing apologetic." },
          { who: "YOU", t: "Good morning to you too." },
          { who: "MARGO", t: "Was that unclear?" },
        ],
        want: [req("color", "Black"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Elegant. But don't make it polite." },
          { who: "YOU", t: "There's a difference?" },
          { who: "MARGO", t: "A considerable one." },
        ],
        want: [req("style", "Elegant"), req("style", "Daring")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "I'll be at the Castle most of the evening." },
          { who: "YOU", t: "Dinner?" },
          { who: "MARGO", t: "Watching people pretend they enjoy dinner." },
        ],
        want: [req("style", "Classic"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "No black today." },
          { who: "YOU", t: "Are you feeling alright?" },
          { who: "MARGO", t: "Don't make me regret saying it." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
        suppressPreference: ["Black"],
        softDirection: "She specifically asked for no black — wearing black won't fail the outfit, but it won't earn her usual love for it here.",
      },
      {
        dialogue: [
          { who: "MARGO", t: "The Queen is receiving people tonight." },
          { who: "YOU", t: "And you're invited?" },
          { who: "MARGO", t: "Everyone is invited. Very few are wanted." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Give me something softer." },
          { who: "YOU", t: "You?" },
          { who: "MARGO", t: "You have five seconds to stop enjoying this." },
        ],
        want: [req("style", "Romantic"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Green." },
          { who: "YOU", t: "Green?" },
          { who: "MARGO", t: "I remember liking it once." },
          { who: "MARGO", t: "Don't ask." },
        ],
        want: [req("style", "Classic"), req("fit", "Regular")],
        hint: ["Green"],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Apparently I intimidate people." },
          { who: "YOU", t: "Apparently?" },
          { who: "MARGO", t: "Make me approachable." },
          { who: "YOU", t: "That might take more than clothes." },
          { who: "MARGO", t: "Careful." },
        ],
        want: [req("style", "Sweet"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "You've been very predictable lately." },
          { who: "YOU", t: "Me?" },
          { who: "MARGO", t: "Yes. Surprise me." },
        ],
        want: [req("style", "Bold"), req("fit", "Regular")],
        softDirection: "A non-black look is especially appreciated here.",
      },
      {
        dialogue: [
          { who: "MARGO", t: "Romantic." },
          { who: "YOU", t: "Really?" },
          { who: "MARGO", t: "It's a style. Not a confession." },
        ],
        want: [req("style", "Romantic"), req("style", "Daring")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Make expensive look effortless." },
          { who: "YOU", t: "That's annoyingly vague." },
          { who: "MARGO", t: "Good." },
        ],
        want: [rarityReq(), req("style", "Minimal")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "I don't have a brief." },
          { who: "YOU", t: "You always have a brief." },
          { who: "MARGO", t: "I have an opinion. That's different." },
          { who: "MARGO", t: "Show me yours." },
        ],
        playerChoice: true,
      },
    ],
  },
  {
    name: "Juniper", color: "#8fae7a", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_juniper.png",
    greeting: "“Oh — hello. I wasn't expecting company, but that's rather the theme lately.”", // [voice]
    preferences: [
      pref("color", "Green"), pref("style", "Romantic"), pref("style", "Cozy"),
      pref("style", "Sweet"), pref("fit", "Relaxed"),
    ],
    briefs: [
      {
        dialogue: [
          { who: "JUNIPER", t: "Something soft today. Green, if you have it." },
          { who: "YOU", t: "Garden clothes?" },
          { who: "JUNIPER", t: "Everything is garden clothes if you're determined enough." },
        ],
        want: [req("style", "Romantic"), req("fit", "Relaxed")],
        hint: ["Green", "Cozy"],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Romantic, I think." },
          { who: "YOU", t: "You think?" },
          { who: "JUNIPER", t: "I'm trying not to overthink everything." },
        ],
        want: [req("style", "Romantic"), req("fit", "Relaxed")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I'm spending the afternoon outside." },
          { who: "YOU", t: "In the garden?" },
          { who: "JUNIPER", t: "Hopefully. Margaret has opinions about who counts as 'outside.'" },
        ],
        want: [req("fit", "Relaxed"), req("style", "Romantic")],
        hint: ["Green"],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Black." },
          { who: "YOU", t: "That's new." },
          { who: "JUNIPER", t: "I'm going somewhere I'm not supposed to." },
          { who: "YOU", t: "That's also new." },
        ],
        want: [req("color", "Black"), req("style", "Daring")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "There's a gathering in the garden tonight." },
          { who: "YOU", t: "A party?" },
          { who: "JUNIPER", t: "Margaret would be offended if you called it that." },
        ],
        want: [req("style", "Romantic"), req("style", "Elegant")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Could we avoid green?" },
          { who: "YOU", t: "I didn't know you knew how." },
          { who: "JUNIPER", t: "Neither did I." },
        ],
        want: [req("color", "Blue"), req("style", "Sweet")],
        suppressPreference: ["Green"],
        softDirection: "She asked to avoid green — wearing green won't fail the outfit, but it won't earn her usual love for it here.",
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I want something people notice." },
          { who: "YOU", t: "You normally hide from people noticing." },
          { who: "JUNIPER", t: "Yes. I'm trying something." },
        ],
        want: [req("style", "Bold"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I have to go to the Castle." },
          { who: "YOU", t: "You sound thrilled." },
          { who: "JUNIPER", t: "I'd rather repot twelve thorn bushes." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Can you make me look… dangerous?" },
          { who: "YOU", t: "You?" },
          { who: "JUNIPER", t: "That reaction is exactly why I'm asking." },
        ],
        want: [req("style", "Daring"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Pink." },
          { who: "YOU", t: "That sounds more like you." },
          { who: "JUNIPER", t: "Then make the rest not like me." },
        ],
        want: [req("color", "Pink"), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I keep choosing things that feel safe." },
          { who: "YOU", t: "Do you want safe?" },
          { who: "JUNIPER", t: "Not tonight." },
        ],
        want: [req("style", "Bold"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Would you choose?" },
          { who: "YOU", t: "No clues?" },
          { who: "JUNIPER", t: "You've seen me enough by now." },
          { who: "JUNIPER", t: "I'm curious what you see." },
        ],
        playerChoice: true,
      },
    ],
  },
  {
    name: "Ivy", color: "#a13d4c", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_ivy.png",
    greeting: "“Well hello, stylist. Try to keep up.”", // [voice]
    preferences: [
      pref("color", "Black"), pref("style", "Cool"), pref("style", "Daring"),
      pref("style", "Bold"), pref("fit", "Relaxed"),
    ],
    briefs: [
      {
        dialogue: [
          { who: "IVY", t: "Black. Cool. Easy." },
          { who: "YOU", t: "You always make this sound like a threat." },
          { who: "IVY", t: "Maybe you're just nervous." },
        ],
        want: [req("color", "Black"), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Got deliveries all afternoon." },
          { who: "YOU", t: "Comfortable?" },
          { who: "IVY", t: "Comfortable enough to run." },
          { who: "YOU", t: "From?" },
          { who: "IVY", t: "Next question." },
        ],
        want: [req("fit", "Relaxed"), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Got a delivery after this. Make it dangerous." },
          { who: "YOU", t: "Anything specific?" },
          { who: "IVY", t: "Red, if you've got it." },
        ],
        want: [req("style", "Daring"), req("fit", "Fitted")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "IVY", t: "I need to look respectable." },
          { who: "YOU", t: "Oh, this I have to see." },
          { who: "IVY", t: "Enjoy it while it lasts." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Delivery to the Castle." },
          { who: "YOU", t: "So?" },
          { who: "IVY", t: "So apparently dropping a package and leaving is 'inappropriate' during a banquet." },
        ],
        want: [req("style", "Elegant"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "IVY", t: "No black." },
          { who: "YOU", t: "Who are you and what have you done with Ivy?" },
          { who: "IVY", t: "I knew this was a mistake." },
        ],
        want: [req("color", "Blue"), req("style", "Cool")],
        suppressPreference: ["Black"],
        softDirection: "She asked for no black — wearing black won't fail the outfit, but it won't earn her usual love for it here.",
      },
      {
        dialogue: [
          { who: "IVY", t: "Something Romantic." },
          { who: "YOU", t: "Excuse me?" },
          { who: "IVY", t: "It's not for a date." },
          { who: "YOU", t: "I didn't say it was." },
          { who: "IVY", t: "Your face did." },
        ],
        want: [req("style", "Romantic"), req("color", "Black")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "IVY", t: "Someone told me I dress like I'm expecting a fight." },
          { who: "YOU", t: "Are you?" },
          { who: "IVY", t: "Usually." },
          { who: "IVY", t: "Make me look friendly." },
        ],
        want: [req("style", "Sweet"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Give me something you think I'd hate." },
          { who: "YOU", t: "Why?" },
          { who: "IVY", t: "Maybe I'm getting predictable." },
        ],
        want: [req("style", "Romantic"), req("color", "Pink")],
      },
      {
        dialogue: [
          { who: "IVY", t: "I need to disappear into a crowd tonight." },
          { who: "YOU", t: "That sounds ominous." },
          { who: "IVY", t: "Then stop asking questions." },
        ],
        want: [req("style", "Minimal"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Make me look expensive." },
          { who: "YOU", t: "That's it?" },
          { who: "IVY", t: "And like I didn't spend an hour trying to look expensive." },
        ],
        want: [rarityReq(), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Your choice." },
          { who: "YOU", t: "Seriously?" },
          { who: "IVY", t: "Don't make it weird." },
          { who: "YOU", t: "You giving up control is a little weird." },
          { who: "IVY", t: "And it can end at any moment." },
        ],
        playerChoice: true,
      },
    ],
  },
  {
    name: "Holly", color: "#8ea9c1", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_holly.png",
    greeting: "“Holly.”", // [bible] — she introduces herself tersely, never over-explains
    preferences: [
      pref("color", "Silver"), pref("color", "White"), pref("color", "Blue"),
      pref("style", "Classic"), pref("style", "Minimal"), pref("fit", "Regular"),
      pref("style", "Armour"),
    ],
    combo: { colors: ["White", "Blue"], bonus: 8 },
    briefs: [
      {
        dialogue: [
          { who: "HOLLY", t: "Simple. Nothing loose." },
          { who: "YOU", t: "Any preference?" },
          { who: "HOLLY", t: "Useful." },
        ],
        want: [req("style", "Minimal"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Something traditional." },
          { who: "YOU", t: "Silver?" },
          { who: "HOLLY", t: "If you have it." },
        ],
        want: [req("style", "Classic"), req("fit", "Regular")],
        hint: ["Silver"],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "I'll be outside most of the day." },
          { who: "YOU", t: "Doing what?" },
          { who: "HOLLY", t: "Walking." },
          { who: "YOU", t: "That sounded suspicious." },
          { who: "HOLLY", t: "It wasn't." },
        ],
        want: [req("fit", "Regular"), req("style", "Minimal")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "There is something at the Castle tonight." },
          { who: "YOU", t: "Formal?" },
          { who: "HOLLY", t: "Unfortunately." },
        ],
        want: [req("style", "Elegant"), req("style", "Classic")],
        hint: ["Silver"],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "They said I should look less intimidating." },
          { who: "YOU", t: "Who said that?" },
          { who: "HOLLY", t: "Several people." },
          { who: "YOU", t: "That many?" },
          { who: "YOU", t: "Sweet. Got it." },
        ],
        want: [req("style", "Sweet"), req("color", "Blue")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Romantic." },
          { who: "YOU", t: "You're sure?" },
          { who: "HOLLY", t: "I know what the word means." },
          { who: "YOU", t: "Just checking." },
        ],
        want: [req("style", "Romantic"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Something with more force today." },
          { who: "YOU", t: "That's new." },
          { who: "HOLLY", t: "Red, if there is any." },
        ],
        want: [req("style", "Daring"), req("style", "Classic")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "I was told to wear something cheerful." },
          { who: "YOU", t: "By whom?" },
          { who: "HOLLY", t: "Someone who is enjoying this far too much." },
        ],
        want: [req("color", "Pink"), req("style", "Sweet")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Something less sensible." },
          { who: "YOU", t: "How much less sensible?" },
          { who: "HOLLY", t: "I don't know." },
        ],
        want: [req("style", "Daring"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "There's a banquet." },
          { who: "YOU", t: "You hate banquets." },
          { who: "HOLLY", t: "Correct." },
          { who: "YOU", t: "So what are we doing?" },
          { who: "HOLLY", t: "If I must be there, I would prefer to look formidable." },
        ],
        want: [req("style", "Elegant"), req("style", "Bold")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "You always make choices I wouldn't." },
          { who: "YOU", t: "Is that a complaint?" },
          { who: "HOLLY", t: "Not always." },
          { who: "HOLLY", t: "Do that." },
        ],
        want: [req("style", "Daring"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Choose for me." },
          { who: "YOU", t: "Nothing else?" },
          { who: "HOLLY", t: "You know what I like." },
          { who: "YOU", t: "And if I ignore that?" },
          { who: "HOLLY", t: "Then have a reason." },
        ],
        playerChoice: true,
      },
    ],
  },
];

const MARGO_STAGES = [
  [{ who: 'MARGO', t: "You're the replacement." }, { who: 'YOU', t: 'Replacement?' }, { who: 'MARGO', t: 'Stylist.' }, { who: 'YOU', t: 'What happened to the last one?' }, { who: 'MARGO', t: "You're new. Try remaining that way." }],
  [{ who: 'YOU', t: "You don't trust me very much." }, { who: 'MARGO', t: 'Correct.' }, { who: 'YOU', t: "Because I'm a stylist?" }, { who: 'MARGO', t: 'Because the last one was a stylist.' }, { who: 'YOU', t: 'And?' }, { who: 'MARGO', t: "And now you're here." }],
  [{ who: 'MARGO', t: 'Nothing beige.' }, { who: 'YOU', t: 'You really hate beige.' }, { who: 'MARGO', t: 'Beige is what happens when a colour loses its nerve.' }],
  [{ who: 'YOU', t: 'You know a lot about clothes.' }, { who: 'MARGO', t: 'I made costumes.' }, { who: 'YOU', t: 'Theatre?' }, { who: 'MARGO', t: 'Mostly.' }, { who: 'YOU', t: 'Mostly?' }, { who: 'MARGO', t: "You're getting greedy with your questions." }],
  [{ who: 'MARGO', t: 'No pink.' }, { who: 'YOU', t: "You really don't like pink." }, { who: 'MARGO', t: 'Correct.' }, { who: 'YOU', t: "Don't you like flowers?" }, { who: 'MARGO', t: 'I like flowers. I dislike what people do around them.' }],
  [{ who: 'YOU', t: "Juniper said you're in the Garden Circle." }, { who: 'MARGO', t: 'Did she.' }, { who: 'YOU', t: 'Gardening?' }, { who: 'MARGO', t: 'Among other things.' }, { who: 'YOU', t: 'What other things?' }, { who: 'MARGO', t: 'Tea.' }],
  [{ who: 'YOU', t: "You don't seem like a gardening person." }, { who: 'MARGO', t: 'And what does a gardening person look like?' }, { who: 'YOU', t: 'Less black?' }, { who: 'MARGO', t: 'Careful.' }],
  [{ who: 'YOU', t: 'What do you actually grow?' }, { who: 'MARGO', t: 'Nightshade. Belladonna. Foxglove.' }, { who: 'YOU', t: 'Those are all poisonous.' }, { who: 'MARGO', t: 'Are they?' }, { who: 'YOU', t: 'Yes.' }, { who: 'MARGO', t: 'Good to know.' }],
  [{ who: 'MARGO', t: 'Fitted. Black. Elegant.' }, { who: 'YOU', t: 'Again?' }, { who: 'MARGO', t: 'I found something that works for me. You should try it sometime.' }],
  [{ who: 'YOU', t: 'I saw the Garden Circle last night.' }, { who: 'MARGO', t: "No, you didn't." }, { who: 'YOU', t: 'I saw you going into the Nightgarden.' }, { who: 'MARGO', t: 'Then you saw women walking.' }, { who: 'YOU', t: 'At midnight.' }, { who: 'MARGO', t: "Flowers don't own clocks." }],
  [{ who: 'YOU', t: 'Why is everyone so secretive here?' }, { who: 'MARGO', t: "Because you're asking questions." }, { who: 'YOU', t: "That's usually how you get answers." }, { who: 'MARGO', t: 'Not here.' }],
  [{ who: 'MARGO', t: 'You did well last time.' }, { who: 'YOU', t: 'Was that a compliment?' }, { who: 'MARGO', t: "Don't make me take it back." }],
  [{ who: 'YOU', t: 'Did you make clothes for yourself too?' }, { who: 'MARGO', t: 'Rarely.' }, { who: 'YOU', t: 'Why?' }, { who: 'MARGO', t: 'There was someone else I preferred dressing.' }, { who: 'YOU', t: 'Someone important?' }, { who: 'MARGO', t: 'Very.' }],
  [{ who: 'YOU', t: 'The woman you used to dress—' }, { who: 'MARGO', t: 'You remembered.' }, { who: 'YOU', t: 'You sounded like you loved her.' }, { who: 'MARGO', t: 'I did.' }, { who: 'YOU', t: 'What was her name?' }, { who: 'MARGO', t: 'I remember that.' }, { who: 'YOU', t: "But you're not telling me." }, { who: 'MARGO', t: 'Correct.' }],
  [{ who: 'MARGO', t: 'I remember the green dress I made her.' }, { who: 'YOU', t: 'What did it look like?' }, { who: 'MARGO', t: 'Silk. Low back. Terrible neckline. She insisted.' }, { who: 'YOU', t: 'What did she look like?' }, { who: 'MARGO', t: "I don't know." }],
  [{ who: 'YOU', t: "You can't remember her face?" }, { who: 'MARGO', t: 'No.' }, { who: 'YOU', t: "I'm sorry." }, { who: 'MARGO', t: "Don't be. I remember her laugh." }, { who: 'MARGO', t: 'Most days.' }],
  [{ who: 'YOU', t: 'Juniper gave me something called moonroot.' }, { who: 'MARGO', t: 'Throw it away.' }, { who: 'YOU', t: 'She said you asked for it.' }, { who: 'MARGO', t: 'Then give it to me.' }, { who: 'YOU', t: 'What does it do?' }, { who: 'MARGO', t: "Nothing you'd use correctly." }],
  [{ who: 'YOU', t: 'Margo. I saw what happened in the garden.' }, { who: 'MARGO', t: "Apparently you're incapable of following very simple instructions." }, { who: 'YOU', t: 'You made the flowers move.' }, { who: 'MARGO', t: 'No.' }, { who: 'YOU', t: 'Margo.' }, { who: 'MARGO', t: 'We all did.' }, { who: 'YOU', t: 'The Garden Circle?' }, { who: 'MARGO', t: "Such a stupid name, isn't it?" }, { who: 'YOU', t: "You're witches." }, { who: 'MARGO', t: 'Finally.' }],
  [{ who: 'YOU', t: 'Were you a witch when you were alive?' }, { who: 'MARGO', t: 'Yes.' }, { who: 'YOU', t: 'Actual magic?' }, { who: 'MARGO', t: 'Mostly disappointing men and improving harvests.' }, { who: 'YOU', t: "You're joking." }, { who: 'MARGO', t: 'About the harvests.' }],
  [{ who: 'YOU', t: 'Is being a witch connected to what happened to the last stylist?' }, { who: 'MARGO', t: "Don't ask that again." }, { who: 'YOU', t: 'Why?' }, { who: 'MARGO', t: "Because I'm beginning to like you." }],
];

const JUNIPER_STAGES = [
  [{ who: 'JUNIPER', t: "You're the new stylist." }, { who: 'YOU', t: 'Everyone keeps saying that.' }, { who: 'JUNIPER', t: "We haven't had one for a while." }, { who: 'YOU', t: 'Why?' }, { who: 'JUNIPER', t: 'Oh.' }, { who: 'JUNIPER', t: 'Green would be nice.' }],
  [{ who: 'YOU', t: 'You dodged my question last time.' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'YOU', t: 'Intentionally?' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'YOU', t: "At least you're honest." }, { who: 'JUNIPER', t: 'Usually.' }],
  [{ who: 'YOU', t: 'Is that plant moving?' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'YOU', t: 'Why?' }, { who: 'JUNIPER', t: 'Wind.' }, { who: 'YOU', t: "We're inside." }, { who: 'JUNIPER', t: 'Then probably not wind.' }],
  [{ who: 'YOU', t: 'You were a botanist?' }, { who: 'JUNIPER', t: 'I think I still am.' }, { who: 'YOU', t: "You're dead." }, { who: 'JUNIPER', t: "The plants don't seem bothered." }],
  [{ who: 'YOU', t: 'Where do these plants come from?' }, { who: 'JUNIPER', t: 'Here.' }, { who: 'YOU', t: "I've never seen them around the city." }, { who: 'JUNIPER', t: "You're looking in the wrong places." }],
  [{ who: 'YOU', t: 'You must love Flower Fest.' }, { who: 'JUNIPER', t: 'Why?' }, { who: 'YOU', t: 'Plants.' }, { who: 'JUNIPER', t: "That's like asking a baker if they love being hit with bread." }],
  [{ who: 'JUNIPER', t: 'No pink today.' }, { who: 'YOU', t: "That's new." }, { who: 'JUNIPER', t: 'Is it?' }, { who: 'YOU', t: 'Margo said the same thing.' }, { who: 'JUNIPER', t: 'Margo and I agree on many things.' }, { who: 'YOU', t: "That's worrying." }, { who: 'JUNIPER', t: 'It should be.' }],
  [{ who: 'YOU', t: 'How do you know Margo?' }, { who: 'JUNIPER', t: 'Garden Circle.' }, { who: 'YOU', t: 'So it really is gardening.' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'JUNIPER', t: 'Mostly.' }],
  [{ who: 'YOU', t: "What's the 'mostly'?" }, { who: 'JUNIPER', t: 'Tea.' }, { who: 'YOU', t: 'Margo said that too.' }, { who: 'JUNIPER', t: 'We rehearsed.' }],
  [{ who: 'YOU', t: "What's Nightgarden like?" }, { who: 'JUNIPER', t: 'Beautiful.' }, { who: 'YOU', t: "That's it?" }, { who: 'JUNIPER', t: "That's already more than I should have said." }],
  [{ who: 'JUNIPER', t: 'I need white.' }, { who: 'YOU', t: "That's unusual for you." }, { who: 'JUNIPER', t: 'Special occasion.' }, { who: 'YOU', t: 'Going to the Royal Quarter?' }, { who: 'JUNIPER', t: 'Absolutely not.' }],
  [{ who: 'YOU', t: 'Why not?' }, { who: 'JUNIPER', t: 'Too many people.' }, { who: 'YOU', t: "That's all?" }, { who: 'JUNIPER', t: 'No.' }, { who: 'YOU', t: 'What else?' }, { who: 'JUNIPER', t: "That's all I'm telling you." }],
  [{ who: 'YOU', t: 'Do you remember your garden from when you were alive?' }, { who: 'JUNIPER', t: 'Greenhouse.' }, { who: 'YOU', t: 'Big?' }, { who: 'JUNIPER', t: 'Tiny. Leaked when it rained. The heater broke every winter.' }, { who: 'YOU', t: 'Sounds terrible.' }, { who: 'JUNIPER', t: 'I loved it.' }],
  [{ who: 'YOU', t: 'What did you grow?' }, { who: 'JUNIPER', t: "Everything I wasn't supposed to." }, { who: 'YOU', t: "Some things don't change." }, { who: 'NARRATION', t: 'Juniper smiles.' }],
  [{ who: 'YOU', t: 'What happened to the greenhouse?' }, { who: 'JUNIPER', t: "I don't know." }, { who: 'YOU', t: "You don't remember?" }, { who: 'JUNIPER', t: "There's a point where things become... thin." }, { who: 'YOU', t: 'Your memories?' }, { who: 'JUNIPER', t: 'Yes.' }],
  [{ who: 'YOU', t: 'How much is missing?' }, { who: 'JUNIPER', t: 'Years, maybe.' }, { who: 'YOU', t: "Doesn't that scare you?" }, { who: 'JUNIPER', t: 'Sometimes.' }, { who: 'JUNIPER', t: 'Mostly it annoys me.' }],
  [{ who: 'YOU', t: 'Margo told me.' }, { who: 'JUNIPER', t: 'Oh.' }, { who: 'YOU', t: "That's your reaction?" }, { who: 'JUNIPER', t: "She told you. You're still here. Seems successful." }, { who: 'YOU', t: "You're a witch too?" }, { who: 'JUNIPER', t: 'Botanist first.' }],
  [{ who: 'YOU', t: 'Are the plants magic?' }, { who: 'JUNIPER', t: 'Some.' }, { who: 'YOU', t: 'Which ones?' }, { who: 'JUNIPER', t: "The ones you shouldn't touch." }, { who: 'YOU', t: 'Which are—' }, { who: 'JUNIPER', t: 'Most of them.' }],
  [{ who: 'YOU', t: 'Do the window lights really keep frost creatures away?' }, { who: 'JUNIPER', t: 'Usually.' }, { who: 'YOU', t: "What does 'usually' mean?" }, { who: 'JUNIPER', t: 'Keep yours lit.' }, { who: 'YOU', t: 'Juniper.' }, { who: 'JUNIPER', t: 'Keep. Yours. Lit.' }],
  [{ who: 'YOU', t: 'Does the Garden Circle know what happened to the previous stylist?' }, { who: 'JUNIPER', t: 'We know pieces.' }, { who: 'YOU', t: 'Will you tell me?' }, { who: 'JUNIPER', t: 'Not yet.' }, { who: 'YOU', t: 'You trust me now.' }, { who: 'JUNIPER', t: "That's why I'm not telling you." }],
];

const IVY_STAGES = [
  [{ who: 'IVY', t: 'New stylist.' }, { who: 'YOU', t: 'Is there a sign on me?' }, { who: 'IVY', t: 'Kind of.' }, { who: 'YOU', t: 'What does it say?' }, { who: 'IVY', t: "'Hasn't learned yet.'" }],
  [{ who: 'YOU', t: 'Learned what?' }, { who: 'IVY', t: 'Give it a month.' }, { who: 'YOU', t: 'Everyone here talks like that.' }, { who: 'IVY', t: "You'll start doing it too." }],
  [{ who: 'YOU', t: "That's your bike outside?" }, { who: 'IVY', t: "Don't touch her." }, { who: 'YOU', t: 'Her?' }, { who: 'IVY', t: 'Figure of speech.' }],
  [{ who: 'YOU', t: 'Your bike moved.' }, { who: 'IVY', t: 'Bikes do that.' }, { who: 'YOU', t: 'It was parked.' }, { who: 'IVY', t: 'Wind.' }, { who: 'YOU', t: 'Inside an alley?' }, { who: 'IVY', t: 'Very local wind.' }],
  [{ who: 'YOU', t: 'What model is it?' }, { who: 'IVY', t: "Don't know." }, { who: 'YOU', t: "It's your bike." }, { who: 'IVY', t: 'Correct.' }, { who: 'YOU', t: 'Where did you get it?' }, { who: 'IVY', t: 'Found me.' }, { who: 'YOU', t: 'You found it?' }, { who: 'IVY', t: "That's not what I said." }],
  [{ who: 'IVY', t: 'Boots.' }, { who: 'YOU', t: 'Again?' }, { who: 'IVY', t: 'Have you tried running across wet cobblestones in heels?' }, { who: 'YOU', t: 'Have you?' }, { who: 'IVY', t: 'Once.' }, { who: 'YOU', t: 'And?' }, { who: 'IVY', t: 'Boots.' }],
  [{ who: 'YOU', t: 'You were a courier when you were alive too?' }, { who: 'IVY', t: 'Yeah.' }, { who: 'YOU', t: 'Motorcycle?' }, { who: 'IVY', t: 'Bike. Motorcycle. Anything fast enough to make bad decisions interesting.' }],
  [{ who: 'YOU', t: 'And now you deliver things here.' }, { who: 'IVY', t: "Apparently death isn't a career change." }],
  [{ who: 'YOU', t: 'Where do you deliver?' }, { who: 'IVY', t: 'Everywhere.' }, { who: 'YOU', t: 'Night Castle?' }, { who: 'IVY', t: 'Sometimes.' }, { who: 'YOU', t: 'Nightgarden?' }, { who: 'IVY', t: 'Sometimes.' }, { who: 'YOU', t: "There isn't even a road behind Nightgarden." }, { who: 'IVY', t: 'Sure there is.' }],
  [{ who: 'YOU', t: 'Show me.' }, { who: 'IVY', t: 'No.' }, { who: 'YOU', t: 'Why?' }, { who: 'IVY', t: 'Because I like you alive—' }, { who: 'IVY', t: 'You know what I mean.' }],
  [{ who: 'YOU', t: 'Who are you delivering to tonight?' }, { who: 'IVY', t: 'Client confidentiality.' }, { who: 'YOU', t: 'Since when do you care about that?' }, { who: 'IVY', t: 'Since this client has horns.' }, { who: 'YOU', t: 'What?' }, { who: 'IVY', t: 'Black jacket, please.' }],
  [{ who: 'YOU', t: 'Horns?' }, { who: 'IVY', t: 'Fashion.' }, { who: 'YOU', t: 'Ivy.' }, { who: 'IVY', t: 'Very avant-garde.' }],
  [{ who: 'IVY', t: 'Need something Classic.' }, { who: 'YOU', t: 'You hate Classic.' }, { who: 'IVY', t: 'Royal Quarter.' }, { who: 'YOU', t: 'You got invited?' }, { who: 'IVY', t: 'God, no.' }, { who: 'YOU', t: 'Delivery?' }, { who: 'IVY', t: 'Yeah.' }],
  [{ who: 'YOU', t: 'People are acting weird about Solstice.' }, { who: 'IVY', t: 'People act weird about everything.' }, { who: 'YOU', t: "Someone said 'not like last time.'" }, { who: 'IVY', t: "Don't ask about last time." }, { who: 'YOU', t: 'Why?' }, { who: 'IVY', t: 'See? Exactly that.' }],
  [{ who: 'YOU', t: 'Did you know the previous stylist?' }, { who: 'IVY', t: 'A little.' }, { who: 'YOU', t: "Nobody will tell me what happened." }, { who: 'IVY', t: 'Smart.' }, { who: 'YOU', t: 'You included?' }, { who: 'IVY', t: 'Especially me.' }],
  [{ who: 'YOU', t: 'Were you there?' }, { who: 'IVY', t: 'Next question.' }, { who: 'YOU', t: "That's not a no." }, { who: 'IVY', t: "That's why I said next question." }],
  [{ who: 'YOU', t: 'Your bike was looking at me.' }, { who: 'IVY', t: "That's ridiculous." }, { who: 'YOU', t: 'It has no eyes and somehow I know it was looking at me.' }, { who: 'IVY', t: '...' }, { who: 'IVY', t: 'She likes you.' }, { who: 'YOU', t: 'SHE?' }, { who: 'IVY', t: 'Outfit. Now.' }],
  [{ who: 'YOU', t: 'Is she alive?' }, { who: 'IVY', t: 'Define alive.' }, { who: 'YOU', t: 'Absolutely not.' }, { who: 'IVY', t: 'Finally asking better questions.' }],
  [{ who: 'YOU', t: 'Is the bike from After City?' }, { who: 'IVY', t: 'No.' }, { who: 'YOU', t: 'Living world?' }, { who: 'IVY', t: 'No.' }, { who: 'YOU', t: 'Then where?' }, { who: 'IVY', t: "That's a third-date question." }, { who: 'YOU', t: "We've known each other for months." }, { who: 'IVY', t: "And yet you've never bought me dinner." }],
  [{ who: 'YOU', t: "You know what's outside After City." }, { who: 'IVY', t: 'Some of it.' }, { who: 'YOU', t: 'Angels?' }, { who: 'IVY', t: 'Go home before dark tonight.' }, { who: 'YOU', t: 'Ivy—' }, { who: 'IVY', t: 'Seriously.' }],
];

const HOLLY_STAGES = [
  [{ who: 'HOLLY', t: 'You are the new clothier.' }, { who: 'YOU', t: 'Stylist.' }, { who: 'HOLLY', t: 'Is there a difference?' }, { who: 'YOU', t: 'Yes.' }, { who: 'HOLLY', t: 'Then prove it.' }],
  [{ who: 'YOU', t: "You don't trust me." }, { who: 'HOLLY', t: "I don't know you." }, { who: 'YOU', t: 'Fair.' }, { who: 'HOLLY', t: 'The last one was known.' }, { who: 'YOU', t: 'What happened to them?' }, { who: 'HOLLY', t: 'Exactly.' }],
  [{ who: 'HOLLY', t: 'White. Simple. Nothing that impedes movement.' }, { who: 'YOU', t: "You're going to dinner." }, { who: 'HOLLY', t: 'Danger does not schedule appointments.' }],
  [{ who: 'YOU', t: "You always dress like you're expecting trouble." }, { who: 'HOLLY', t: 'I prefer being incorrectly prepared to correctly dead.' }, { who: 'YOU', t: 'Holly.' }, { who: 'HOLLY', t: 'Habit.' }],
  [{ who: 'YOU', t: 'Were you a soldier?' }, { who: 'HOLLY', t: 'Yes.' }, { who: 'YOU', t: 'When?' }, { who: 'HOLLY', t: 'A long time ago.' }],
  [{ who: 'YOU', t: 'What kind of soldier?' }, { who: 'HOLLY', t: 'The kind that survived battles.' }, { who: 'YOU', t: "Until you didn't." }, { who: 'HOLLY', t: "Don't." }],
  [{ who: 'YOU', t: 'Do you remember the battles?' }, { who: 'HOLLY', t: 'Some.' }, { who: 'YOU', t: 'Which?' }, { who: 'HOLLY', t: 'Mud. Horses. Steel.' }, { who: 'YOU', t: "That's not a battle." }, { who: 'HOLLY', t: "That's what remains." }],
  [{ who: 'YOU', t: 'You fought in armour?' }, { who: 'HOLLY', t: 'Of course.' }, { who: 'YOU', t: 'Heavy?' }, { who: 'HOLLY', t: 'Only if badly made.' }],
  [{ who: 'HOLLY', t: 'Blue today.' }, { who: 'YOU', t: 'You like blue.' }, { who: 'HOLLY', t: 'Someone I knew wore it.' }, { who: 'YOU', t: 'Who?' }, { who: 'HOLLY', t: "I don't remember." }],
  [{ who: 'YOU', t: 'Was it the same person you mentioned before?' }, { who: 'HOLLY', t: "I didn't mention anyone." }, { who: 'YOU', t: 'You said someone wore blue.' }, { who: 'HOLLY', t: 'Then why ask?' }],
  [{ who: 'HOLLY', t: 'There was a woman.' }, { who: 'YOU', t: 'The one in blue?' }, { who: 'HOLLY', t: 'Yes.' }, { who: 'YOU', t: 'Who was she?' }, { who: 'HOLLY', t: 'Isolde.' }],
  [{ who: 'YOU', t: 'Isolde.' }, { who: 'HOLLY', t: 'Princess Isolde.' }, { who: 'YOU', t: 'You served her?' }, { who: 'HOLLY', t: 'I think so.' }, { who: 'YOU', t: 'You think?' }, { who: 'HOLLY', t: "My memories don't ask permission before leaving." }],
  [{ who: 'YOU', t: 'Were you her guard?' }, { who: 'HOLLY', t: 'Knight.' }, { who: 'YOU', t: 'Women could be knights?' }, { who: 'HOLLY', t: 'No.' }, { who: 'YOU', t: 'Oh.' }, { who: 'HOLLY', t: 'Precisely.' }],
  [{ who: 'YOU', t: 'So everyone thought you were a man.' }, { who: 'HOLLY', t: 'Everyone who mattered.' }, { who: 'YOU', t: 'Isolde?' }, { who: 'HOLLY', t: 'Isolde was not easily deceived.' }],
  [{ who: 'YOU', t: 'Did she know from the beginning?' }, { who: 'HOLLY', t: "I don't know." }, { who: 'YOU', t: 'But eventually?' }, { who: 'HOLLY', t: 'Yes.' }, { who: 'YOU', t: 'Was she angry?' }, { who: 'HOLLY', t: 'She laughed for ten minutes.' }],
  [{ who: 'HOLLY', t: 'Something Romantic today.' }, { who: 'YOU', t: 'Really?' }, { who: 'HOLLY', t: 'Must you sound surprised?' }, { who: 'YOU', t: 'A little.' }, { who: 'HOLLY', t: 'Knights can appreciate silk.' }, { who: 'YOU', t: 'Apparently.' }, { who: 'HOLLY', t: 'Knights can also leave.' }, { who: 'YOU', t: 'Romantic it is.' }],
  // [bible note] the source stage opens on "[PLAYER EQUIPS FIRST ARMOR CARD]" —
  // a mechanic trigger for the Armor system, which is deliberately out of
  // scope for now (later "late game" pass). The spoken lines are ported as-is;
  // the mechanic hook (and its "+50 Holly Match" bonus) is left for that pass.
  [{ who: 'HOLLY', t: 'Where did you get that?' }, { who: 'YOU', t: 'The armour?' }, { who: 'HOLLY', t: 'Take it off.' }, { who: 'YOU', t: "You don't like it?" }, { who: 'HOLLY', t: "I didn't say that." }, { who: 'YOU', t: 'Then—' }, { who: 'HOLLY', t: 'Take it off.' }],
  [{ who: 'YOU', t: 'You liked the armour last time.' }, { who: 'HOLLY', t: 'I did not.' }, { who: 'YOU', t: 'The score disagrees.' }, { who: 'HOLLY', t: 'Your machine is impertinent.' }, { who: 'YOU', t: 'You recognized it.' }, { who: 'HOLLY', t: 'I recognized armour.' }, { who: 'YOU', t: 'That armour.' }, { who: 'HOLLY', t: 'Yes.' }],
  [{ who: 'YOU', t: 'Is it like what you wore?' }, { who: 'NARRATION', t: 'Holly runs her hand over the metal.' }, { who: 'HOLLY', t: 'No.' }, { who: 'YOU', t: "What's different?" }, { who: 'HOLLY', t: 'Everything.' }, { who: 'YOU', t: 'Then why does it feel familiar?' }, { who: 'HOLLY', t: "I don't know." }],
  [{ who: 'YOU', t: 'When you think about Isolde, what do you remember?' }, { who: 'HOLLY', t: 'Her hands.' }, { who: 'YOU', t: 'Anything else?' }, { who: 'HOLLY', t: 'Blue ribbons.' }, { who: 'HOLLY', t: 'She hated pears.' }, { who: 'YOU', t: "That's oddly specific." }, { who: 'HOLLY', t: 'I have forgotten kingdoms.' }, { who: 'HOLLY', t: 'I remember that she hated pears.' }],
];

const CLIENT_STAGES = {
  0: MARGO_STAGES,   // Margo
  1: JUNIPER_STAGES, // Juniper
  2: IVY_STAGES,     // Ivy
  3: HOLLY_STAGES,   // Holly
};

const FALLBACK_STAGE = [{ who: "CLIENT", t: "(This client's Studio dialogue hasn't been ported from the bible yet.)" }];

const QUESTIONS = {
  0: [
    { id: "m1", prompt: "You know a lot about clothes.",
      answer: "\u201CI made costumes. Theatre, mostly.\u201D" }, // [bible]
    { id: "m2", prompt: "What do you actually grow in your garden?",
      answer: "\u201CNightshade. Belladonna. Foxglove. ...Good to know, isn't it.\u201D" }, // [bible]
  ],
  1: [
    { id: "j1", prompt: "What did you do before all this?",
      answer: "\u201CI was a botanist. I had a very small greenhouse. I remember every leaf of it.\u201D" }, // [voice]
    { id: "j2", prompt: "Your plants shouldn't grow here, should they?",
      answer: "\u201CNo. They do it anyway. I've stopped asking why.\u201D" }, // [voice]
  ],
  2: [
    { id: "i1", prompt: "What's the deal with your bike?",
      answer: "\u201CShe's got moods. Best not to stare at her too long.\u201D" }, // [voice]
    { id: "i2", prompt: "You deliver to the Royal Quarter?",
      answer: "\u201CSometimes. The routes get... inventive up there.\u201D" }, // [voice]
  ],
  3: [
    { id: "h1", prompt: "Were you a soldier?",
      answer: "\u201CSomething like that.\u201D" }, // [voice]
    { id: "h2", prompt: "Who's Isolde?",
      answer: "\u201C...Nobody you need to worry about.\u201D" }, // [voice] — hard boundary, per her story arc
  ],
};

const AESTHETIC_ACHIEVEMENTS = [
  {
    id: "moto_ballet",
    name: "MOTO BALLET",
    lore: "Leather, ribbons, terrible road safety.",
    requirementsText: ["Moto Boots equipped", "At least 1 Romantic or Sweet Bottom", "At least 1 Romantic or Sweet Top or Dress", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      if (!achHasName(pieces, "Moto Boots")) return false;
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && ["Romantic", "Sweet"].includes(p.style));
      const topOrDressOk = achSome(pieces, (p) => (p.category === "Top" || p.category === "Dress") && ["Romantic", "Sweet"].includes(p.style));
      return bottomOk && topOrDressOk;
    },
  },
  {
    id: "office_siren",
    name: "OFFICE SIREN",
    lore: "Aftercity has no offices, no salaries, but quite a few deadlines. Seems like every time Q4 comes around, people start looking nervously at their clocks.",
    requirementsText: ["Pointy Janes equipped", "At least 1 Fitted Bottom", "At least 1 Fitted or Tight Top", "Every equipped color is Black, Grey or Beige", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      if (!achHasName(pieces, "Pointy Janes")) return false;
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && p.fit === "Fitted");
      const topOk = achSome(pieces, (p) => p.category === "Top" && ["Fitted", "Tight"].includes(p.fit));
      const colorsOk = achEvery(pieces, (p) => ["Black", "Grey", "Beige"].includes(p.color));
      return bottomOk && topOk && colorsOk;
    },
  },
  {
    id: "coquette",
    name: "COQUETTE",
    lore: "A bow would improve this. Several bows would improve it more.",
    requirementsText: ["Ballet Flats, Mary Janes, Flower Janes or Spring Flats equipped", "At least 1 Sweet or Romantic Top", "At least 1 Sweet or Romantic Bottom", "At least 3 equipped cards are Pink or White", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      if (!achHasAnyName(pieces, ["Ballet Flats", "Mary Janes", "Flower Janes", "Spring Flats"])) return false;
      const topOk = achSome(pieces, (p) => p.category === "Top" && ["Sweet", "Romantic"].includes(p.style));
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && ["Sweet", "Romantic"].includes(p.style));
      const pinkWhiteCount = achCount(pieces, (p) => ["Pink", "White"].includes(p.color));
      return topOk && bottomOk && pinkWhiteCount >= 3;
    },
  },
  {
    id: "biker_chic",
    name: "BIKER CHIC",
    lore: "Built for a motorcycle that may or may not exist.",
    requirementsText: ["Leather Jacket, Pink Leather or Fluffy Leather equipped", "Black, Brown or Green Leather, or a Leather Dress equipped", "Moto Boots, Combat Boots or Tall Boots equipped", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      const jacketOk = achHasAnyName(pieces, ["Leather Jacket", "Pink Leather", "Fluffy Leather"]);
      const bottomLeatherOk = achHasAnyName(pieces, ["Black Leather", "Brown Leather", "Green Leather", "Leather Dress"]);
      const bootsOk = achHasAnyName(pieces, ["Moto Boots", "Combat Boots", "Tall Boots"]);
      return jacketOk && bottomLeatherOk && bootsOk;
    },
  },
  {
    id: "soft_grunge",
    name: "SOFT GRUNGE",
    lore: "Comfort, but make it look mildly disappointed in you.",
    requirementsText: ["At least 1 Relaxed or Oversized Top/Jacket", "Black Cutoffs, Blue Cutoffs, or a Fitted mini Bottom", "Chunky Janes or Combat Boots equipped", "At least 2 equipped cards are Black", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      const topOk = achSome(pieces, (p) => (p.category === "Top" || p.category === "Jacket") && ["Relaxed", "Oversized"].includes(p.fit));
      const bottomOk = achHasAnyName(pieces, ["Black Cutoffs", "Blue Cutoffs"]) ||
        achSome(pieces, (p) => p.category === "Bottom" && p.fit === "Fitted" && /mini/i.test(p.name));
      const shoesOk = achHasAnyName(pieces, ["Chunky Janes", "Combat Boots"]);
      const blackCount = achCount(pieces, (p) => p.color === "Black");
      return topOk && bottomOk && shoesOk && blackCount >= 2;
    },
  },
  {
    id: "dark_romance",
    name: "DARK ROMANCE",
    lore: "Love letter. Black envelope. No return address.",
    requirementsText: ["Every equipped card is Black", "At least 1 Romantic card", "At least 1 Daring card", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.color === "Black") && achSome(pieces, (p) => p.style === "Romantic") && achSome(pieces, (p) => p.style === "Daring");
    },
  },
  {
    id: "dead_silence_luxury",
    name: "DEAD SILENCE LUXURY",
    lore: "Old money is complicated in a city where nobody can remember where they left their bank account. Money transcends life and death.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped color is Black, White or Beige", "Every equipped style is Elegant, Classic or Minimal", "At least 2 equipped cards are Elegant"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const colorsOk = achEvery(pieces, (p) => ["Black", "White", "Beige"].includes(p.color));
      const stylesOk = achEvery(pieces, (p) => ["Elegant", "Classic", "Minimal"].includes(p.style));
      const elegantCount = achCount(pieces, (p) => p.style === "Elegant");
      return colorsOk && stylesOk && elegantCount >= 2;
    },
  },
  {
    id: "move_on_to_greener_pastures",
    name: "MOVE ON TO GREENER PASTURES",
    lore: "Give it a few years. You will. Life and death go on.",
    requirementsText: ["Exactly 4 equipped cards", "At least 3 equipped cards are Romantic or Sweet", "At least 1 Green card", "At least 1 Pink or White card", "A Flower Basket or Daisy Bag equipped"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const romSweetCount = achCount(pieces, (p) => ["Romantic", "Sweet"].includes(p.style));
      const greenOk = achSome(pieces, (p) => p.color === "Green");
      const pinkWhiteOk = achSome(pieces, (p) => ["Pink", "White"].includes(p.color));
      const bagOk = achHasAnyName(pieces, ["Flower Basket (Iconic)", "Flower Basket (Pink)", "Flower Basket (White)", "Daisy Bag (Blue)", "Daisy Bag (Pink)"]);
      return romSweetCount >= 3 && greenOk && pinkWhiteOk && bagOk;
    },
  },
  {
    id: "mooncore",
    name: "MOONCORE",
    lore: "Dress like the moon is personally expecting you.",
    requirementsText: ["Exactly 4 equipped cards", "All 4 equipped cards belong to Moon Set"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.set === "Moon Set");
    },
  },
  {
    id: "pink_fantasy",
    name: "PINK FANTASY",
    lore: "Subtlety died before you did.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card is Pink"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.color === "Pink");
    },
  },
  {
    id: "midnight_walk",
    name: "MIDNIGHT WALK",
    lore: "The dead used to walk together so nobody had to arrive alone.",
    requirementsText: ["Silver", "Blue", "Grey", "White", "No other colors", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const colors = pieces.map((p) => p.color).slice().sort();
      const required = ["Blue", "Grey", "Silver", "White"];
      return JSON.stringify(colors) === JSON.stringify(required);
    },
  },
  {
    id: "knighted",
    name: "KNIGHTED",
    lore: "Oh, to be knighted. A curse and a blessing. Love your King, Queen, Prince and Princess beyond death.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card style is Armour"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.style === "Armour");
    },
  },
  {
    id: "divine_intervention",
    name: "DIVINE INTERVENTION",
    lore: "Statistically unlikely. Spiritually concerning.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card rarity is Legendary"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.rarity === "Legendary");
    },
  },
  {
    id: "pearl_saint",
    name: "PEARL SAINT",
    lore: "Softness developed a defence mechanism.",
    requirementsText: ["Pearl Cuirass equipped", "Pearl Skirt equipped", "Pearl Boots or Pearl Heels equipped", "One additional White or Silver Bag/Accessory equipped", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      if (!achHasName(pieces, "Pearl Cuirass")) return false;
      if (!achHasName(pieces, "Pearl Skirt")) return false;
      if (!achHasAnyName(pieces, ["Pearl Boots", "Pearl Heels"])) return false;
      return achSome(pieces, (p) => ["Bag", "Accessory"].includes(p.category) && ["White", "Silver"].includes(p.color));
    },
  },
  {
    id: "after_midnight",
    name: "AFTER MIDNIGHT",
    lore: "The city looks different when everyone sensible has gone home.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card is Black", "At least 3 different categories represented"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.color === "Black") && achDistinctCategories(pieces) >= 3;
    },
  },
  {
    id: "flower_offering",
    name: "FLOWER OFFERING",
    lore: "Leave it somewhere beautiful. Do not wait to see who collects it.",
    requirementsText: ["A Flower Basket bag equipped (Iconic, Pink or White)", "At least 1 Romantic Top", "At least 1 Romantic Bottom", "Flower Janes or another Sweet shoe equipped", "Exactly 4 equipped cards", "At least 3 distinct colors in the outfit"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const bagOk = achHasAnyName(pieces, ["Flower Basket (Iconic)", "Flower Basket (Pink)", "Flower Basket (White)"]);
      const topOk = achSome(pieces, (p) => p.category === "Top" && p.style === "Romantic");
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && p.style === "Romantic");
      const shoesOk = achHasName(pieces, "Flower Janes") || achSome(pieces, (p) => p.category === "Shoes" && p.style === "Sweet");
      return bagOk && topOk && bottomOk && shoesOk && achDistinctColors(pieces) >= 3;
    },
  },
  {
    id: "dressed_to_kill",
    name: "DRESSED TO KILL",
    lore: "A practical look for an impractical amount of danger.",
    requirementsText: ["At least 1 Armour Top", "At least 1 Daring Bottom", "Moto Boots, Combat Boots or an Armour shoe equipped", "At least 1 Red Bag or Accessory", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const topOk = achSome(pieces, (p) => p.category === "Top" && p.style === "Armour");
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && p.style === "Daring");
      const shoesOk = achHasAnyName(pieces, ["Moto Boots", "Combat Boots"]) || achSome(pieces, (p) => p.category === "Shoes" && p.style === "Armour");
      const redOk = achSome(pieces, (p) => ["Bag", "Accessory"].includes(p.category) && p.color === "Red");
      return topOk && bottomOk && shoesOk && redOk;
    },
  },
  {
    id: "something_borrowed",
    name: "SOMETHING BORROWED",
    lore: "Something borrowed. Something buried.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card is White", "At least 1 Romantic card", "At least 1 Armour card", "At least 1 Elegant card"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const whiteOk = achEvery(pieces, (p) => p.color === "White");
      return whiteOk && achSome(pieces, (p) => p.style === "Romantic") && achSome(pieces, (p) => p.style === "Armour") && achSome(pieces, (p) => p.style === "Elegant");
    },
  },
  {
    id: "rich_and_deceased",
    name: "RICH & DECEASED",
    lore: "Death is no excuse to look inexpensive.",
    requirementsText: ["At least 1 Legendary Top, Bottom or Dress", "At least 1 Elegant shoe", "At least 1 Elegant Bag", "At least 1 Gold Accessory", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const legendaryOk = achSome(pieces, (p) => ["Top", "Bottom", "Dress"].includes(p.category) && p.rarity === "Legendary");
      const shoeOk = achSome(pieces, (p) => p.category === "Shoes" && p.style === "Elegant");
      const bagOk = achSome(pieces, (p) => p.category === "Bag" && p.style === "Elegant");
      const accOk = achSome(pieces, (p) => p.category === "Accessory" && p.color === "Gold");
      return legendaryOk && shoeOk && bagOk && accOk;
    },
  },
  {
    id: "beautiful_corpse",
    name: "BEAUTIFUL CORPSE",
    lore: "Anatomically questionable. Impeccably accessorised.",
    requirementsText: ["Skeleton Dress equipped", "At least 1 Elegant shoe", "At least 1 Elegant Bag or Accessory", "Every equipped card is Black or Silver", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      if (!achHasName(pieces, "Skeleton Dress")) return false;
      const shoeOk = achSome(pieces, (p) => p.category === "Shoes" && p.style === "Elegant");
      const bagAccOk = achSome(pieces, (p) => ["Bag", "Accessory"].includes(p.category) && p.style === "Elegant");
      const colorsOk = achEvery(pieces, (p) => ["Black", "Silver"].includes(p.color));
      return shoeOk && bagAccOk && colorsOk;
    },
  },
];

const RESTRICTED_PHASES = {
  castle: [
    "The guards glance at you as you approach, then look away.",
    "The guards look faintly annoyed this time. One mutters something to the other.",
    "They ignore you completely now. Not even a glance.",
    "\u201CYou need to leave,\u201D one guard says, not unkindly. \u201CNow.\u201D",
  ],
  // garden's 4-phase cycle is superseded by nightgardenOpen()'s pure seasonal
  // gate (see renderGarden()) — kept here only so restrictedPhase.garden
  // doesn't need to be scrubbed from old state, never read anymore.
  garden: [
    "The gate is locked. No sign, no explanation.",
    "You notice movement behind the hedges. Or maybe not.",
    "A faint smell of something blooming drifts over the wall. You still can't get in.",
    "Whatever's in there, it's not ready for visitors. Not yet.",
  ],
};

const MANNEQUIN_PUZZLES = {
  "1-spring": {
    mode: "TEXT_RIDDLE",
    note: "Something old. Something new. Something borrowed. Something ____.",
    matches: (c) => c.color === "Blue",
    afterSolving: "\u2019Til death do us part. Or life. One of them.",
  },
  "1-summer": {
    mode: "TEXT_RIDDLE",
    note: "I am not alive, but I grow. I have no lungs, but I need air.",
    matches: (c) => c.color === "Red",
    afterSolving: "There is a fire burning not far from here.",
  },
  "1-autumn": {
    mode: "COMPLETE_ROW",
    lockedIds: [316, 434, 310], // Floral Top (Top) / Spring Skirt (Bottom) / Flower Basket Iconic (Bag)
    requiredCategory: "Dress",
    matches: (c) => c.style === "Romantic" && c.category === "Dress",
    afterSolving: "The mannequin looks pleased. Somehow.",
  },
  "1-winter": {
    mode: "COMPLETE_ROW",
    lockedIds: [30, 409, 320], // Vivien Corset (Top) / Green Pouch (Bag) / Fluffy Leather (Jacket)
    requiredCategory: "Shoes",
    matches: (c) => c.style === "Cool" && c.category === "Shoes",
    afterSolving: "Cool. Apparently literally.",
  },
  "2-spring": {
    mode: "TEXT_RIDDLE",
    note: "Everyone wants to become me. Once everybody does, I cease to exist.",
    matches: (c) => c.rarity === "Rare",
    afterSolving: "Funny how exclusivity works.",
  },
  "2-summer": {
    mode: "COMPLETE_ROW",
    // Named explicitly in the spec -- Moon Earrings is intentionally
    // "Elegant" style, not "Armour"; it's here only to fill the Accessory
    // slot visually. Do not retag it.
    lockedIds: [338, 341, 418], // Moon Cuirass (Top) / Moon Pants (Bottom) / Moon Earrings (Accessory)
    requiredCategory: "Shoes",
    matches: (c) => c.style === "Armour" && c.category === "Shoes",
    afterSolving: "In the end, it didn't protect him from either, did it?",
  },
  "2-autumn": {
    mode: "COMPLETE_ROW",
    // Rarity ladder only -- no category requirement, per spec.
    lockedIds: [40, 39, 323], // Slip Dress (Basic) -> Ruffled Maxiskirt (Uncommon) -> Green Corset (Rare)
    requiredCategory: null,
    matches: (c) => c.rarity === "Iconic",
    afterSolving: "Up you go.",
  },
  "2-winter": {
    mode: "COMPLETE_ROW",
    // The only COMPLETE_ROW puzzle with accompanying flavor text -- shown as
    // a caption above the row, not a solvable riddle (mode stays COMPLETE_ROW).
    flavorCaption: "Everyone's final outfit.",
    lockedIds: [31, 360, 402], // Corset Top (Top) / Rose Skirt (Bottom) / Croc Bag Black (Bag)
    requiredCategory: "Shoes",
    matches: (c) => c.color === "Black" && c.category === "Shoes",
    afterSolving: "There are no funerals here.",
  },
};

const OLD_QUARTER_OBSERVATIONS = {
  "1-spring": [
    "Someone has planted flowers in every crack in the pavement. Nobody knows who.",
    "The flower shop has put out a sign: PLEASE STOP ASKING IF THE FLOWERS ARE DEAD.",
    "The Old Quarter smells faintly of rain and perfume.",
    "Three windows have flower boxes. Two contain flowers.",
    "A handwritten sign says SPRING SALE. The shop behind it has been abandoned for eighty years.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "1-summer": [
    "Every window in the Old Quarter is open. Somehow, you still haven't seen anyone living upstairs.",
    "A cat is asleep in the middle of the street. Everyone is walking around it.",
    "The stone walls are warm from the sun. The shadows aren't.",
    "Somewhere nearby, something is burning. Nobody seems particularly concerned.",
    "Someone has left a chair in the middle of the street. It is occupied by a cat.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "1-autumn": [
    "Dead leaves collect in the gutters. Best not to think too hard about where they came from.",
    "The Old Quarter looks good in autumn. It knows.",
    "Someone has put candles in every second window.",
    "A black cat follows you for three streets. On the fourth, it's grey.",
    "The wind sends a newspaper chasing you down the street. You lose.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "1-winter": [
    "Someone has knitted tiny scarves for the stone gargoyles.",
    "Snow has covered most of the street signs. Nobody seems inconvenienced.",
    "Someone has swept the snow from the pavement in front of a shop that hasn't opened in years.",
    "A single pair of footprints crosses the square and stops in the middle.",
    "Every chimney is smoking. You have never seen anyone buy firewood.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-spring": [
    "The flowers are back in the pavement cracks. Different colors this year.",
    "The flower shop has replaced last year's sign. This one just says: YES, THEY'RE REAL.",
    "Someone has tied ribbons around the old street lamps. Nobody has taken responsibility.",
    "A tiny table has appeared outside a closed shop. There is tea on it. Still warm.",
    "The gargoyles have lost their winter scarves. One is still wearing a hat.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-summer": [
    "Someone has dragged a piano into the street. Nobody is playing it.",
    "The fountain is full of flower petals and three Moon Coins. You leave the coins where they are.",
    "A shopkeeper is arguing with a cat. The cat appears to be winning.",
    "The heat has warped an old CLOSED sign until it almost reads COLD.",
    "Somewhere nearby, glass breaks. A moment later someone applauds.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-autumn": [
    "The candles are back in the windows. This year, every third one is blue.",
    "A pile of leaves moves against the wind. A cat emerges looking offended.",
    "Someone has chalked arrows onto the pavement. They point in a circle.",
    "The expensive boutique is still closed. The display has changed.",
    "For a second, you could swear one of the mannequins in an upstairs window moved.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-winter": [
    "Someone has knitted new scarves for the stone gargoyles. One of them is wearing yours better than you would.",
    "The snow is untouched except for a trail of cat prints leading straight into a wall.",
    "A wreath hangs on the door of the abandoned boutique. It wasn't there yesterday.",
    "The street lamps flicker on one by one as you walk past them.",
    "A snowman stands at the end of the street. Yesterday there were two.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
};

const OLD_QUARTER_ENCOUNTERS = {
  "1-spring": [
    {
      id: "juniper_octavia_y1",
      eligible: () => metOctavia && !seenOldQuarterEncounters["juniper_octavia_y1"],
      render: () => renderOldQuarterEncounterLines("juniper_octavia_y1", [
        { who: "NARRATION", t: "Juniper and Octavia are standing outside the flower shop." },
        { who: "NARRATION", t: "They're deep in conversation." },
        { who: "NARRATION", t: "You take a few steps closer." },
        { who: "NARRATION", t: "They both stop talking." },
        { who: "YOU", t: "Hi?" },
        { who: "JUNIPER", t: "Hi!" },
        { who: "OCTAVIA", t: "Hello." },
        { who: "NARRATION", t: "Silence." },
        { who: "YOU", t: "Did I interrupt something?" },
        { who: "JUNIPER", t: "No." },
        { who: "OCTAVIA", t: "Yes." },
        { who: "NARRATION", t: "Juniper looks at her." },
        { who: "OCTAVIA", t: "What?" },
        { who: "NARRATION", t: "They don't continue until you've walked away." },
      ]),
    },
    {
      id: "margo_juniper_plant_y1",
      eligible: () => !seenOldQuarterEncounters["margo_juniper_plant_y1"],
      render: () => renderOldQuarterEncounterLines("margo_juniper_plant_y1", [
        { who: "NARRATION", t: "Juniper is holding a small potted plant. Margo is inspecting it like evidence." },
        { who: "MARGO", t: "Too much water." },
        { who: "JUNIPER", t: "It rained." },
        { who: "MARGO", t: "Plants don't care whose fault it was." },
        { who: "YOU", t: "Is it dying?" },
        { who: "JUNIPER", t: "No." },
        { who: "MARGO", t: "Not anymore." },
        { who: "NARRATION", t: "Margo takes the plant." },
        { who: "JUNIPER", t: "You said you didn't want it." },
        { who: "MARGO", t: "I changed my mind." },
        { who: "NARRATION", t: "Juniper smiles. Margo notices." },
        { who: "MARGO", t: "Don't." },
      ]),
    },
  ],
  "1-summer": [
    {
      id: "holly_icecream_y1",
      eligible: () => !seenOldQuarterEncounters["holly_icecream_y1"],
      render: () => renderOldQuarterEncounterLines("holly_icecream_y1", [
        { who: "NARRATION", t: "Holly is sitting on the edge of a fountain, eating an ice cream." },
        { who: "YOU", t: "Didn't expect to see you doing that." },
        { who: "HOLLY", t: "Eating?" },
        { who: "YOU", t: "Enjoying yourself." },
        { who: "NARRATION", t: "She looks at the ice cream." },
        { who: "HOLLY", t: "It's adequate." },
        { who: "YOU", t: "What flavor?" },
        { who: "HOLLY", t: "Vanilla." },
        { who: "NARRATION", t: "Of course it is." },
      ]),
    },
    {
      id: "juniper_ivy_ride_y1",
      eligible: () => !seenOldQuarterEncounters["juniper_ivy_ride_y1"],
      render: () => renderOldQuarterEncounterLines("juniper_ivy_ride_y1", [
        { who: "NARRATION", t: "Ivy's bike is parked by the fountain." },
        { who: "NARRATION", t: "Juniper is standing beside it with both hands on her knees." },
        { who: "YOU", t: "Are you okay?" },
        { who: "JUNIPER", t: "Yes." },
        { who: "IVY", t: "She's fine." },
        { who: "JUNIPER", t: "I briefly saw the entire city sideways." },
        { who: "IVY", t: "You said faster." },
        { who: "JUNIPER", t: "I panicked." },
        { who: "IVY", t: "You said it twice." },
        { who: "NARRATION", t: "Juniper straightens up." },
        { who: "JUNIPER", t: "Could we do it again?" },
        { who: "NARRATION", t: "Ivy grins." },
      ]),
    },
  ],
  "1-autumn": [
    {
      id: "margo_judging_y1",
      eligible: () => !seenOldQuarterEncounters["margo_judging_y1"],
      render: () => renderOldQuarterEncounterLines("margo_judging_y1", [
        { who: "NARRATION", t: "Margo is looking through the window of a very expensive-looking boutique." },
        { who: "YOU", t: "It's closed." },
        { who: "MARGO", t: "I know." },
        { who: "YOU", t: "Then what are you doing?" },
        { who: "MARGO", t: "Judging." },
      ]),
    },
    {
      id: "margo_ivy_delivery_y1",
      eligible: () => !seenOldQuarterEncounters["margo_ivy_delivery_y1"],
      render: () => renderOldQuarterEncounterLines("margo_ivy_delivery_y1", [
        { who: "NARRATION", t: "Ivy hands Margo a narrow parcel wrapped in brown paper." },
        { who: "MARGO", t: "You're late." },
        { who: "IVY", t: "I'm dead. My schedule opened up." },
        { who: "MARGO", t: "And yet." },
        { who: "IVY", t: "You want the parcel or the apology?" },
        { who: "MARGO", t: "The parcel." },
        { who: "IVY", t: "Good. I didn't bring the other one." },
        { who: "NARRATION", t: "Margo checks the wrapping." },
        { who: "MARGO", t: "Your left brake is catching." },
        { who: "NARRATION", t: "Ivy stops." },
        { who: "IVY", t: "No, it isn't." },
        { who: "MARGO", t: "Fine." },
        { who: "NARRATION", t: "Ivy looks back at the bike." },
      ]),
    },
  ],
  "1-winter": [
    {
      id: "ivy_bike_y1",
      eligible: () => !seenOldQuarterEncounters["ivy_bike_y1"],
      render: () => renderOldQuarterIvyBikeScene(),
    },
    {
      id: "helena_juliette_offduty_y1",
      eligible: () => metHelena && metJuliette && !seenOldQuarterEncounters["helena_juliette_offduty_y1"],
      render: () => renderOldQuarterEncounterLines("helena_juliette_offduty_y1", [
        { who: "NARRATION", t: "Helena and Juliette are sitting on the steps outside a closed shop, sharing a paper bag of something fried." },
        { who: "NARRATION", t: "They both stand when they see you." },
        { who: "YOU", t: "You can sit." },
        { who: "NARRATION", t: "Juliette sits." },
        { who: "NARRATION", t: "Helena remains standing." },
        { who: "JULIETTE", t: "She's bad at this." },
        { who: "HELENA", t: "At what?" },
        { who: "JULIETTE", t: "Not being at work." },
        { who: "NARRATION", t: "Helena slowly sits down." },
      ]),
    },
  ],
  "2-spring": [
    {
      // Continuity: if the Y1 scene was missed, play it now instead of the
      // Y2 follow-up; once Y1 is caught up, a later visit plays the real Y2 scene.
      id: "juniper_octavia_y2_slot",
      eligible: () => metOctavia && !seenOldQuarterEncounters["juniper_octavia_y2"],
      render: () => {
        if (!seenOldQuarterEncounters["juniper_octavia_y1"]) {
          renderOldQuarterEncounterLines("juniper_octavia_y1", [
            { who: "NARRATION", t: "Juniper and Octavia are standing outside the flower shop." },
            { who: "NARRATION", t: "They're deep in conversation." },
            { who: "NARRATION", t: "You take a few steps closer." },
            { who: "NARRATION", t: "They both stop talking." },
            { who: "YOU", t: "Hi?" },
            { who: "JUNIPER", t: "Hi!" },
            { who: "OCTAVIA", t: "Hello." },
            { who: "NARRATION", t: "Silence." },
            { who: "YOU", t: "Did I interrupt something?" },
            { who: "JUNIPER", t: "No." },
            { who: "OCTAVIA", t: "Yes." },
            { who: "NARRATION", t: "Juniper looks at her." },
            { who: "OCTAVIA", t: "What?" },
            { who: "NARRATION", t: "They don't continue until you've walked away." },
          ]);
          return;
        }
        renderOldQuarterEncounterLines("juniper_octavia_y2", [
          { who: "NARRATION", t: "Juniper and Octavia are outside the flower shop again." },
          { who: "NARRATION", t: "This time they notice you before you notice them." },
          { who: "NARRATION", t: "They stop talking." },
          { who: "YOU", t: "Again?" },
          { who: "JUNIPER", t: "Again what?" },
          { who: "YOU", t: "Whatever this is." },
          { who: "OCTAVIA", t: "A conversation." },
          { who: "YOU", t: "Clearly." },
          { who: "JUNIPER", t: "You make it sound suspicious." },
          { who: "NARRATION", t: "Octavia looks at Juniper." },
          { who: "OCTAVIA", t: "It is a little suspicious." },
          { who: "NARRATION", t: "Juniper sighs." },
        ]);
      },
    },
    {
      id: "juniper_holly_repairs_y2",
      eligible: () => !seenOldQuarterEncounters["juniper_holly_repairs_y2"],
      render: () => renderOldQuarterEncounterLines("juniper_holly_repairs_y2", [
        { who: "NARRATION", t: "Holly is tightening a loose hinge on a flower stand while Juniper holds the screws." },
        { who: "YOU", t: "Do you work here now?" },
        { who: "HOLLY", t: "No." },
        { who: "JUNIPER", t: "She said it was badly constructed." },
        { who: "HOLLY", t: "It was." },
        { who: "JUNIPER", t: "Then she found tools." },
        { who: "HOLLY", t: "They were inadequate." },
        { who: "NARRATION", t: "Juniper hands her another screw." },
        { who: "JUNIPER", t: "You've been here an hour." },
        { who: "HOLLY", t: "The hinge was worse than I thought." },
      ]),
    },
  ],
  "2-summer": [
    {
      // Continuity: no catch-up for this one -- if Y1 vanilla was missed,
      // this slot simply isn't eligible and an observation is used instead.
      id: "holly_pistachio_y2",
      eligible: () => !!seenOldQuarterEncounters["holly_icecream_y1"] && !seenOldQuarterEncounters["holly_pistachio_y2"],
      render: () => renderOldQuarterEncounterLines("holly_pistachio_y2", [
        { who: "NARRATION", t: "Holly is sitting by the fountain again." },
        { who: "NARRATION", t: "She is eating ice cream." },
        { who: "YOU", t: "Vanilla?" },
        { who: "HOLLY", t: "Pistachio." },
        { who: "NARRATION", t: "You stare at her." },
        { who: "HOLLY", t: "People change." },
        { who: "YOU", t: "This feels significant." },
        { who: "HOLLY", t: "It isn't." },
      ]),
    },
    {
      id: "ivy_holly_bike_question_y2",
      eligible: () => !seenOldQuarterEncounters["ivy_holly_bike_question_y2"],
      render: () => renderOldQuarterEncounterLines("ivy_holly_bike_question_y2", [
        { who: "NARRATION", t: "Holly is standing beside Ivy's bike, studying it with alarming concentration." },
        { who: "IVY", t: "No." },
        { who: "HOLLY", t: "I didn't ask anything." },
        { who: "IVY", t: "You were going to." },
        { who: "NARRATION", t: "Holly looks at the bike." },
        { who: "HOLLY", t: "How fast?" },
        { who: "NARRATION", t: "Ivy grins." },
        { who: "IVY", t: "There it is." },
        { who: "HOLLY", t: "That wasn't permission." },
        { who: "IVY", t: "Didn't say it was." },
      ]),
    },
  ],
  "2-autumn": [
    {
      // Continuity: has a Y1 catch-up, same pattern as juniper_octavia_y2_slot.
      id: "margo_judging_y2_slot",
      eligible: () => !seenOldQuarterEncounters["margo_judging_y2"],
      render: () => {
        if (!seenOldQuarterEncounters["margo_judging_y1"]) {
          renderOldQuarterEncounterLines("margo_judging_y1", [
            { who: "NARRATION", t: "Margo is looking through the window of a very expensive-looking boutique." },
            { who: "YOU", t: "It's closed." },
            { who: "MARGO", t: "I know." },
            { who: "YOU", t: "Then what are you doing?" },
            { who: "MARGO", t: "Judging." },
          ]);
          return;
        }
        renderOldQuarterEncounterLines("margo_judging_y2", [
          { who: "NARRATION", t: "Margo is standing in front of the same expensive boutique." },
          { who: "YOU", t: "Still closed." },
          { who: "MARGO", t: "Obviously." },
          { who: "YOU", t: "Still judging?" },
          { who: "MARGO", t: "They changed the display." },
          { who: "YOU", t: "Better?" },
          { who: "MARGO", t: "Worse." },
          { who: "NARRATION", t: "She looks genuinely offended." },
        ]);
      },
    },
    {
      id: "margo_holly_rules_y2",
      eligible: () => !seenOldQuarterEncounters["margo_holly_rules_y2"],
      render: () => renderOldQuarterEncounterLines("margo_holly_rules_y2", [
        { who: "NARRATION", t: "Margo and Holly are standing beneath an old street sign." },
        { who: "MARGO", t: "It used to mean something else." },
        { who: "HOLLY", t: "The rule?" },
        { who: "MARGO", t: "The street." },
        { who: "HOLLY", t: "Things change." },
        { who: "MARGO", t: "Rules change." },
        { who: "HOLLY", t: "Principles shouldn't." },
        { who: "NARRATION", t: "Margo looks at her for a moment." },
        { who: "MARGO", t: "That's a very expensive way to live." },
        { who: "HOLLY", t: "I know." },
      ]),
    },
  ],
  "2-winter": [
    {
      // Continuity: no catch-up -- if Y1 bike scene was missed, use an
      // observation instead (per the doc, unlike the other two Y2 follow-ups).
      id: "ivy_pickup_y2",
      eligible: () => !!seenOldQuarterEncounters["ivy_bike_y1"] && !seenOldQuarterEncounters["ivy_pickup_y2"],
      render: () => renderOldQuarterEncounterLines("ivy_pickup_y2", [
        { who: "NARRATION", t: "Ivy's bike is parked in almost the same place as last winter." },
        { who: "NARRATION", t: "This time you keep a respectful distance." },
        { who: "NARRATION", t: "Mostly." },
        { who: "NARRATION", t: "Ivy comes out of the building carrying nothing." },
        { who: "YOU", t: "Delivery?" },
        { who: "IVY", t: "Pickup." },
        { who: "YOU", t: "You're not carrying anything." },
        { who: "IVY", t: "Exactly." },
        { who: "NARRATION", t: "She swings onto the bike." },
        { who: "YOU", t: "That explained absolutely nothing." },
        { who: "IVY", t: "Good." },
        { who: "NARRATION", t: "She leaves." },
      ]),
    },
    {
      id: "margo_juniper_winter_plant_y2",
      eligible: () => !seenOldQuarterEncounters["margo_juniper_winter_plant_y2"],
      render: () => renderOldQuarterEncounterLines("margo_juniper_winter_plant_y2", [
        { who: "NARRATION", t: "Juniper is showing Margo a tiny green shoot growing from a cracked stone planter." },
        { who: "JUNIPER", t: "It shouldn't be growing." },
        { who: "MARGO", t: "You've said that before." },
        { who: "JUNIPER", t: "It's winter." },
        { who: "MARGO", t: "Still dead." },
        { who: "JUNIPER", t: "That's not how plants work." },
        { who: "MARGO", t: "Not how you remember them working." },
        { who: "NARRATION", t: "Juniper goes quiet." },
        { who: "NARRATION", t: "Margo crouches beside the plant." },
        { who: "MARGO", t: "Bring me a cutting when it's stronger." },
        { who: "JUNIPER", t: "You want one?" },
        { who: "MARGO", t: "For research." },
        { who: "NARRATION", t: "Juniper smiles." },
        { who: "MARGO", t: "Don't." },
      ]),
    },
  ],
};

const MAYA_FIRST_SCENE = [
  { who: "MAYA", t: "You're the stylist." },
  { who: "YOU", t: "How do you know?" },
  { who: "MAYA", t: "Look at you." },
  { who: "YOU", t: "What's that supposed to mean?" },
  { who: "MAYA", t: "Exactly what you're worried it means." },
];

const MAYA_AMBIENT = [
  [{ who: "MAYA", t: "Holly was here yesterday." }, { who: "YOU", t: "She comes here?" }, { who: "MAYA", t: "Everyone comes here eventually." }],
  // MAYA_AMB_02 is flavor only — no Ivy debt quest or Moon Coin transfer.
  [{ who: "MAYA", t: "Ivy owes me three Moon Coins." }, { who: "YOU", t: "For what?" }, { who: "MAYA", t: "Ask her." }, { who: "NARRATION", t: "Maya goes back to her drink." }],
  [{ who: "MAYA", t: "The Castle's busy tonight." }, { who: "YOU", t: "How can you tell?" }, { who: "MAYA", t: "Helena hasn't been in for six days." }],
  [{ who: "MAYA", t: "Octavia likes you." }, { who: "YOU", t: "She does?" }, { who: "MAYA", t: "Probably." }, { who: "YOU", t: "That's reassuring." }, { who: "MAYA", t: "It shouldn't be." }],
  [{ who: "YOU", t: "Do you always sit here?" }, { who: "MAYA", t: "No." }, { who: "YOU", t: "I've only ever seen you here." }, { who: "MAYA", t: "Then your sample size is poor." }],
  [{ who: "YOU", t: "What are you drinking?" }, { who: "MAYA", t: "Something you don't like." }, { who: "YOU", t: "You don't know that." }, { who: "MAYA", t: "I know enough." }],
];

const MAYA_ATTIC_HINT_SCENE = [
  { who: "MAYA", t: "You've never been upstairs." },
  { who: "YOU", t: "There's an upstairs?" },
  { who: "MAYA", t: "Apparently not for you." },
  { who: "YOU", t: "What's up there?" },
  { who: "MAYA", t: "Dust." },
  { who: "NARRATION", t: "She looks toward the ceiling." },
  { who: "MAYA", t: "Mostly." },
  { who: "YOU", t: "How do I get in?" },
  { who: "MAYA", t: "With a key." },
  { who: "YOU", t: "Helpful." },
  { who: "MAYA", t: "Last person I saw carrying it was a Castle guard." },
  { who: "YOU", t: "Helena?" },
  { who: "MAYA", t: "No." },
];

const MAYA_PHOTO_REACTION = [
  { who: "YOU", t: "I found this upstairs." },
  { who: "NARRATION", t: "Maya takes the faded photograph. She looks at it longer than you expected." },
  { who: "YOU", t: "That's you." },
  { who: "MAYA", t: "Looks like me." },
  { who: "YOU", t: "And Juliette." },
  { who: "MAYA", t: "Looks like her." },
  { who: "YOU", t: "When was this taken?" },
  { who: "NARRATION", t: "Maya hands it back." },
  { who: "MAYA", t: "You ask very expensive questions." },
];

const MAYA_BACKROOM_REACTION = [
  { who: "YOU", t: "I found the room behind the Café." },
  { who: "NARRATION", t: "Maya takes a sip." },
  { who: "MAYA", t: "Did you." },
  { who: "YOU", t: "You knew." },
  { who: "MAYA", t: "Obviously." },
  { who: "YOU", t: "Why didn't you tell me?" },
  { who: "MAYA", t: "You found it." },
  { who: "YOU", t: "That's not an answer." },
  { who: "MAYA", t: "It wasn't a question worth answering." },
];

const CAFE_BACK_DOOR_LINES = [
  { who: "NARRATION", t: "At the far end of the Café, behind a stack of empty crates, is a narrow door." },
  { who: "NARRATION", t: "You are certain it was there before." },
  { who: "NARRATION", t: "You are less certain why you never noticed it." },
];

const ATTIC_FIRST_SCENE = [
  { who: "NARRATION", t: "The attic is disappointingly ordinary." },
  { who: "NARRATION", t: "Boxes. Old chairs. Menus tied with string. Coats nobody came back for." },
  { who: "NARRATION", t: "A painted Café sign leans against the wall. Same name. Different lettering." },
  { who: "NARRATION", t: "It looks decades older than the sign downstairs." },
  { who: "NARRATION", t: "On top of a box is a faded photograph." },
];

const ATTIC_PHOTO_TAKEN_LINES = [
  { who: "NARRATION", t: "Two women are standing outside the Café." },
  { who: "NARRATION", t: "One looks like Maya." },
  { who: "NARRATION", t: "The other looks like Juliette." },
  { who: "NARRATION", t: "There is no date." },
];

const ATTIC_MENUS_SCENE = [
  { who: "NARRATION", t: "A stack of old menus has been tied with black ribbon." },
  { who: "NARRATION", t: "Prices change from page to page. The drinks barely do." },
  { who: "NARRATION", t: "One order appears over and over in the margins in the same handwriting." },
  { who: "NARRATION", t: "It is the drink Maya is usually holding downstairs." },
];

const ATTIC_COAT_SCENE = [
  { who: "NARRATION", t: "An old black staff coat hangs behind a wardrobe." },
  { who: "NARRATION", t: "Inside the lining is a small embroidered crest." },
  { who: "NARRATION", t: "It matches the crest on the Night Castle gate." },
];

const ATTIC_REPEAT_POOL = [
  { id: "dust", t: "Dust moves in the light from the small window. Nothing else has changed." },
  { id: "guestbook", t: "An old guestbook lies open on a table. Several pages have been torn out." },
  { id: "frame", t: "An empty frame has been placed face-down on a box." },
  { id: "lostproperty", t: "Something is caught beneath a pile of old coats." },
];

const QUARTETT_OPPONENTS = {
  maya: {
    name: "Maya",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_maya.png",
    fallbackBg: "#2c2432",
    pool: () => DECK.filter((c) => ["Cool", "Minimal", "Classic"].includes(c.style)),
    lines: {
      intro: [
        [{ who: "MAYA", t: "Cards. Sit." }],
        [{ who: "YOU", t: "Best of five?" }, { who: "MAYA", t: "If you last that long." }],
      ],
      roundOpponentWins: ["Mm.", "Predictable.", "As expected."],
      roundPlayerWins: ["Lucky.", "Fine.", "Noted."],
      roundDraw: ["Boring.", "That helped no one."],
      matchPlayerWin: [[
        { who: "MAYA", t: "Take it." },
        { who: "NARRATION", t: "She slides a card across the table without looking up." },
        { who: "MAYA", t: "I wasn't using it." },
      ]],
      matchPlayerLoss: [[
        { who: "MAYA", t: "Again?" }, { who: "YOU", t: "No." }, { who: "MAYA", t: "Smart." },
      ]],
      matchDraw: [[
        { who: "MAYA", t: "A draw." }, { who: "MAYA", t: "How diplomatic of us." },
      ]],
    },
  },
  margo: {
    name: "Margo",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_margo.png",
    fallbackBg: "#2a2a2a",
    // Hidden preferences: Black, Red, Elegant, Classic, Fitted, Bold.
    pool: () => DECK.filter((c) => ["Elegant", "Classic", "Bold"].includes(c.style) || ["Black", "Red"].includes(c.color)),
    lines: {
      intro: [
        [{ who: "MARGO", t: "You want to play cards with me." }, { who: "YOU", t: "Is that a problem?" }, { who: "MARGO", t: "Only for you." }],
        [{ who: "MARGO", t: "Sit. Lose gracefully." }],
      ],
      roundOpponentWins: ["Obviously.", "Predictable.", "I taught you nothing, apparently."],
      roundPlayerWins: ["Fine.", "Don't gloat.", "Acceptable."],
      roundDraw: ["How dull.", "Nobody wins that. Ever."],
      matchPlayerWin: [[
        { who: "MARGO", t: "Take it." },
        { who: "NARRATION", t: "She pushes a card across the table like it's beneath her." },
        { who: "MARGO", t: "Don't get used to that." },
      ]],
      matchPlayerLoss: [[
        { who: "MARGO", t: "Again?" }, { who: "YOU", t: "Maybe later." }, { who: "MARGO", t: "Wise, for once." },
      ]],
      matchDraw: [[
        { who: "MARGO", t: "A draw." }, { who: "MARGO", t: "Unsatisfying. Like beige." },
      ]],
    },
  },
  juniper: {
    name: "Juniper",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_juniper.png",
    fallbackBg: "#3a4433",
    // Hidden preferences: Green, Romantic, Cozy, Sweet, Relaxed.
    pool: () => DECK.filter((c) => ["Romantic", "Cozy", "Sweet"].includes(c.style) || c.color === "Green"),
    lines: {
      intro: [
        [{ who: "JUNIPER", t: "Cards? Sure." }, { who: "YOU", t: "You know the rules?" }, { who: "JUNIPER", t: "I know plants better." }],
        [{ who: "JUNIPER", t: "Okay. Be gentle with me." }],
      ],
      roundOpponentWins: ["Oh. That one was mine.", "Lucky soil.", "Hm. Good."],
      roundPlayerWins: ["Oh well.", "That's alright.", "You got that one."],
      roundDraw: ["Neither of us, then.", "Like we split a pot."],
      matchPlayerWin: [[
        { who: "JUNIPER", t: "Here." },
        { who: "NARRATION", t: "She slides a card over, a little pleased despite losing." },
        { who: "JUNIPER", t: "It suits you more than me anyway." },
      ]],
      matchPlayerLoss: [[
        { who: "JUNIPER", t: "Sorry." }, { who: "YOU", t: "You don't sound sorry." }, { who: "JUNIPER", t: "I'm working on it." },
      ]],
      matchDraw: [[
        { who: "JUNIPER", t: "A tie." }, { who: "JUNIPER", t: "Very balanced. Very boring." },
      ]],
    },
  },
  ivy: {
    name: "Ivy",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_ivy.png",
    fallbackBg: "#4a2530",
    // Hidden preferences: Black, Cool, Daring, Bold, Relaxed.
    pool: () => DECK.filter((c) => ["Cool", "Daring", "Bold"].includes(c.style) || c.color === "Black"),
    lines: {
      intro: [
        [{ who: "IVY", t: "Cards. Finally, something I'm good at." }, { who: "YOU", t: "Confident." }, { who: "IVY", t: "Always." }],
        [{ who: "IVY", t: "Don't cry when you lose." }],
      ],
      roundOpponentWins: ["Told you.", "Easy.", "Was that supposed to be hard?"],
      roundPlayerWins: ["Huh. Fine.", "Beginner's luck.", "Don't let it go to your head."],
      roundDraw: ["Boring. Rematch that one.", "That doesn't count."],
      matchPlayerWin: [[
        { who: "IVY", t: "Ugh. Fine." },
        { who: "NARRATION", t: "She flicks a card across the table." },
        { who: "IVY", t: "Don't tell anyone I lost." },
      ]],
      matchPlayerLoss: [[
        { who: "IVY", t: "Good game." }, { who: "YOU", t: "You didn't even look at your cards." }, { who: "IVY", t: "Didn't need to." },
      ]],
      matchDraw: [[
        { who: "IVY", t: "A draw?" }, { who: "IVY", t: "That's the least satisfying thing that's ever happened to me." },
      ]],
    },
  },
  holly: {
    name: "Holly",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_holly.png",
    fallbackBg: "#33404a",
    // Hidden preferences: Silver, White, Blue, Classic, Minimal, Regular, Armour.
    pool: () => DECK.filter((c) => ["Classic", "Minimal", "Armour"].includes(c.style) || ["Silver", "White", "Blue"].includes(c.color)),
    lines: {
      intro: [
        [{ who: "HOLLY", t: "A game of cards." }, { who: "YOU", t: "Yes." }, { who: "HOLLY", t: "Very well. I do not lose often." }],
        [{ who: "HOLLY", t: "State the rules. I will not ask twice." }],
      ],
      roundOpponentWins: ["As expected.", "Discipline.", "Correct."],
      roundPlayerWins: ["Noted.", "Adequate.", "Hm."],
      roundDraw: ["A stalemate. Acceptable."],
      matchPlayerWin: [[
        { who: "HOLLY", t: "Take it." },
        { who: "NARRATION", t: "She sets the card down with exact, unnecessary precision." },
        { who: "HOLLY", t: "You earned it. Barely." },
      ]],
      matchPlayerLoss: [[
        { who: "HOLLY", t: "You fought well." }, { who: "YOU", t: "I lost." }, { who: "HOLLY", t: "That is not the same thing." },
      ]],
      matchDraw: [[
        { who: "HOLLY", t: "Neither of us yielded." }, { who: "HOLLY", t: "I respect that." },
      ]],
    },
  },
};

const QUARTETT_LOCKED_LINE = [
  { who: "NARRATION", t: "You've used your hands for the month." }, { who: "NARRATION", t: "Come back when the month turns." },
];

const OCT_FIRST_SCENE = [
  { who: "NARRATION", t: "A woman is standing beside a bed of pale flowers. You are fairly certain she was not there when you entered." },
  { who: "OCTAVIA", t: "You're early." },
  { who: "YOU", t: "For what?" },
  { who: "OCTAVIA", t: "I don't know yet." },
  { who: "YOU", t: "That's not very reassuring." },
  { who: "OCTAVIA", t: "It wasn't meant to be." },
];

const OCTAVIA_AMBIENT = [
  [{ who: "OCTAVIA", t: "The garden doesn't like winter." }, { who: "YOU", t: "Gardens usually don't." }, { who: "OCTAVIA", t: "This one takes it personally." }],
  [{ who: "OCTAVIA", t: "You came back." }, { who: "YOU", t: "You sound surprised." }, { who: "OCTAVIA", t: "I'm not." }],
  [{ who: "YOU", t: "What are you doing?" }, { who: "OCTAVIA", t: "Waiting." }, { who: "YOU", t: "For?" }, { who: "OCTAVIA", t: "Spring." }, { who: "YOU", t: "It is spring." }, { who: "NARRATION", t: "Octavia looks around." }, { who: "OCTAVIA", t: "Not here." }],
  [{ who: "YOU", t: "Do you live here?" }, { who: "OCTAVIA", t: "No." }, { who: "YOU", t: "You're always here." }, { who: "OCTAVIA", t: "Those are different things." }],
  [{ who: "NARRATION", t: "Octavia is tying a strip of white fabric around a dead branch." }, { who: "YOU", t: "What does that do?" }, { who: "OCTAVIA", t: "Nothing." }, { who: "YOU", t: "Then why do it?" }, { who: "OCTAVIA", t: "Not everything needs a job." }],
];

const OCT_SACRIFICE_INTRO_LINES = [
  { who: "NARRATION", t: "Octavia is sitting on the edge of an empty planter. She looks at your card case rather than at you." },
  { who: "OCTAVIA", t: "You brought too much with you." },
  { who: "YOU", t: "Too much what?" },
  { who: "OCTAVIA", t: "Things." },
  { who: "YOU", t: "That clears it up." },
  { who: "OCTAVIA", t: "Leave one." },
  { who: "YOU", t: "Here?" },
  { who: "OCTAVIA", t: "Gone." },
];

const GH_FIRST_LINES = [
  { who: "NARRATION", t: "Most of the roof is cracked. Dead vines hang from the iron ribs of the Glass House." },
  { who: "NARRATION", t: "A long worktable runs beneath the windows. Rusted scissors. Empty bottles. Labels faded white." },
  { who: "NARRATION", t: "In the center planter, every plant is dead except one." },
  { who: "NARRATION", t: "A single chair faces the garden." },
  { who: "NARRATION", t: "Something silver has been left across its back." },
];

const GH_OCTAVIA_SCENE = [
  { who: "NARRATION", t: "Octavia is cutting dead leaves from a plant." },
  { who: "YOU", t: "I thought this place was abandoned." },
  { who: "OCTAVIA", t: "It is." },
  { who: "YOU", t: "You're in it." },
  { who: "OCTAVIA", t: "So are you." },
  { who: "YOU", t: "Was the veil yours?" },
  { who: "OCTAVIA", t: "No." },
  { who: "YOU", t: "Then whose was it?" },
  { who: "OCTAVIA", t: "It remembers her." },
];

const GH_JULIETTE_CLUE_LINES = [
  { who: "NARRATION", t: "A broken pane has been propped open with a curved piece of silver metal." },
  { who: "NARRATION", t: "You've seen that shape before." },
  { who: "NARRATION", t: "It matches the edge of Juliette's armour." },
];

const GH_CULTIVATE_UNLOCK_LINES = [
  { who: "NARRATION", t: "Octavia has cleared one of the empty planters." },
  { who: "OCTAVIA", t: "You can leave something here now." },
  { who: "YOU", t: "Another card?" },
  { who: "OCTAVIA", t: "If you want something else later." },
  { who: "YOU", t: "What grows?" },
  { who: "OCTAVIA", t: "Depends what you bury." },
];

const GH_REPEAT_POOL = [
  { id: "nothing", weight: 30, t: "The Glass House is exactly as you left it. Somehow that feels less reassuring than change would." },
  { id: "flower", weight: 30, t: "A pale flower has opened in the central planter. By the time you touch the leaf, it has already begun to close." },
  { id: "chair", weight: 30, t: "The chair is facing the opposite direction today." },
  { id: "rarefind", weight: 10, t: "Something catches beneath one of the worktables." },
];

const THORN_VEIL = {
  id: 500, name: "Thorn Veil", category: "Accessory", fit: "Regular", style: "Romantic", color: "Silver",
  rarity: "Rare", lore: "Metal thorns twisted into something strangely delicate.", storyCard: true,
};

const CASTLE_GUARDS_FIRST_SCENE = [
  { who: "HELENA", t: "Castle's closed." },
  { who: "NARRATION", t: "The second guard does not look at you. Her eyes stay fixed somewhere beyond the street." },
  { who: "YOU", t: "I gathered that." },
  { who: "HELENA", t: "Good." },
  { who: "YOU", t: "Is she okay?" },
  { who: "NARRATION", t: "Helena glances at the woman beside her." },
  { who: "HELENA", t: "She's Juliette." },
  { who: "NARRATION", t: "Juliette does not react." },
];

const HELENA_AMBIENT = [
  [{ who: "HELENA", t: "Castle's closed." }, { who: "YOU", t: "It was closed yesterday." }, { who: "HELENA", t: "Excellent memory." }],
  [{ who: "YOU", t: "Do you ever get bored standing here?" }, { who: "HELENA", t: "Yes." }, { who: "YOU", t: "That's it?" }, { who: "HELENA", t: "You asked a yes-or-no question." }],
  [{ who: "YOU", t: "What's happening inside?" }, { who: "HELENA", t: "Things that are inside." }, { who: "YOU", t: "You're impossible." }, { who: "HELENA", t: "And yet you keep visiting." }],
  [{ who: "YOU", t: "Do you ever get a day off?" }, { who: "HELENA", t: "Yes." }, { who: "YOU", t: "What do you do?" }, { who: "HELENA", t: "Don't stand at gates." }],
  [{ who: "YOU", t: "Does anyone actually get through here?" }, { who: "HELENA", t: "Yes." }, { who: "YOU", t: "Me?" }, { who: "HELENA", t: "No." }],
  [{ who: "YOU", t: "You know, most places put up a sign." }, { who: "HELENA", t: "Most people understand a closed gate." }],
];

const JULIETTE_AMBIENT = [
  [{ who: "YOU", t: "Hello, Juliette." }, { who: "NARRATION", t: "A long pause." }, { who: "JULIETTE", t: "Hello." }],
  [{ who: "YOU", t: "Do you like working here?" }, { who: "NARRATION", t: "Juliette keeps looking toward the street." }, { who: "JULIETTE", t: "I work here." }],
  [{ who: "YOU", t: "Do you ever leave?" }, { who: "JULIETTE", t: "Sometimes." }, { who: "YOU", t: "Where do you go?" }, { who: "NARRATION", t: "Pause." }, { who: "JULIETTE", t: "Back." }],
  [{ who: "YOU", t: "How long have you been a guard?" }, { who: "NARRATION", t: "A long pause." }, { who: "JULIETTE", t: "Long enough." }],
  [{ who: "YOU", t: "Are you listening to me?" }, { who: "JULIETTE", t: "Yes." }, { who: "YOU", t: "You didn't look at me." }, { who: "JULIETTE", t: "I heard you." }],
];

const JUL_SHIFT_END_SCENE = [
  { who: "HELENA", t: "Your shift ended." },
  { who: "NARRATION", t: "Juliette does not move." },
  { who: "HELENA", t: "Juliette." },
  { who: "NARRATION", t: "Juliette slowly turns her head toward Helena." },
  { who: "JULIETTE", t: "Right." },
  { who: "NARRATION", t: "She walks away without saying goodbye. Helena resumes facing the street." },
];

const JULIETTE_ATTIC_KEY_SCENE = [
  { who: "YOU", t: "Maya said you had a key for the Café." },
  { who: "NARRATION", t: "Juliette does not answer." },
  { who: "YOU", t: "The attic." },
  { who: "NARRATION", t: "She reaches beneath the edge of her armour and pulls out an old brass key." },
  { who: "NARRATION", t: "She stares at it for several seconds." },
  { who: "JULIETTE", t: "I forgot." },
  { who: "YOU", t: "Forgot what?" },
  { who: "NARRATION", t: "Juliette puts the key in your hand." },
  { who: "JULIETTE", t: "Why I had it." },
  { who: "YOU", t: "You don't want it?" },
  { who: "JULIETTE", t: "I had it." },
  { who: "NARRATION", t: "Her attention returns to the street." },
];

const HELENA_PHOTO_REACTION = [
  { who: "NARRATION", t: "Helena looks at the photograph." },
  { who: "HELENA", t: "Where did you get this?" },
  { who: "YOU", t: "Café attic." },
  { who: "NARRATION", t: "She gives it back." },
  { who: "HELENA", t: "Don't bring everything you find to Juliette." },
  { who: "YOU", t: "Why?" },
  { who: "HELENA", t: "Because I asked you not to." },
];

const JULIETTE_PHOTO_REACTION = [
  { who: "YOU", t: "Do you recognize this?" },
  { who: "NARRATION", t: "Juliette looks at the photograph." },
  { who: "NARRATION", t: "A long pause." },
  { who: "JULIETTE", t: "I don't like that dress." },
  { who: "YOU", t: "That's what you noticed?" },
  { who: "NARRATION", t: "Juliette gives the photograph back." },
];

const VALERY_FIRST_EXIT_SCENE = [
  { who: "HELENA", t: "No." },
  { who: "VALERY", t: "That wasn't a question." },
  { who: "HELENA", t: "It was an attempted exit." },
  { who: "VALERY", t: "Exactly." },
  { who: "NARRATION", t: "Valery notices you." },
  { who: "VALERY", t: "Oh. Stylist." },
  { who: "YOU", t: "Are you escaping?" },
  { who: "VALERY", t: "Don't make it sound cheap." },
  { who: "HELENA", t: "She's escaping." },
  { who: "VALERY", t: "Helena has no respect for presentation." },
];

const VALERY_AMBIENT = [
  [{ who: "VALERY", t: "Do you know what the worst thing about a gate is?" }, { who: "YOU", t: "That it's closed?" }, { who: "VALERY", t: "That someone always thinks they're in charge of it." }, { who: "HELENA", t: "I am in charge of it." }],
  [{ who: "VALERY", t: "You should come to the Royal Quarter sometime." }, { who: "HELENA", t: "She shouldn't." }, { who: "VALERY", t: "See? This is why invitations are so exhausting." }],
  [{ who: "YOU", t: "Do you ever walk anywhere without making it an event?" }, { who: "VALERY", t: "Why would I waste the walk?" }],
];

const HELENA_VIRTUAL = {
  name: "Helena", color: "#8ea9c1",
  preferences: [pref("color", "Silver"), pref("style", "Armour"), pref("style", "Classic"), pref("style", "Minimal"), pref("fit", "Regular")],
};

const JULIETTE_VIRTUAL = {
  name: "Juliette", color: "#5a5a66",
  preferences: [pref("color", "Silver"), pref("style", "Armour")], // ONLY these two count for Juliette
};

const GUARD_BRIEF = { want: [req("color", "Silver"), req("style", "Armour")] };

const GUARD_STYLE_REQUEST_SCENE = [
  { who: "HELENA", t: "We need a stylist." },
  { who: "YOU", t: "That sounded dangerously close to asking for my help." },
  { who: "HELENA", t: "Don't make me regret it." },
  { who: "YOU", t: "What's the occasion?" },
  { who: "HELENA", t: "Ceremony." },
  { who: "YOU", t: "For what?" },
  { who: "HELENA", t: "The kind you're not invited to." },
  { who: "NARRATION", t: "Juliette continues staring past the gate." },
  { who: "HELENA", t: "Silver. Armour. For both of us." },
  { who: "YOU", t: "Anything else?" },
  { who: "HELENA", t: "For me? Make it look intentional." },
  { who: "YOU", t: "And Juliette?" },
  { who: "NARRATION", t: "Juliette's gaze does not move." },
  { who: "JULIETTE", t: "Silver. Armour." },
];

const JUL_THORN_REACTION_LINES = [
  { who: "NARRATION", t: "Juliette's hand stops on the Thorn Veil." },
  { who: "NARRATION", t: "For the first time, she looks directly at you." },
  { who: "JULIETTE", t: "Where did you find this?" },
  { who: "YOU", t: "The Glass House." },
  { who: "NARRATION", t: "Her fingers close around one of the metal thorns." },
  { who: "JULIETTE", t: "It's still there." },
  { who: "HELENA", t: "Juliette." },
  { who: "NARRATION", t: "Juliette looks away. The moment is gone." },
];

const VALERY_KEY_FALLBACK_SCENE = [
  { who: "NARRATION", t: "Valery is waiting on the wrong side of the gate, which appears to be causing Helena personal offense." },
  { who: "VALERY", t: "You." },
  { who: "YOU", t: "Me." },
  { who: "VALERY", t: "I decided you need another chance to impress me." },
  { who: "YOU", t: "That's very noble of you." },
  { who: "VALERY", t: "It isn't." },
  { who: "NARRATION", t: "She drops a delicate gold key into your hand." },
  { who: "VALERY", t: "The Royal Garden. Don't embarrass me." },
  { who: "HELENA", t: "You are not supposed to give those away." },
  { who: "VALERY", t: "Then it's fortunate I only gave away one." },
];

const FESTIVAL_REACTIONS = {
  flowerFest: {
    helena: [{ who: "NARRATION", t: "Fresh ribbons have been tied through the Night Castle gate. Helena is cutting one loose with a small knife." }, { who: "HELENA", t: "If one more person ties flowers to government property, I'm arresting the flowers." }],
    juliette: [{ who: "NARRATION", t: "A pink ribbon has caught on Juliette's shoulder plate." }, { who: "YOU", t: "You have something on you." }, { who: "JULIETTE", t: "I know." }, { who: "NARRATION", t: "She does not remove it." }],
    maya: [{ who: "MAYA", t: "Flower Fest makes everyone briefly convinced they're interesting." }, { who: "YOU", t: "And you don't like it?" }, { who: "MAYA", t: "I like the flowers." }],
    octavia: [{ who: "OCTAVIA", t: "They cut too many this year." }, { who: "YOU", t: "The flowers?" }, { who: "OCTAVIA", t: "They notice." }],
    valery: [{ who: "VALERY", t: "Flower Fest is charming from a balcony." }, { who: "YOU", t: "And from the street?" }, { who: "VALERY", t: "Sticky." }],
  },
  summerSolstice: {
    helena: [{ who: "HELENA", t: "Solstice means twice the guests and half the common sense." }, { who: "YOU", t: "You love it." }, { who: "HELENA", t: "Immensely." }],
    juliette: [{ who: "YOU", t: "Do you like Solstice?" }, { who: "JULIETTE", t: "It happens every year." }, { who: "YOU", t: "That's not what I asked." }, { who: "JULIETTE", t: "I know." }],
    maya: [{ who: "MAYA", t: "The Royal Quarter has been polishing itself for a week." }, { who: "YOU", t: "Are you going?" }, { who: "MAYA", t: "I prefer parties I can leave." }],
    octavia: [{ who: "OCTAVIA", t: "Longest day." }, { who: "YOU", t: "You sound unhappy about it." }, { who: "OCTAVIA", t: "The garden prefers the dark." }],
    valery: [{ who: "VALERY", t: "Solstice is the one night everyone tries terribly hard to look effortless." }, { who: "YOU", t: "Including you?" }, { who: "VALERY", t: "Especially me." }],
  },
  moonFest: {
    helena: [{ who: "NARRATION", t: "Someone has placed a black mask over one of the Castle statues." }, { who: "HELENA", t: "I'm leaving it there." }, { who: "YOU", t: "You approve?" }, { who: "HELENA", t: "I'm tired." }],
    juliette: [{ who: "YOU", t: "Everyone's wearing masks tonight." }, { who: "JULIETTE", t: "They do every year." }, { who: "YOU", t: "Do you?" }, { who: "JULIETTE", t: "No." }],
    maya: [{ who: "MAYA", t: "Moon Fest is useful." }, { who: "YOU", t: "For what?" }, { who: "MAYA", t: "People tell the truth when they think a mask makes them someone else." }],
    valery: [{ who: "VALERY", t: "Moon Fest used to have better masks." }, { who: "YOU", t: "How can a mask be better?" }, { who: "VALERY", t: "If you have to ask, yours isn't." }],
  },
  winterSolstice: {
    helena: [{ who: "HELENA", t: "Quiet night." }, { who: "YOU", t: "Is that good?" }, { who: "HELENA", t: "Ask me after midnight." }],
    juliette: [{ who: "YOU", t: "Everyone seems different during Winter Solstice." }, { who: "JULIETTE", t: "They're colder." }, { who: "YOU", t: "That's all?" }, { who: "JULIETTE", t: "Mostly." }],
    maya: [{ who: "MAYA", t: "Winter Solstice is the only time this Café pretends to close early." }, { who: "YOU", t: "Does it?" }, { who: "MAYA", t: "No." }],
    valery: [{ who: "VALERY", t: "Winter Solstice is better indoors." }, { who: "YOU", t: "Because it's warmer?" }, { who: "VALERY", t: "Because everyone looks expensive in candlelight." }],
  },
};

const RG_REPEAT_POOL = [
  { id: "empty", t: "The Garden is empty. Somewhere beyond the wall, a door closes." },
  { id: "delivery", t: "A sealed garment box has been left beside the fountain." },
  { id: "roses", t: "You find a fallen petal. It is the first imperfect thing you have seen here." },
  { id: "lostaccessory", t: "Something silver is caught beneath the hedge." },
];

const VALERY_MICRO_MATCH = { colors: ["Gold", "Pink"], styles: ["Elegant", "Romantic", "Bold"] };

const SECONDARY_PORTRAITS = {
  helena: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_helena.png",
  juliette: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_juliette.png",
  maya: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_maya.png",
  octavia: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_octavia.png",
  valery: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_valery.png",
};

const SECONDARY_PORTRAIT_ORDER = ["helena", "juliette", "maya", "octavia", "valery"];

const EVENT_SCHEDULE = {
  "2-2": "flowerFestComing", "3-2": "flowerFest",
  "5-2": "summerSolstice", "6-2": "royalQuarter",
  "8-2": "moonChanging", "9-2": "moonFest",
  "10-2": "firstSnow",
  "11-1": "winterSolstice", "11-2": "deadDay",
};

const EVENT_SCREENS = {
  flowerFestComing: {
    lines: ["Overnight, flowers have appeared across After City.", "Around lamp posts.", "Across balconies.", "Through cracks in the pavement.", "You're fairly certain some of those cracks weren't there yesterday."],
    button: "Continue",
  },
  flowerFest: {
    lines: ["For three days, After City smells like somewhere else.", "Flowers cover the streets.", "Couples fill the caf\u00e9s.", "Someone has tied approximately four thousand ribbons to the Night Castle gates.", "The guards do not appear amused."],
    button: "Enter Flower Fest",
  },
  summerSolstice: {
    lines: ["Summer Solstice has arrived.", "White banners stretch across the Royal Quarter.", "Tables appear in streets you aren't allowed to enter.", "Invitations have been arriving all week.", "Yours has not.", "Apparently that's normal."],
    button: "Continue",
  },
  royalQuarter: {
    lines: ["Music carries across After City long after midnight.", "From the Studio window, you can see lights above the Royal Quarter.", "Then\u2014", "every light goes out.", "One.", "Two.", "Three.", "The lights return.", "The next morning, no one mentions it."],
    button: "Back to Aftercity",
  },
  moonChanging: {
    lines: ["Orange lanterns have appeared above the streets.", "Shop windows are filling with masks.", "The Night Caf\u00e9 has extended its opening hours from \u201clate\u201d to \u201cdon't ask.\u201d", "Moon Fest is coming."],
    button: "Continue",
  },
  moonFest: {
    lines: ["The dead celebrate many things.", "Tonight, they celebrate being dead.", "After City stays awake until morning."],
    button: "Enter Moon Fest",
  },
  firstSnow: {
    lines: ["You wake to find After City completely white.", "By noon, every caf\u00e9 is full.", "By evening, tiny lights have appeared in almost every window.", "Yours is the only dark one."],
    button: "Continue",
  },
  firstDay: {
    lines: ["The door closes behind your first client.", "For someone with nowhere left to be, she seemed remarkably busy.", "Outside, After City continues without you.", "Somewhere in the distance, a bell rings three times."],
    button: "Back to After City",
  },
  winterSolstice: {
    lines: ["After City becomes quieter during Winter Solstice.", "Doors close earlier.", "Tables move closer together.", "People wear their finest things underneath very large coats.", "The Nightgarden is closed until further notice."],
    button: "Continue",
  },
  deadDay: {
    lines: ["The final day of the year belongs to the newest dead.", "No fireworks.", "No parade.", "No royal invitations.", "After City simply remembers.", "Candles appear outside doors.", "Names are written on scraps of paper and left beneath them.", "Nobody tells you whose names they are."],
    button: "Continue",
  },
};

const EVENT_BONUSES = {
  flowerFest: { styles: ["Romantic"], colors: ["Pink", "Red", "Green"] },
  summerSolstice: { styles: ["Classic"], colors: ["White", "Blue"] },
  moonFest: { styles: ["Daring", "Bold"], colors: ["Purple", "Black"] },
  firstSnow: { categories: ["Jacket"], styles: ["Cozy"] },
  winterSolstice: { styles: ["Cozy"], rarities: ["Rare", "Iconic", "Legendary"] },
};

const EVENT_LABELS = { flowerFest: "Flower Fest", summerSolstice: "Summer Solstice", moonFest: "Moon Fest", firstSnow: "First Snow", winterSolstice: "Winter Solstice" };

const VALERY_VIRTUAL = {
  name: "Valery", color: "#c9a15a",
  preferences: [pref("color", "Gold"), pref("color", "Pink"), pref("style", "Elegant"), pref("style", "Romantic"), pref("style", "Bold"), pref("fit", "Fitted")],
};

const VALERY_SOLSTICE_BRIEF = { want: [req("style", "Elegant"), req("style", "Classic")] };

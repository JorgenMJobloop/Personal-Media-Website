const removeButton = document.getElementById("remove-text");
let textEl1 = document.getElementById("text-el-1");
let textEl2 = document.getElementById("text-el-2");
let textEl3 = document.getElementById("text-el-3");
let textEl4 = document.getElementById("text-el-4");
/*
    Docstring:
        I'm sure there is an easier way of doing this, I have just not learned it yet.
        I hardcoded the textContent variables as I noticed that my images would display 
        the text as intended when clicked, however, it would only display below picture one(twin peaks.)
        so to fix this I just hardcoded each <p> tag instead.
*/
let textDescription = [
  `Twin Peaks is one of my all time favorite television series, it
follows Agent Dale Cooper as he travels to the fictional town of Twin
Peaks in Washington, USA.\n\r There to investigate the murder of the prom queen
Laura Palmer, Cooper soon dives deep into supernatural mysteries
and small town intrigues.`,
  `Arrested Development is an incredibly funny somewhat dark comedy that
  follows an upper class American family.\n\r As the patriarch of the family
  is thrown into prison on embasselment, fraud and corruption charges.
  We follow the family as they struggle to adapt to the new reality of
  everyday life withouth luxury.\r\n The series is meta-narrated by Ron
  Howard and often uses irony and more subtle hinting toward running
  gags about serious topics like wealth, class resentment, rascism,
  corruption, treason, homosexuality and dysfunctional family
  relationships.`,
  `Neon Genesis Evangelion is hard to write a synopsis about, it is one
  of those types of media where it just grips you when you first view
  it.\n\r The series explores some very dark themes like mental illness,
  deep depression, child abondment, sexuality, sprituality, violence and
  sexual violence aswell as axiety over inevitable doom. It is a great
  piece of media but should be viewed with caution.`,
  `Tekken is a Japanese video game & media series created by Seiichi Ishii & Katsuhiro Harada.
  It is a fairly straightforward fighting game, however, it was
  along with Virtua Fighter one of the first 3D-based fighting games to be released in the late
  1990s. And that helped pioneer the 3D-fighter genre.`,
];
/*
    Using an array to store template strings that contains several keywords 
    and commas, I noticed that without template literals, the array
    would give me syntax errors as it picked up reserved language
    keywords.
*/

function removeText() {
  textEl1.textContent = "";
  textEl2.textContent = "";
  textEl3.textContent = "";
  textEl4.textContent = "";
}

function displayText(values) {
  if (values === 1) {
    textEl1.textContent = textDescription[0];
  }
  if (values === 2) {
    textEl2.textContent = textDescription[1];
  }
  if (values === 3) {
    textEl3.textContent = textDescription[2];
  }
  if (values === 4) {
    textEl4.textContent = textDescription[3];
  }
}

console.log("DEBUG");

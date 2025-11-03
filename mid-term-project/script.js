const story = {
    start: {
        text: "You wake up in Pallet Town. Professor Oak calls you to his lab to choose your first Pokémon. Which one will you pick?",
        choices: [
            { text: "Charmander", next: "charmanderPath" },
            { text: "Squirtle", next: "squirtlePath" },
            { text: "Bulbasaur", next: "bulbasaurPath" }
        ],
        image: "https://wallpapers.com/images/featured/pokemon-pictures-fw1l53kqy2o4e5p1.jpg"
    },

    // --- Charmander Path ---
    charmanderPath: {
        text: "You choose Charmander! A fiery companion indeed. On your first route, a wild Pidgey appears!",
        choices: [
            { text: "Battle it!", next: "pidgeyBattle" },
            { text: "Ignore it and move on", next: "trainerChallenge" }
        ],
        image: "https://pre00.deviantart.net/9081/th/pre/f/2016/110/c/8/004_charmander_by_tzblacktd-d9znzei.png"
    },
    pidgeyBattle: {
        text: "Charmander defeats Pidgey easily! You gain experience. A mysterious trainer approaches.",
        choices: [
            { text: "Battle the trainer", next: "winChampion" },
            { text: "Run away", next: "lostForest" }
        ],
        image: "https://www.pngplay.com/wp-content/uploads/11/Pidgey-Pokemon-PNG-HD-Quality.png"
    },

    // --- Squirtle Path ---
    squirtlePath: {
        text: "You choose Squirtle! You head toward Viridian River, where a Magikarp splashes nearby.",
        choices: [
            { text: "Catch Magikarp", next: "magikarpCatch" },
            { text: "Keep training Squirtle", next: "teamRocket" }
        ],
        image: "https://tse1.mm.bing.net/th/id/OIP.ueZQHsPA98t_y-7Wl88pdQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    magikarpCatch: {
        text: "You catch Magikarp! But suddenly Team Rocket appears to steal your Pokémon!",
        choices: [
            { text: "Battle Team Rocket", next: "teamRocketWin" },
            { text: "Escape quietly", next: "escapePeacefully" }
        ],
        image: "https://www.pngmart.com/files/22/Magikarp-Pokemon-PNG-Clipart.png"
    },

    // --- Bulbasaur Path ---
    bulbasaurPath: {
        text: "You choose Bulbasaur! In Viridian Forest, you encounter a wild Pikachu.",
        choices: [
            { text: "Try to catch Pikachu", next: "catchPikachu" },
            { text: "Walk past quietly", next: "forestLost" }
        ],
        image: "https://tse1.mm.bing.net/th/id/OIP.XU3osTrtSuP1qldnc-m22gHaNK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    catchPikachu: {
        text: "You caught Pikachu! Now your team is stronger. Professor Oak calls you for a special mission.",
        choices: [
            { text: "Accept the mission", next: "savePokemon" },
            { text: "Ignore the call", next: "lazyEnding" }
        ],
        image: "https://tse2.mm.bing.net/th/id/OIP.dvAnwdjqIXDO3ZdgFzMDMQHaHz?rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    // --- Endings ---
    winChampion: {
        text: "You defeat the trainer and go on to become Pokémon League Champion! 🏆",
        choices: [],
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/pokemon-champions-logo.jpg"
    },
    lostForest: {
        text: "You run into the forest and get lost forever. Your adventure ends here...",
        choices: [],
        image: "https://i.ytimg.com/vi/yafUXZJhi-U/maxresdefault.jpg"
    },
    teamRocketWin: {
        text: "You defeat Team Rocket and save your Pokémon! The town celebrates your victory!",
        choices: [],
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/Team-Rocket.jpg"
    },
    escapePeacefully: {
        text: "You escape safely and live a peaceful life with Squirtle by the river.",
        choices: [],
        image: "https://m.media-amazon.com/images/I/41mD1twl4EL._AC_SL1100_.jpg"
    },
    savePokemon: {
        text: "You stop Team Rocket’s lab experiment and free hundreds of Pokémon. You are hailed as a true hero!",
        choices: [],
        image: "https://images6.fanpop.com/image/photos/40500000/Pok-mon-Heroes-pokemon-guys-40518108-500-712.jpg"
    },
    lazyEnding: {
        text: "You stay home and sleep all day. The Pokémon world moves on without you.",
        choices: [],
        image: "https://www.phoneworld.com.pk/wp-content/uploads/2023/07/pokemon-sleep.jpg"
    },
    forestLost: {
        text: "A Beedrill swarm chases you away! You flee and never return to the forest again.",
        choices: [],
        image: "https://tse1.mm.bing.net/th/id/OIP.oIE0QpWtQ1kyMcKiJ0C-igHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
};

// --- Functions ---
function startGame() {
    showStoryPart("start");
}

function showStoryPart(partKey) {
    const part = story[partKey];
    const storyDiv = document.getElementById("story");
    const choicesDiv = document.getElementById("choices");
    const storyImage = document.getElementById("story-image");

    storyDiv.textContent = part.text;
    storyImage.src = part.image;
    choicesDiv.innerHTML = "";

    if (part.choices.length === 0) {
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart Adventure";
        restartBtn.onclick = startGame;
        choicesDiv.appendChild(restartBtn);
        return;
    }

    part.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => showStoryPart(choice.next));
        choicesDiv.appendChild(button);
    });
}

window.onload = startGame;

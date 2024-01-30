document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const quoteContainer = document.querySelector('.quote-container');

    const backgrounds = {
        "inspirational": "url('images/inspirational_background.jpg')",
        "motivational": "url('images/motivational_background.jpg')",
        "love": "url('images/love_background.jpg')",
        "wisdom": "url('images/wisdom_background.png')",
        "courage": "url('images/courage_background.jpg')",
        "happiness": "url('images/happiness_background.jpg')"
    };

    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "In the midst of chaos, there is also opportunity.",
            author: "Sun Tzu"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            quote: "You have to dream before your dreams can come true.",
            author: "A. P. J. Abdul Kalam"
        },
        {
            quote: "Be the change that you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            quote: "The best way to find yourself is to lose yourself in the service of others.",
            author: "Mahatma Gandhi"
        },
        {
            quote: "Arise, awake and stop not until the goal is reached.",
            author: "Swami Vivekananda"
        },
        {
            quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
            author: "Confucius"
        },
        {
            quote: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        },
        {
            quote: "The purpose of our lives is to be happy.",
            author: "Dalai Lama"
        },
        {
            quote: "The secret of happiness is freedom, the secret of freedom is courage.",
            author: "Carrie Jones"
        },
        {
            quote: "Your limitation—it's only your imagination.",
            author: "Unknown"
        },
        {
            quote: "Push yourself, because no one else is going to do it for you.",
            author: "Unknown"
        },
        {
            quote: "Courage is resistance to fear, mastery of fear—not absence of fear.",
            author: "Mark Twain"
        },
        {
            quote: "It takes courage to grow up and become who you really are.",
            author: "E.E. Cummings"
        },
        {
            quote: "The purpose of our lives is to be happy.",
            author: "Dalai Lama"
        },
        {
            quote: "The secret of happiness is freedom, the secret of freedom is courage.",
            author: "Carrie Jones"
        },
        {
            quote: "Happiness is not something ready-made. It comes from your own actions.",
            author: "Dalai Lama"
        },
        {
            quote: "Be happy for this moment. This moment is your life.",
            author: "Omar Khayyam"
        },
        {
            quote: "Your limitation—it's only your imagination.",
            author: "Unknown"
        },
        {
            quote: "Push yourself, because no one else is going to do it for you.",
            author: "Unknown"
        },
        {
            quote: "The only way to achieve the impossible is to believe it is possible.",
            author: "Charles Kingsleigh"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston S. Churchill"
        },
        {
            quote: "Courage is resistance to fear, mastery of fear—not absence of fear.",
            author: "Mark Twain"
        },
        {
            quote: "It takes courage to grow up and become who you really are.",
            author: "E.E. Cummings"
        },
        {
            quote: "You can't be brave if you've only had wonderful things happen to you.",
            author: "Mary Tyler Moore"
        },
        {
            quote: "Courage is found in unlikely places.",
            author: "J.R.R. Tolkien"
        },
        
        {
            quote: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky"
        },
        {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            quote: "It always seems impossible until it's done.",
            author: "Nelson Mandela"
        }
    ];

    function analyzeTheme(quote) {
        const keywords = {
            "inspirational": ["dream", "believe", "hope", "inspire", "motivate"],
            "motivational": ["achieve", "succeed",  "determination", "perseverance"],
            "love": ["love", "heart", "romance", "passion", "affection"],
            "wisdom": ["wisdom", "knowledge", "success", "truth", "learning", "enlightenment"],
            "courage": ["courage", "bravery", "fearless", "strength", "boldness"],
            "happiness": ["happiness", "joy", "laughter", "smile", "positive"]
        };

        quote = quote.toLowerCase();
        for (let theme in keywords) {
            for (let keyword of keywords[theme]) {
                if (quote.includes(keyword)) {
                    return theme;
                }
            }
        }
        return "inspirational";
    }

    function applyBackground(theme) {
        let background = backgrounds[theme];
        document.body.style.backgroundImage = background; // Apply background to the body
    }

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteElement.innerHTML = `<div class="quote-text">${randomQuote.quote}</div><br><div class="quote-author">- ${randomQuote.author}</div>`;
        const theme = analyzeTheme(randomQuote.quote);
        applyBackground(theme);
    }

    newQuoteBtn.addEventListener('click', displayRandomQuote);

    displayRandomQuote();
});

const moviesDatabase = {
    action: ["Die Hard", "Mad Max: Fury Road", "John Wick", "The Dark Knight"],
    comedy: ["The Hangover", "Superbad", "Step Brothers", "21 Jump Street"],
    drama: ["The Shawshank Redemption", "Forrest Gump", "The Godfather", "A Beautiful Mind"],
    horror: ["The Conjuring", "Get Out", "A Quiet Place", "Hereditary"],
    romance: ["The Notebook", "La La Land", "Titanic", "Pride and Prejudice"],
};

const moodMovies = {
    happy: ["The Pursuit of Happyness", "Little Miss Sunshine", "The Secret Life of Walter Mitty"],
    sad: ["Requiem for a Dream", "Schindler's List", "The Green Mile"],
    adventurous: ["Indiana Jones", "The Hobbit", "Pirates of the Caribbean"],
    thoughtful: ["Interstellar", "Inception", "Eternal Sunshine of the Spotless Mind"],
};

function getRecommendations() {
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;

    const genreRecommendations = moviesDatabase[genre];
    const moodRecommendations = moodMovies[mood];

    const recommendedMovies = [...genreRecommendations, ...moodRecommendations];

    localStorage.setItem('recommendedMovies', JSON.stringify(recommendedMovies));

    window.location.href = "recommendations.html";
}

document.getElementById('recommend-btn').addEventListener('click', getRecommendations);

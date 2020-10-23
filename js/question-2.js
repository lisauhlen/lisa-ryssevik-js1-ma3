// Question 2

// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, 
// but only for the first eight results:
// - name
// - rating
// - number of tags (not the tag details, just the amount of tags)


// The styling for this assignment is not important but loading indicator 
// should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make 
// the call.

// Be sure to arrange all file types appropriately, consult the repos 
// from the lessons for examples.

const gamesUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".gamesContainer");

async function callGames() {
    try {
        const response = await fetch(gamesUrl);

        const results = await response.json();

        const games = results.results;

        gamesContainer.innerHTML = "";

        for(let i = 0; i < games.length; i++) {

                if(i === 8) {
                    break;
                }

            gamesContainer.innerHTML += `<div>
                                            <h3>${games[i].name}</h3>
                                            <p>Rating: ${games[i].rating}</p>
                                            <p>Number of Tags: ${games[i].tags.length}</p>
                                        </div>`;
        }
    } catch (error) {
        console.log(error);
        gamesContainer.innerHTML = "An error occured";
    }
  }
  
  callGames();
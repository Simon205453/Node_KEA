

function fetchQuest(activityQueryString=""){
    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(result => {
    document.getElementById("quest").innerText = result.activity;
});

}

fetchQuest();

function getNewQuest() {
    const dropdown = document.getElementById("activity-dropdown");
    fetchQuest(`?type=${dropdown.value}`);
    console.log(dropdown.value);
}

document.getElementById("fetch-new-quest-btn").addEventListener("click", getNewQuest);

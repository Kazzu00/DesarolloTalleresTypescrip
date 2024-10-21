import { Serie } from "./serie.js";
export const series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://illuminatilab.com/blog/wp-content/uploads/2013/10/Breaking-Bad.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://www.justwatch.com/images/poster/74106848/s718/orange-is-the-new-black.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.", "https://www.hbo.com/game-of-thrones", "https://m.media-amazon.com/images/M/MV5BOGY3NTg1ODMtOGIzZS00YWFiLTgzYzktNzBiYWZkYjcwNGRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/c8ea8e19-cae7-4683-9b62-cdbbed744784/914da85b-244a-11ef-8e04-12093494333d?host=wbd-images.prod-vod.h264.io&partner=beamcom"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://m.media-amazon.com/images/M/MV5BNTQ5NDI0MTQ0MV5BMl5BanBnXkFtZTgwNDEzNTc1NTM@._V1_.jpg")
];
const totalSeries = series.length;
const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
const averageSeasons = totalSeasons / totalSeries;
const tableBody = document.querySelector("#seriesTable tbody");
const seriesDetailCard = document.querySelector("#seriesDetailCard");
if (tableBody) {
    series.forEach((serie) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);
        const nameCell = document.createElement("td");
        nameCell.textContent = serie.name;
        row.appendChild(nameCell);
        const channelCell = document.createElement("td");
        channelCell.textContent = serie.channel;
        row.appendChild(channelCell);
        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.seasons.toString();
        row.appendChild(seasonsCell);
        tableBody.appendChild(row);
        row.addEventListener("click", () => {
            if (seriesDetailCard) {
                seriesDetailCard.innerHTML = `
                        <div class="card">
                            <img src="${serie.icon}" class="card-img-top" alt="${serie.name}">
                            <div class="card-body">
                                <h5 class="card-title">${serie.name}</h5>
                                <p class="card-text">${serie.description}</p>
                                <a href="${serie.link}" class="btn btn-primary">Más información</a>
                            </div>
                        </div>
                    `;
            }
        });
    });
    const averageRow = document.createElement("tr");
    const averageTitleCell = document.createElement("td");
    averageTitleCell.setAttribute("colspan", "3");
    averageTitleCell.textContent = "Promedio de temporadas:";
    averageRow.appendChild(averageTitleCell);
    const averageSeasonsCell = document.createElement("td");
    averageSeasonsCell.textContent = averageSeasons.toFixed(0);
    averageRow.appendChild(averageSeasonsCell);
    tableBody.appendChild(averageRow);
}

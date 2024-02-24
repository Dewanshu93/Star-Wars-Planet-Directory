let bottomContainer = document.createElement("div");
let bgContainer = document.getElementById("bgContainer");
let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");



let pageNumber = 1;
let totalPage = 6;
let url = "https://swapi.dev/api/planets/?format=json";
let options = {
    method: "GET"
};
let firstIndex = 0;
let lastIndex = 10;
bottomContainer.id = `bottomContainer${pageNumber}`;
bottomContainer.classList.add("bottom-container");
let imgObject = [
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev17yq-ce816241-f6aa-444a-94b6-7104f945e050.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MTd5cS1jZTgxNjI0MS1mNmFhLTQ0NGEtOTRiNi03MTA0Zjk0NWUwNTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XmhMzTExSOrmbu-HzPseIJ_H09JyCOV8S3UrqpE9Kfg",
    "https://img1.cgtrader.com/items/3563873/a8b0b8d988/large/star-wars-planet-pack-2-yavin-4-iv-3d-model-low-poly-rigged-blend.jpg",
    "https://i.pinimg.com/originals/82/a1/26/82a12620a1b6edc06f269b5507fb714c.png",
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg",
    "https://i.pinimg.com/474x/bb/03/ff/bb03ffb68e21b8a7b880c6fbdb32a7bb.jpg",
    "https://i.pinimg.com/474x/81/b7/40/81b740e686109c45cf86d31a894770e8.jpg",
    "https://i.pinimg.com/736x/9e/52/59/9e52599bdb1118bff89dea54a0ed3eda.jpg",
    "https://i.pinimg.com/originals/d4/69/6e/d4696e19ee90aa3fbbafe624317ee208.png",
    "https://i.pinimg.com/originals/58/6f/2a/586f2ab18e7ac9bf11a807b2516cd2a7.jpg"
];


let navbar = document.getElementById("navbar");
let gun = document.getElementById("gun");
let topContainer = document.getElementById("topContainer");
let middleContainer = document.getElementById("middleContainer");

navbar.onclick = function() {
    navbar.classList.add("turn-off");
    gun.classList.remove("turn-off");
    middleContainer.style.display = "flex";
};

gun.onclick = function() {
    navbar.classList.remove("turn-off");
    gun.classList.add("turn-off");
    middleContainer.style.display = "none";
};



function displayResidentDetail(plannetResidency, residentDetailData) {
    let horizontalLine10 = document.createElement("hr");
    plannetResidency.appendChild(horizontalLine10);

    let listItemEl = document.createElement("li");
    plannetResidency.appendChild(listItemEl);
    listItemEl.textContent = `- Name - ${residentDetailData.name}`;
    listItemEl.classList.add("plannetRotationSpeed");
    console.log(residentDetailData.name);

    let personDetail = document.createElement("ul");
    listItemEl.appendChild(personDetail);

    let personHeight = document.createElement("li");
    personDetail.appendChild(personHeight);
    personHeight.textContent = `- Height - ${residentDetailData.height}`;
    personHeight.classList.add("plannetRotationSpeed");

    let personGender = document.createElement("li");
    personDetail.appendChild(personGender);
    personGender.textContent = `- Gender - ${residentDetailData.gender}`;
    personGender.classList.add("plannetRotationSpeed");

    let personMass = document.createElement("li");
    personDetail.appendChild(personMass);
    personMass.textContent = ` - Mass - ${residentDetailData.mass}`;
    personMass.classList.add("plannetRotationSpeed");
}



function displayPlannetDetails(plannetDetails, imgObject) {
    bgContainer.appendChild(bottomContainer);
    for (let plannet = 0; plannet < plannetDetails.length; plannet++) {
        let plannetContainer = document.createElement("div");
        plannetContainer.id = "plannetContainer";
        plannetContainer.classList.add("plannetContainer");
        bottomContainer.appendChild(plannetContainer);
        plannetContainer.classList.add("plannet-container");


        let plannetImageContainer = document.createElement("img");
        plannetContainer.appendChild(plannetImageContainer);
        plannetImageContainer.src = `${imgObject[plannet]}`;
        plannetImageContainer.classList.add("plannetImageContainer");


        console.log(plannetDetails[plannet]);

        //Plannet's Name
        let plannetName = document.createElement("h1");
        plannetName.id = "plannetName";
        plannetContainer.appendChild(plannetName);
        plannetName.textContent = `${plannetDetails[plannet].name}`;
        plannetName.classList.add("plannetName");

        let horizontalLine = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine);

        //Planet Rotational Speed
        let plannetRotation = document.createElement("p");
        plannetRotation.id = 'plannetRotation';
        plannetContainer.appendChild(plannetRotation);
        plannetRotation.classList.add("plannetRotationSpeed");
        plannetRotation.textContent = `- Rotation Speed - ${plannetDetails[plannet].rotation_period}`;

        let horizontalLine1 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine1);

        //Plannet Orbital Speed
        let plannetOrbital = document.createElement("p");
        plannetOrbital.id = "plannetOrbital";
        plannetContainer.appendChild(plannetOrbital);
        plannetOrbital.classList.add("plannetRotationSpeed");
        plannetOrbital.textContent = `- Orbital Speed -${plannetDetails[plannet].orbital_period}`;

        let horizontalLine2 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine2);

        //Planet Diameter
        let plannetDiameter = document.createElement("p");
        plannetDiameter.id = "plannetDiameter";
        plannetContainer.appendChild(plannetDiameter);
        plannetDiameter.textContent = `- Diameter - ${plannetDetails[plannet].diameter}`;
        plannetDiameter.classList.add("plannetRotationSpeed");

        let horizontalLine3 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine3);
        //Planet Climate
        let plannetClimate = document.createElement("p");
        plannetClimate.id = "plannetClimate";
        plannetContainer.appendChild(plannetClimate);
        plannetClimate.textContent = `- Climate - ${plannetDetails[plannet].climate}`;
        plannetClimate.classList.add("plannetRotationSpeed");

        let horizontalLine4 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine4);

        //Planet Gravity
        let plannetGravity = document.createElement("p");
        plannetGravity.id = "plannetGravity";
        plannetContainer.appendChild(plannetGravity);
        plannetGravity.textContent = `- Gravity - ${plannetDetails[plannet].gravity}`;
        plannetGravity.classList.add("plannetRotationSpeed");

        let horizontalLine5 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine5);

        //Planet Terrain
        let plannetTerrain = document.createElement("p");
        plannetTerrain.id = "plannetTerrain";
        plannetContainer.appendChild(plannetTerrain);
        plannetTerrain.textContent = `- Terrain - ${plannetDetails[plannet].terrain}`;
        plannetTerrain.classList.add("plannetRotationSpeed");

        let horizontalLine6 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine6);

        //Planet Surface Water
        let plannetSurfaceWater = document.createElement("p");
        plannetSurfaceWater.id = "plannetSurfaceWater";
        plannetContainer.appendChild(plannetSurfaceWater);
        plannetSurfaceWater.classList.add("plannetRotationSpeed");
        plannetSurfaceWater.textContent = `- Surface Water - ${plannetDetails[plannet].surface_water}`;

        let horizontalLine7 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine7);

        //Planet population
        let plannetPopulation = document.createElement("p");
        plannetPopulation.id = "plannetPopulation";
        plannetContainer.appendChild(plannetPopulation);
        plannetPopulation.classList.add("plannetRotationSpeed");
        plannetPopulation.textContent = `- Population - ${plannetDetails[plannet].population}`;

        let horizontalLine8 = document.createElement("hr");
        plannetContainer.appendChild(horizontalLine8);

        let residentHeading = document.createElement("p");
        plannetContainer.appendChild(residentHeading);
        residentHeading.textContent = "Resident -";
        residentHeading.classList.add("plannetRotationSpeed");

        let plannetResidentDetail = plannetDetails[plannet].residents;
        let plannetResidency = document.createElement("ul");
        plannetResidency.id = "plannetResidency";
        plannetContainer.appendChild(plannetResidency);



        let plannetResidentDetailLength = plannetResidentDetail.length;
        for (let resident = 0; resident < plannetResidentDetailLength; resident++) {
            let residentDetail = plannetResidentDetail[resident];

            fetch(residentDetail, options)
                .then((response) => {
                    return response.json();
                })
                .then((jsonData) => {
                    let residentDetailData = jsonData;
                    console.log(residentDetailData);


                    displayResidentDetail(plannetResidency, residentDetailData);
                })
                .catch(error => {
                    if (error instanceof TypeError && error.message.includes('API key')) {
                        console.error('Invalid API key:', error);
                    } else {
                        console.error('There was a problem with the Fetch operation:', error);
                    }
                });

        }
        console.log(plannetResidentDetail);

    }
}

fetch(url, options)
    .then(function(resolve) {
        return resolve.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
        let plannetCount = jsonData.count;
        let pageCount = plannetCount / 10;
        console.log(pageCount);

        let nextPlannetPage = jsonData.next;

        let plannetDetails = jsonData.results;
        displayPlannetDetails(plannetDetails, imgObject);
    });

nextBtn.onclick = function() {
    bottomContainer.innerHTML = "";
    if (pageNumber === totalPage) {
        pageNumber = 1;
    } else {
        pageNumber += 1;
        bottomContainer.classList.remove("turn-off");
        bottomContainer = document.createElement("div");
        bottomContainer.id = `bottomContainer${pageNumber}`;
        bgContainer.appendChild(bottomContainer);
        bottomContainer.classList.add("bottom-container");
    }
    fetch(url, options)
        .then((resolve) => {
            return resolve.json();
        })
        .then((jsonData) => {
            url = jsonData.next;
            fetch(url, options)
                .then((response) => {
                    return response.json();
                })
                .then((newJsonData) => {
                    let newPlannetDetail = newJsonData.results;
                    displayPlannetDetails(newPlannetDetail, imgObject);
                });
        });
};
previousBtn.onclick = function() {
    if (bottomContainer.id === `bottomContainer${pageNumber}`) {
        bottomContainer.classList.add("turn-off");
    }
    if (pageNumber === 1) {
        pageNumber = 1;
        bottomContainer.classList.remove("turn-off");
        previousBtn.disabled = "true"
    } else {
        previousBtn.disabled = "false";
        pageNumber -= 1;
        bottomContainer = document.createElement("div");
        bottomContainer.id = `bottomContainer${pageNumber}`;
        bottomContainer.classList.add("bottom-container");
    }
    fetch(url, options)
        .then((resolve) => {
            return resolve.json();
        })
        .then((jsonData) => {
            url = jsonData.previous;
            if (url === null) {
                previousBtn.disabled = "true";
            } else {
                previousBtn.disabled = "false";
                fetch(url, options)
                    .then((response) => {
                        return response.json();
                    })
                    .then((preJsonData) => {
                        let previousPlannetDetails = preJsonData.results;
                        displayPlannetDetails(previousPlannetDetails, imgObject);
                    });
            }
        });
}
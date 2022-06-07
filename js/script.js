const notRegistered = document.querySelector('.not-registered');
// Fetch api data 
const getRegistrationData = async function () {
    const request = await fetch('https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json');
    const data = await request.json();
    // console.log(data);
    // Call the function below and pass it the data from the api
    displayContactList(data);
}
// Created a function to loop through data array and see registration status
const displayContactList = function (data) {

    // loop through data array
    for (const contacts of data) {

        // to see the registration data
        if(contacts.registered === 'no' ) {

            // create new list item, with their name and append to the ul
            const li = document.createElement('li');
            li.innerText = `${contacts.name}`;
            notRegistered.append(li);
        }
    }   
}

// Call the api fetch
getRegistrationData();
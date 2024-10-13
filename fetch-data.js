// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch Data Using try-catch
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the Loading Message
        dataContainer.innerHTML = ''; // Clear loading message

        // Create and Append User List
        const userList = document.createElement('ul'); // Create a <ul> element
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });
        dataContainer.appendChild(userList); // Append the <ul> to the dataContainer

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);

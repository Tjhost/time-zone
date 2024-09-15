function convertTime() {
    const myTimeZone = document.getElementById('myTimeZone').value;
    const theirTimeZone = document.getElementById('theirTimeZone').value;
    const myTime = document.getElementById('myTime').value;

    // Parse the input time with my timezone using Intl.DateTimeFormat
    const myDateTime = new Date(`2024-01-01T${myTime}`);
    
    // Format time in user's time zone
    const myTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone: myTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(myDateTime);
    
    // Convert time to their time zone
    const theirTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone: theirTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(myDateTime);

    // Display result
    document.getElementById('result').innerText = `My Time: ${myTimeInTimeZone}, Converted Time: ${theirTimeInTimeZone}`;
}

function convertTime() {
    const myTimeZone = document.getElementById('myTimeZone').value;
    const theirTimeZone = document.getElementById('theirTimeZone').value;
    const myTime = document.getElementById('myTime').value;

    fetch(`/convert?myTimeZone=${encodeURIComponent(myTimeZone)}&theirTimeZone=${encodeURIComponent(theirTimeZone)}&myTime=${myTime}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Converted Time: ${data.convertedTime}, Time Difference: ${data.timeDifference}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

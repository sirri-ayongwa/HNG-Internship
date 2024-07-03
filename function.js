document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();

        const day = now.toLocaleString('en-US', { weekday: 'long' });
        const date = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();

        // Adding ordinal suffixes to dates
        const suffixes = ["th", "st", "nd", "rd"];
        const v = date % 100;
        const ordinal = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

        // Formatting time
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const formattedDate = `${day} ${date}${ordinal} ${month}, ${year} || ${formattedTime}`;

        const dateTimeElement = document.getElementById('dateTime');
        dateTimeElement.textContent = formattedDate;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});

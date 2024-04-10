const Prayers = document.getElementById('Prayers')
const select = document.getElementById('s_conitry')
const conitry = document.getElementById('conitry')
const date = document.getElementById('date')

function getdata(time, day) {
    Prayers.innerHTML = `
        <tr>
        <td class="line" id="F">صلاة الفجر</td>
        <td>${time.Fajr}</td>
    </tr>
    <tr>
        <td class="line" id="S">الشروق</td>
        <td>${time.Sunrise}</td>
    </tr>
    <tr>
        <td class="line" id="D">صلاة الظهر</td>
        <td>${time.Dhuhr}</td>
        <td class="day">${day}</td>
    </tr>
    <tr>
        <td class="line" id="A">صلاة العصر</td>
        <td>${time.Asr}</td>
    </tr>
    <tr>
        <td class="line" id="M">صلاة المغرب</td>
        <td>${time.Maghrib}</td>
    </tr>
    <tr>
        <td class="line" id="I">صلاة العشاء</td>
        <td>${time.Isha}</td>
    </tr>`;
}



axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Amman")
    .then((result) => {
        const time = result.data.data.timings;
        const day = result.data.data.date.hijri.weekday.ar;
        date.innerHTML = `${result.data.data.date.gregorian.date} | ${result.data.data.date.gregorian.month.en}`
        getdata(time, day);
    }).catch((error) => {
        console.log(error);
    });

select.addEventListener("change", function () {
    var option = select.options[select.selectedIndex].value;

    if (option === "Amman") {
        conitry.innerHTML = 'عمان'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Amman")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "Jerash") {
        conitry.innerHTML = 'جرش'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Jerash")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "Zarqa") {
        conitry.innerHTML = 'الزرقاء'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Zarqa")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "Irbid") {
        conitry.innerHTML = 'إربد'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Irbid")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "Aqaba") {
        conitry.innerHTML = 'العقبة'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Aqaba")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "Madaba") {
        conitry.innerHTML = 'مادبا'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Madaba")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "Ma'an") {
        conitry.innerHTML = 'معان'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=Ma'an")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "al-Karak") {
        conitry.innerHTML = 'الكرك'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=al-Karak")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "ar-Rusaifa") {
        conitry.innerHTML = 'الرصيفة'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=ar-Rusaifa")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    } else if (option === "as-Salt") {
        conitry.innerHTML = 'السلط'
        axios.get("http://api.aladhan.com/v1/timingsByCity?country=JO&city=as-Salt")
            .then((result) => {
                const time = result.data.data.timings;
                const day = result.data.data.date.hijri.weekday.ar;
                getdata(time, day);
            }).catch((error) => {
                console.log(error);
            });
    }
});
var ilceSelect = document.getElementById("ilceler");
var sehirSelect = document.getElementById("sehirler");

function sehirSecildi() {
    fetch("data.json")
        .then(response => response.json())
        .then(veri => {
            let sehirler = veri.provinces;

            for (let i = 0; i < sehirler.length; i++) {
                const optioncreate = document.createElement("option");
                optioncreate.innerText = sehirler[i].name;
                sehirSelect.appendChild(optioncreate);
            }

            sehirSelect.addEventListener("change", function () {
                let selectedValue = sehirSelect.value;
                if (selectedValue) {
                    let ilceList = sehirler.find(sehir => sehir.name === selectedValue).districts;
                    if (ilceList) {
                        for (let ilce of ilceList) {
                            const ilceoption = document.createElement("option")
                            ilceoption.innerText=ilce.name
                            
                            ilceSelect.appendChild(ilceoption)
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error("Hata:", error);
        });
}

sehirSecildi();
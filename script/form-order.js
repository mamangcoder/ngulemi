var currentStep = 1;
var updateProgressBar;
function displayStep(stepNumber) {
    $(".step").hide();
    $(".step-" + stepNumber).show();
    currentStep = stepNumber;
    updateProgressBar();
}

$(document).ready(function () {
    var currentStep = 1;

    $(".next-step").click(function () {
        if (currentStep < 6) {
            $(".step").hide();
            currentStep++;
            $(".step-" + currentStep).show();
            updateProgressBar();
        }
    });

    $(".prev-step").click(function () {
        if (currentStep > 1) {
            $(".step").hide();
            currentStep--;
            $(".step-" + currentStep).show();
            updateProgressBar();
        }
    });

    const params = new URLSearchParams(window.location.search);
    const template = params.get('template');

    if (template) {
        $("#temaUndangan").val(template);
    }

    $(".form-order").on("submit", function (e) {
        e.preventDefault();

        // Data Pemesan
        var namaPemesan = $("#namaPemesan").val();
        var emailPemesan = $("#emailPemesan").val();
        var noHpPemesan = $("#noHpPemesan").val();

        // Tema Undangan
        let temaUndangan = $("#temaUndangan").val();
        var kategoriUndangan = $("#kategoriUndangan").find(":selected").text();
        var linkUndangan = $("#linkUndangan").val();

        // Data Pengantin Pria
        var namaPengantinPria = $("#namaPengantinPria").val();
        var namePanggilanPria = $("#namePanggilanPria").val();
        var nameAyahPria = $("#nameAyahPria").val();
        var nameIbuPria = $("#nameIbuPria").val();
        var igPria = $("#igPria").val();

        const params = new URLSearchParams(window.location.search);
        const template = params.get('template');

        if (template) {
            temaUndangan = template;
        } else {
            temaUndangan = $("#temaUndangan").val();
        }

        var message = `Halo, saya tertarik untuk memesan undangan digital di keundangankita.id. Berikut data terkait pesanan saya:\n\n` +
        `Data Pemesan: \n` +
        `- Nama: ${namaPemesan}\n` +
        `- Email: ${emailPemesan}\n` +
        `- No. HP: ${noHpPemesan}\n\n` +
        `Tema Undangan: \n` +
        `- Tema: ${temaUndangan}\n` +
        `- Kategori: ${kategoriUndangan}\n` +
        `- Link Undangan: ${linkUndangan}\n\n` +
        `Data Pengantin Pria: \n` +
        `- Nama: ${namaPengantinPria}\n` +
        `- Nama Panggilan: ${namePanggilanPria}\n` +
        `- Nama Ayah: ${nameAyahPria}\n` +
        `- Nama Ibu: ${nameIbuPria}\n` +
        `- Instagram: ${igPria}\n\n`;

        var phone = "6281225536642";

        var whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    });

    function updateProgressBar() {
        var totalSteps = 6;
        var progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        $(".progress-bar").css("width", progressPercentage + "%");
    }
});